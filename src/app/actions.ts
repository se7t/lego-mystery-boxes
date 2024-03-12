"use server";

import { Minifig } from "@/schemas/minifigs-schema";
import { MinifigPart } from "@/schemas/minifig-part-schema";

export const getMinifigs = async () => {
  const response = await fetch(
    "https://rebrickable.com/api/v3/lego/minifigs/?page_size=999&in_theme_id=246",
    {
      headers: {
        Authorization: `key ${process.env.REBRICKABLE_API_KEY}`,
      },
    },
  );

  const data = await response.json();

  return data.results as Minifig[];
};

export const getSingleMinifig = async (set_num: string) => {
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/minifigs/${set_num}`,
    {
      headers: {
        Authorization: `key ${process.env.REBRICKABLE_API_KEY}`,
      },
    },
  );

  const data = await response.json();

  return data as Minifig;
};

export const getMinifigParts = async (set_num: string) => {
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/minifigs/${set_num}/parts/?page_size=999`,
    {
      headers: {
        Authorization: `key ${process.env.REBRICKABLE_API_KEY}`,
      },
    },
  );

  const data = await response.json();

  return data.results as MinifigPart[];
};
