/**
 * Know Your Biodiversity — bird species shown on /know-your-biodiversity.
 *
 * Source: the "Bird Flashcard description" sheet and the bird-call
 * recordings supplied by the GuruJal team. To add a species, append an
 * entry below and drop its call in public/uploads/2026/11/bird-calls/.
 *
 * `photo` is optional: species without one show a placeholder tile.
 */
export type Bird = {
  slug: string;
  name: string;
  scientific: string;
  /** Appearance / morphology. */
  description: string;
  behaviour: string;
  adaptivity: string;
  /** Words describing the call. */
  soundNote: string;
  /** Recording of the call (mp3). */
  audio: string;
  photo?: {
    src: string;
    alt: string;
    /** Photographer / licence line, shown under the photo when set. */
    credit?: string;
    creditUrl?: string;
  };
};

export const birds: Bird[] = [
  {
    slug: "asian-koel",
    name: "Asian Koel",
    scientific: "Eudynamys scolopaceus",
    description: "A large, long-tailed cuckoo of about 42 cm. The male is glossy blue-black with a pale greenish bill and a crimson eye. The female is brown, heavily spotted and barred with white and buff.",
    behaviour: "Shy and often hidden in dense leaves, so it is heard far more than seen. It is a brood parasite: the female lays her eggs in crow and myna nests, and the host raises the chick. It feeds mostly on fruit, especially figs, and on insects.",
    adaptivity: "It thrives in gardens, parks and tree-lined colonies because it needs fruiting trees and crow nests, both common in towns. Its parasitic breeding spares it the effort of building a nest or feeding young.",
    soundNote: "A loud, rising \"ko-el, ko-el\" from the male, repeated with growing intensity, especially in the breeding season (spring and early summer). The female gives a sharp, repeated \"kik-kik-kik\".",
    audio: "/uploads/2026/11/bird-calls/asian-koel.mp3",
  },
  {
    slug: "black-kite",
    name: "Black Kite",
    scientific: "Milvus migrans",
    description: "A medium-large raptor of about 55–60 cm with a wingspan of up to 1.5 m. It is dark brown with a pale head and a forked tail, which shows clearly in flight. Its bill is dark with a yellow base, and its wings are long and angled.",
    behaviour: "It soars for long periods on thermals, scanning the ground. It is a scavenger and opportunist, feeding on carrion, scraps, small animals, insects and sometimes fish. It roosts and nests in groups, often near water bodies and rubbish sites.",
    adaptivity: "One of the most successful raptors in towns. It uses garbage, abattoir waste and roadkill, and nests on tall trees and buildings. Its scavenging helps clean up organic waste.",
    soundNote: "A thin, high whistle followed by a quavering, trilling \"peee-ee-ee-ee-ee\". Several kites calling together can sound like a chorus of whinnies.",
    audio: "/uploads/2026/11/bird-calls/black-kite.mp3",
  },
  {
    slug: "common-myna",
    name: "Common Myna",
    scientific: "Acridotheres tristis",
    description: "A stocky bird of about 23 cm. It has a brown body, a black head and neck, and bright yellow bill, legs and bare skin behind the eye. White patches show on the wings in flight, and the tail tip and under-tail are white.",
    behaviour: "Highly social and bold. It walks briskly on the ground, feeding on insects, grain, fruit and kitchen scraps. Pairs often stay together for life, and groups gather in noisy evening roosts.",
    adaptivity: "It thrives in cities, farmland and gardens. It nests in holes in buildings, walls and tree cavities, and eats almost anything. This adaptability has made it successful far beyond its native range.",
    soundNote: "A varied mix of harsh chattering, whistles, gurgles and chuckles. It mimics other sounds and often bobs its head while calling.",
    audio: "/uploads/2026/11/bird-calls/common-myna.mp3",
  },
  {
    slug: "common-tailorbird",
    name: "Common Tailorbird",
    scientific: "Orthotomus sutorius",
    description: "A small, slim warbler of about 12 cm. It is olive-green above and whitish below, with a rufous-orange crown and forehead. The tail is thin and often cocked upright, and the male has longer central tail feathers in the breeding season.",
    behaviour: "Active and restless, hopping through bushes and gardens while hunting small insects and spiders. It gets its name from its nest: it stitches large leaves together with plant fibre or spider silk to form a cup, then lines it with soft material.",
    adaptivity: "It does well in gardens, hedges and scrub because dense foliage gives it nest sites and insects. Its leaf-stitched nest hides well from predators.",
    soundNote: "A loud, repeated \"pit-pit-pit-pit\" or \"too-wit, too-wit\" from the male, often from a low perch. It calls frequently, so it is heard far more than seen.",
    audio: "/uploads/2026/11/bird-calls/common-tailorbird.mp3",
  },
  {
    slug: "house-crow",
    name: "House Crow",
    scientific: "Corvus splendens",
    description: "A medium-sized corvid of about 40 cm. It is black with a grey neck, nape and breast, and has a stout black bill and strong legs. Its glossy black wings and tail contrast with the dull grey \"collar\".",
    behaviour: "Very intelligent and social. It forages in groups, eating scraps, grain, insects, eggs and carrion. It forms large evening roosts, mobs predators such as kites and owls, and shows strong group communication.",
    adaptivity: "It lives closely with humans and thrives on food waste. It nests on trees, poles and buildings, and learns quickly to exploit new food sources. In many areas it is a useful scavenger, though it can compete with smaller birds.",
    soundNote: "A loud, harsh \"kaa-kaa-kaa\", with softer clucks and rattles when close to the nest. Alarm calls are sharper and louder.",
    audio: "/uploads/2026/11/bird-calls/house-crow.mp3",
  },
  {
    slug: "house-sparrow",
    name: "House Sparrow",
    scientific: "Passer domesticus",
    description: "A small, plump bird of about 15 cm. The male has a grey crown, chestnut nape, black bib and whitish cheeks. The female is plain buffy-brown with a pale eyebrow stripe. Both have short, stout, seed-eating bills.",
    behaviour: "Social and noisy, living in flocks. It feeds on grains and seeds, supplemented by insects when feeding young. It takes dust baths and nests in colonies in holes and crevices.",
    adaptivity: "Closely tied to human settlements, where it nests in roofs, walls and gaps. Modern buildings with few nesting holes, pesticide use that reduces insects, and loss of green space have caused declines in many cities. Nest boxes and gardens can help.",
    soundNote: "A repeated, cheerful \"cheep-cheep, chirrup\", with chattering and trills when flocks gather.",
    audio: "/uploads/2026/11/bird-calls/house-sparrow.mp3",
  },
  {
    slug: "red-whiskered-bulbul",
    name: "Red-whiskered Bulbul",
    scientific: "Pycnonotus jocosus",
    description: "A medium-small songbird of about 20 cm. It has a tall black crest, a crimson patch behind the eye (the \"whisker\"), a white cheek and a red patch under the tail. The back is brown and the underparts are whitish.",
    behaviour: "Lively and often seen in pairs or small groups. It eats fruit, nectar, buds and insects, and perches openly on shrubs and wires. It builds a small cup nest in a bush or low tree.",
    adaptivity: "It thrives in gardens, scrub and wooded areas, where fruiting plants are plentiful. By eating and passing seeds, it helps spread many native plants.",
    soundNote: "A cheerful, bubbling \"pe-ter-pee\" or \"kick-pettigrew\", with sharper call notes, mostly given in the morning and evening.",
    audio: "/uploads/2026/11/bird-calls/red-whiskered-bulbul.mp3",
  },
  {
    slug: "rock-pigeon",
    name: "Rock Pigeon",
    scientific: "Columba livia",
    description: "A stout bird of about 31–35 cm. The wild form is blue-grey with two black wing bars, a white rump, a dark band at the tail tip and glossy green-purple feathers on the neck. Town birds vary in colour.",
    behaviour: "Gregarious, feeding on grain and seeds in flocks, mostly on the ground. It pairs for life and both parents feed chicks with \"crop milk\". It roosts and nests on ledges, cliffs and buildings.",
    adaptivity: "Originally a cliff-dweller, it has adapted well to buildings, which resemble cliff faces. It reproduces quickly and survives on grain and scraps, so it is common in cities. Large flocks can cause droppings problems.",
    soundNote: "A soft, rolling \"coo-roo-coo\", with wing claps during take-off and courtship displays.",
    audio: "/uploads/2026/11/bird-calls/rock-pigeon.mp3",
  },
  {
    slug: "rose-ringed-parakeet",
    name: "Rose-ringed Parakeet",
    scientific: "Psittacula krameri",
    description: "A slim, long-tailed parrot of about 40 cm including the tail. It is bright green with a red, hooked bill. The male has a black throat and a pink-and-black neck ring, while the female and young lack the ring.",
    behaviour: "Noisy and social. It flies fast in flocks, feeds on fruit, seeds, flowers and crops, and roosts in large groups in the evening. It nests in tree holes and holes in old walls and buildings.",
    adaptivity: "It does well near people, using cavities in trees and buildings, and feeding on fruiting trees and crops. Its adaptability has helped it spread even beyond its native range, where it can compete with local hole-nesting birds.",
    soundNote: "A loud, shrill, repeated \"kee-ak, kee-ak\" in flight and when perched. Large flocks are very noisy.",
    audio: "/uploads/2026/11/bird-calls/rose-ringed-parakeet.mp3",
  },
  {
    slug: "white-throated-kingfisher",
    name: "White-throated Kingfisher",
    scientific: "Halcyon smyrnensis",
    description: "A medium-sized kingfisher of about 28 cm. It has a bright turquoise-blue back and wings, a chocolate-brown head and belly, a white throat and breast, and a large, heavy, bright red bill.",
    behaviour: "It perches on wires, branches and poles, watching for prey and diving to catch it. It eats not only fish but also insects, lizards, frogs and small rodents, so it is often seen away from water. It nests in burrows dug into earth banks.",
    adaptivity: "Its varied diet lets it live in wetlands, farmland, gardens and dry scrub, wherever it can find perches and earth banks for nesting. It is often a sign of reasonably healthy habitat.",
    soundNote: "A loud, rattling, laughing \"ki-ki-ki-ki-ki\" in flight or from a perch, and a longer, whistling \"kililili\" in the breeding season.",
    audio: "/uploads/2026/11/bird-calls/white-throated-kingfisher.mp3",
  },
];
