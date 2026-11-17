import optimized from "../data/optimized-images.json";

/** Maps only assets emitted by the build optimizer; never guesses a URL. */
export function deliveryImage(src: string): string {
  return (optimized as Record<string, string>)[src] ?? src;
}
