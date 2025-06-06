import type { Skip } from "../types/skip";

export const getDisplayPrice = (skip: Skip) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  return Math.round(totalPrice);
};
