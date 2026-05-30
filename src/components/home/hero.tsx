"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Homepage hero — YouTube video background ("Gurujal Intro", id 3olgmTIt80U)
 * matching the live site's Slider Revolution hero.
 *
 *  - Static poster image is rendered behind the iframe so users always see
 *    something while the YouTube embed loads (and on browsers / contexts
 *    where autoplay is blocked, e.g. localhost / private mode, the poster
 *    remains visible).
 *  - The iframe sits on top with `pointer-events:none` so CTAs work.
 *  - The headline rotates through three lines on a 6-second schedule.
 */
const YT_ID = "3olgmTIt80U";

const headlines = [
  {
    lead: "We",
    action: "REVITALIZE",
    suffix: "communities to make India",
    emphasis: "WATER-SECURE",
  },
  {
    lead: "We",
    action: "REVIVE",
    suffix: "water bodies to restore natural",
    emphasis: "ECOSYSTEMS",
  },
  {
    lead: "We",
    action: "DRIVE",
    suffix: "climate resilience through",
    emphasis: "ECO-RESTORATION",
  },
];

const AUTO_MS = 6000;

export function Hero() {
  const [idx, setIdx] = useState(0);

  // Keep the YouTube iframe hidden until the video is actually playing.
  // Otherwise YouTube's branded "loading + play button" overlay flashes
  // on top of the poster for a beat while the player initialises, even
  // with controls=0 and modestbranding=1. We listen for the iframe's
  // postMessage "PLAYING" state and only then fade the iframe in.
  const [videoReady, setVideoReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const next = useCallback(() => setIdx((i) => (i + 1) % headlines.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + headlines.length) % headlines.length), []);

  useEffect(() => {
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [next]);

  // YouTube iframe lifecycle, via the official IFrame Player API.
  //
  //   1. Lazy-load https://www.youtube.com/iframe_api once per page.
  //   2. When the API is ready, attach a `YT.Player` to our iframe.
  //   3. Subscribe to onStateChange + poll getCurrentTime. Only flip
  //      videoReady once playback time has advanced past 0.5s —
  //      proving the video is genuinely playing (not just buffering
  //      with the play overlay still showing).
  //
  // CRITICAL: if autoplay is blocked by the browser, we deliberately
  // DO NOT show the iframe ever. The poster image stays as the hero
  // backdrop. Showing the iframe in that state would expose YouTube's
  // big "click to play" button overlay — which is the exact bug we
  // were chasing on first load.
  useEffect(() => {
    if (typeof window === "undefined") return;

    /* eslint-disable @typescript-eslint/no-explicit-any */
    let player: any = null;
    let pollId: number | undefined;
    let graceTimer: number | undefined;

    const attach = () => {
      const w = window as any;
      if (!w.YT || !w.YT.Player) return;
      const iframe = iframeRef.current;
      if (!iframe) return;

      // Best-effort quality bump. YouTube auto-selects based on player
      // size, and 1280x720 iframes tend to get 720p. We explicitly ask
      // for hd1080 via the IFrame API.
      //
      // These methods have been gradually deprecated; we call them
      // inside try/catch and only ONCE per session (not on every
      // state change) to minimise the re-buffer flash that triggered
      // YouTube's center HUD in earlier iterations. Because the
      // iframe is still invisible while we do this, any HUD that does
      // appear is off-screen.
      const requestHighestQuality = (p: any) => {
        try {
          if (typeof p.setPlaybackQualityRange === "function") {
            p.setPlaybackQualityRange("hd1080", "hd1080");
          }
        } catch {
          /* method may be removed */
        }
        try {
          if (typeof p.setPlaybackQuality === "function") {
            p.setPlaybackQuality("hd1080");
          }
        } catch {
          /* method may be removed */
        }
      };

      // Wait until the video has been playing CONTINUOUSLY for 3 seconds.
      //
      // YouTube's center HUD (previous / play-pause / next buttons)
      // flashes briefly at state transitions even with controls=0.
      // After ~3s of uninterrupted playback the HUD has reliably faded
      // and the iframe is safe to reveal.
      //
      // We also reset the wait if YouTube enters BUFFERING (3) at any
      // point — buffering causes the HUD to reappear, so we want to
      // start the clock again once playback resumes.
      //
      // If real playback never starts (autoplay blocked, network hung)
      // we never reveal the iframe. The poster stays as the backdrop.
      let waitStartTime = 0;
      const waitForRealPlayback = (p: any) => {
        if (pollId) clearTimeout(pollId);
        waitStartTime = performance.now();
        const poll = () => {
          try {
            const t =
              typeof p.getCurrentTime === "function" ? p.getCurrentTime() : 0;
            const elapsed = performance.now() - waitStartTime;
            // Need both: real time advancement past 1s AND at least
            // 3000ms of wall-clock since playback started.
            if (t > 1.0 && elapsed > 3000) {
              graceTimer = window.setTimeout(() => setVideoReady(true), 300);
              return;
            }
          } catch {
            /* ignore — player may be tearing down */
          }
          pollId = window.setTimeout(poll, 150);
        };
        poll();
      };

      let qualityRequested = false;
      player = new w.YT.Player(iframe, {
        events: {
          onReady: (e: any) => {
            // Ask for 1080p as soon as the player is ready, while the
            // iframe is still invisible.
            requestHighestQuality(e?.target);
            qualityRequested = true;
          },
          onStateChange: (e: any) => {
            // YT.PlayerState.PLAYING === 1
            // YT.PlayerState.BUFFERING === 3
            if (e?.data === 1) {
              // First time PLAYING after onReady: ask again. YouTube
              // sometimes ignores pre-playback quality requests but
              // honours one issued during playback. After this we
              // never request again — repeated calls trigger HUD
              // flashes.
              if (qualityRequested) {
                requestHighestQuality(e?.target);
                qualityRequested = false;
              }
              waitForRealPlayback(e?.target);
            } else if (e?.data === 3) {
              // Buffering — the HUD may reappear. Abort current wait;
              // next PLAYING will restart it.
              if (pollId) clearTimeout(pollId);
              if (graceTimer) clearTimeout(graceTimer);
            }
          },
        },
      });
    };

    const w = window as any;
    if (w.YT && w.YT.Player) {
      attach();
    } else {
      // Add the API script once. Chain onYouTubeIframeAPIReady so we
      // don't trample any other listener that might be present.
      const existing = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (!existing) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.async = true;
        document.body.appendChild(tag);
      }
      const previous = w.onYouTubeIframeAPIReady;
      w.onYouTubeIframeAPIReady = () => {
        if (typeof previous === "function") previous();
        attach();
      };
    }

    return () => {
      if (pollId) clearTimeout(pollId);
      if (graceTimer) clearTimeout(graceTimer);
      if (player && typeof player.destroy === "function") {
        try {
          player.destroy();
        } catch {
          /* iframe may already be detached */
        }
      }
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }, []);

  // YouTube embed params — tuned for reliable muted autoplay AND the
  // highest available quality.
  //
  //  - autoplay=1 + mute=1 to satisfy browser autoplay policies
  //  - loop=1 + playlist=ID to make a single video loop
  //  - playsinline=1 for iOS (critical — iOS Safari won't autoplay
  //    fullscreen takeovers, only inline)
  //  - controls=0 + showinfo=0 + modestbranding=1 + iv_load_policy=3
  //    hide YouTube chrome
  //  - rel=0, disablekb=1, fs=0 for safety
  //  - enablejsapi=1 enables the IFrame Player API
  //  - vq=hd1080 hints the highest playback quality. YouTube has
  //    formally deprecated this param but many embed paths still honour
  //    it as an opening quality hint. We also reinforce the request
  //    once playback starts via setPlaybackQualityRange (see below).
  //  - hd=1 is an additional historical quality hint, still respected
  //    by some clients.
  const ytSrc =
    `https://www.youtube.com/embed/${YT_ID}` +
    `?autoplay=1&mute=1&controls=0&loop=1&playlist=${YT_ID}` +
    `&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3` +
    `&disablekb=1&fs=0&showinfo=0&enablejsapi=1` +
    `&vq=hd1080&hd=1`;

  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Video background.
          Layer order (bottom→top):
            1. poster image (always visible — fallback if video can't autoplay)
            2. YouTube iframe (covers the poster once video starts)
            3. dark gradient overlay for headline contrast */}
      <div className="absolute inset-0 -z-10">
        {/* Poster — always rendered, no fade. Greyscaled to match the
            video, so the crossfade from poster to iframe doesn't jump
            from colour to B&W. */}
        <Image
          src="/uploads/2026/03/Support-a-pond-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover [filter:grayscale(1)]"
          sizes="100vw"
        />

        <div className="absolute inset-0 overflow-hidden">
          {/*
            Video-cover sizing for a 16:9 YouTube embed:
              width  = max(100vw, 87vh * 16/9)   // i.e. max(100vw, 155vh)
              height = width * 9/16               // maintained via aspect-video
            The hero is sized at min-h-[85vh], so we only need to guarantee
            coverage up to ~87vh of height (small safety margin). This
            gives less aggressive zoom-in than covering a full 100vh.
            At a 1280x800 viewport the iframe lands at 1280x720, vs the
            previous 1422x800 — ~9% less crop on each axis on typical
            laptops while still preventing letterbox gaps.
          */}
          {/*
            Visibility is driven by inline style — not a CSS class — so
            the iframe is guaranteed invisible from the very first paint
            regardless of when Tailwind's CSS chunk lands. While hidden
            we also set visibility:hidden so the iframe is excluded from
            the rendering tree entirely.
          */}
          <iframe
            ref={iframeRef}
            title="GuruJal Intro"
            src={ytSrc}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video w-[max(100vw,155vh)]"
            style={{
              border: 0,
              opacity: videoReady ? 1 : 0,
              visibility: videoReady ? "visible" : "hidden",
              pointerEvents: "none",
              // Desaturate the video to black and white. Combined with
              // the dark teal overlay above, the hero gets a moody,
              // editorial feel rather than competing with the colour
              // palette of the rest of the page.
              filter: "grayscale(1)",
              transition: "opacity 700ms cubic-bezier(.4, 0, .2, 1)",
            }}
          />
        </div>

        {/* Dark overlay for readability — keep it light so the video shows through */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/55 via-brand-deep/35 to-brand-deep/70" />
      </div>

      {/*
        Hero content container. Header is in normal flow above so the hero
        can use the full viewport for impact. min-h tuned so the headline
        and CTA sit comfortably with breathing room above and below.
      */}
      {/*
        Mobile: min-h reserves 200px for the announcement bar (50),
        sticky header (80) and the section anchor nav below the hero
        (~70) — so the nav peeks into view at first paint without
        scrolling.
        sm+: revert to 85vh for the cinematic full-viewport feel on
        bigger screens.
      */}
      <div className="mx-auto flex min-h-[calc(100svh-200px)] sm:min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* Rotating headline — one <h1> swapped on idx change, with a key
            forcing remount so the fade-in animation replays cleanly without
            overlapping the previous slide. */}
        <div className="relative min-h-[120px] sm:min-h-[140px] lg:min-h-[170px]">
          <h1
            key={idx}
            className="absolute inset-0 flex flex-col justify-center text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl gj-headline-enter"
          >
            <span>
              <span className="inline-block rounded-md bg-brand-teal px-3 py-1 text-white shadow-lg shadow-black/20">
                {headlines[idx].lead}
              </span>{" "}
              <span className="text-brand-teal-bright">{headlines[idx].action}</span>{" "}
              <span className="text-white/95">{headlines[idx].suffix}</span>{" "}
              <span className="text-brand-green">{headlines[idx].emphasis}</span>
            </span>
          </h1>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white hover:text-brand-deep"
          >
            Know More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          {/* Headline dot pagination */}
          <div className="ml-2 flex gap-2" role="tablist" aria-label="Hero slides">
            {headlines.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === idx}
                aria-label={`Show headline ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-brand-orange" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Prev / next arrows */}
      <button
        type="button"
        aria-label="Previous headline"
        onClick={prev}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep lg:block"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next headline"
        onClick={next}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep lg:block"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
}
