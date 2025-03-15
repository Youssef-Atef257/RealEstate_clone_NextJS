import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.property.updateMany({
    data: {
      userId: "kp_3f9629c74528470786077c66746aa7de",
    },
  });
  return NextResponse.json({ success: true, message: "Seeding completed" });
}
