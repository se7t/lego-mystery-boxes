import * as z from "zod";

export const MinifigSchema = z.object({
  set_num: z.string(),
  name: z.string(),
  num_parts: z.number(),
  set_img_url: z.union([z.null(), z.string()]),
  set_url: z.string(),
  last_modified_dt: z.coerce.date(),
});
export type Minifig = z.infer<typeof MinifigSchema>;

export const MinifigsSchema = z.object({
  count: z.number(),
  next: z.null(),
  previous: z.null(),
  results: z.array(MinifigSchema),
});
export type Minifigs = z.infer<typeof MinifigsSchema>;
