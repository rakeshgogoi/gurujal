/**
 * Helper for building Sanity image URLs with on-the-fly transforms.
 * Use as: `urlFor(image).width(1600).fit("max").url()`.
 */
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { projectId, dataset } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
