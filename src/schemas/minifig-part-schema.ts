import * as z from "zod";

export const PartExternalIdsSchema = z.object({
  BrickLink: z.array(z.string()),
  BrickOwl: z.array(z.string()),
  Brickset: z.union([z.array(z.string()), z.null()]).optional(),
  LDraw: z.union([z.array(z.string()), z.null()]).optional(),
  LEGO: z.union([z.array(z.string()), z.null()]).optional(),
  Peeron: z.union([z.array(z.string()), z.null()]).optional(),
});
export type PartExternalIds = z.infer<typeof PartExternalIdsSchema>;

export const PartSchema = z.object({
  part_num: z.string(),
  name: z.string(),
  part_cat_id: z.number(),
  part_url: z.string(),
  part_img_url: z.string(),
  external_ids: PartExternalIdsSchema,
  print_of: z.union([z.null(), z.string()]),
});
export type Part = z.infer<typeof PartSchema>;

export const PeeronSchema = z.object({
  ext_ids: z.array(z.null()),
  ext_descrs: z.array(z.array(z.string())),
});
export type Peeron = z.infer<typeof PeeronSchema>;

export const BrickLinkSchema = z.object({
  ext_ids: z.array(z.number()),
  ext_descrs: z.array(z.array(z.string())),
});
export type BrickLink = z.infer<typeof BrickLinkSchema>;

export const ColorExternalIdsSchema = z.object({
  BrickLink: BrickLinkSchema,
  BrickOwl: BrickLinkSchema,
  LEGO: BrickLinkSchema,
  Peeron: PeeronSchema,
  LDraw: BrickLinkSchema,
});
export type ColorExternalIds = z.infer<typeof ColorExternalIdsSchema>;

export const ColorSchema = z.object({
  id: z.number(),
  name: z.string(),
  rgb: z.string(),
  is_trans: z.boolean(),
  external_ids: ColorExternalIdsSchema,
});
export type Color = z.infer<typeof ColorSchema>;

export const MinifigPartSchema = z.object({
  id: z.number(),
  inv_part_id: z.number(),
  part: PartSchema,
  color: ColorSchema,
  set_num: z.string(),
  quantity: z.number(),
  is_spare: z.boolean(),
  element_id: z.union([z.null(), z.string()]),
  num_sets: z.number(),
});
export type MinifigPart = z.infer<typeof MinifigPartSchema>;

export const MinifigPartsResponseSchema = z.object({
  count: z.number(),
  next: z.null(),
  previous: z.null(),
  results: z.array(MinifigPartSchema),
});
export type MinifigPartsResponse = z.infer<typeof MinifigPartsResponseSchema>;
