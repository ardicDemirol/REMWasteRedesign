import type { Skip } from "../types/skip";

export const transformSkips = (apiSkips: any[]): Skip[] => {
  const sizeDetails: Record<
    number,
    { dimensions: string; capacity: string; image: string }
  > = {
    4: {
      dimensions: "3.5' x 5' x 3'",
      capacity: "20-25 black bags",
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg",
    },
    6: {
      dimensions: "4' x 6' x 3.5'",
      capacity: "30-35 black bags",
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg",
    },
    8: {
      dimensions: "5' x 7' x 4'",
      capacity: "40-45 black bags",
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg",
    },
    10: {
      dimensions: "5.5' x 8' x 4.5'",
      capacity: "50-55 black bags",
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg",
    },
    12: {
      dimensions: "6' x 8' x 5'",
      capacity: "60-65 black bags",
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg",
    },
    14: {
      dimensions: "7' x 9' x 5.5'",
      capacity: "70-75 black bags",
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg",
    },
    16: {
      dimensions: "8' x 10' x 6'",
      capacity: "80-85 black bags",
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg",
    },
    20: {
      dimensions: "10' x 12' x 7'",
      capacity: "100-110 black bags",
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg",
    },
    40: {
      dimensions: "20' x 8' x 8'",
      capacity: "200-220 black bags",
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg",
    },
  };

  return apiSkips.map((skip) => ({
    ...skip,
    dimensions:
      sizeDetails[skip.size]?.dimensions ||
      `${skip.size / 2}' x ${skip.size / 2 + 2}' x ${skip.size / 3}'`,
    capacity:
      sizeDetails[skip.size]?.capacity ||
      `${skip.size * 5}-${skip.size * 5 + 5} black bags`,
    image:
      sizeDetails[skip.size]?.image ||
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    popular: skip.size === 8 || skip.size === 6,
  }));
};
