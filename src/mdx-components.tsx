import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

/**
 * Global MDX component overrides.
 * Applied to every MDX file rendered through @next/mdx.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="mt-2 mb-6 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl" {...props} />
    ),
    h2: (props) => (
      <h2 className="mt-12 mb-4 text-3xl font-semibold tracking-tight text-brand-ink" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-8 mb-3 text-2xl font-semibold tracking-tight text-brand-ink" {...props} />
    ),
    p: (props) => (
      <p className="my-4 text-base leading-7 text-brand-ink/85" {...props} />
    ),
    a: ({ href = "", ...rest }) => {
      const isExternal = /^https?:\/\//.test(href);
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary underline decoration-brand-accent underline-offset-2 hover:text-brand-primary-dark"
            {...rest}
          />
        );
      }
      return (
        <Link
          href={href}
          className="text-brand-primary underline decoration-brand-accent underline-offset-2 hover:text-brand-primary-dark"
          {...rest}
        />
      );
    },
    ul: (props) => <ul className="my-4 list-disc pl-6 space-y-1.5" {...props} />,
    ol: (props) => <ol className="my-4 list-decimal pl-6 space-y-1.5" {...props} />,
    blockquote: (props) => (
      <blockquote className="my-6 border-l-4 border-brand-accent bg-brand-mist px-5 py-3 italic text-brand-ink/85" {...props} />
    ),
    img: (props) => {
      const { src = "", alt = "", width, height, ...rest } = props as ImageProps & { src?: string };
      return (
        <Image
          src={src as string}
          alt={alt as string}
          width={typeof width === "number" ? width : 1200}
          height={typeof height === "number" ? height : 800}
          className="my-6 h-auto w-full rounded-lg"
          {...(rest as object)}
        />
      );
    },
    ...components,
  };
}
