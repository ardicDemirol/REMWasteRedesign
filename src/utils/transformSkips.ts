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
        "https://images.unsplash.com/photo-1606830733744-0ad38e29fb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    6: {
      dimensions: "4' x 6' x 3.5'",
      capacity: "30-35 black bags",
      image:
        "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    8: {
      dimensions: "5' x 7' x 4'",
      capacity: "40-45 black bags",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    10: {
      dimensions: "5.5' x 8' x 4.5'",
      capacity: "50-55 black bags",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    12: {
      dimensions: "6' x 8' x 5'",
      capacity: "60-65 black bags",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363e7e8b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    14: {
      dimensions: "7' x 9' x 5.5'",
      capacity: "70-75 black bags",
      image:
        "https://images.unsplash.com/photo-1600566752225-3f850c1622a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    16: {
      dimensions: "8' x 10' x 6'",
      capacity: "80-85 black bags",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    20: {
      dimensions: "10' x 12' x 7'",
      capacity: "100-110 black bags",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    40: {
      dimensions: "20' x 8' x 8'",
      capacity: "200-220 black bags",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
