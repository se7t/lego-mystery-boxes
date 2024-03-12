import { NextResponse } from "next/server";
import { submitFormSchema } from "@/schemas/submit-form-schema";

export async function POST(request: Request) {
  const data = await request.json();
  const result = submitFormSchema.safeParse(data);

  const generateOrderID = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const orderID = generateOrderID();

  if (!result.success) {
    return new NextResponse(JSON.stringify(result.error), { status: 403 });
  }

  return new NextResponse(JSON.stringify(orderID), { status: 200 });
}
