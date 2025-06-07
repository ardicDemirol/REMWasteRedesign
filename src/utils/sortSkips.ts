import type { Skip } from "../types/skip";

export type SortOption = "price-asc" | "price-desc" | "size-asc" | "size-desc";

export function sortSkips(skips: Skip[], sortOption: SortOption): Skip[] {
  return [...skips].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price_before_vat - b.price_before_vat;
      case "price-desc":
        return b.price_before_vat - a.price_before_vat;
      case "size-asc":
        return a.size - b.size;
      case "size-desc":
        return b.size - a.size;
      default:
        return 0;
    }
  });
}
