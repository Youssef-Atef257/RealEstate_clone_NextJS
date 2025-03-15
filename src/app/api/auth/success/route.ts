import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    return NextResponse.redirect("http://localhost:3000/auth/login");
  }

  try {
    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!dbUser) {
      await prisma.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
        },
      });
    }

    return NextResponse.redirect("http://localhost:3000/");
    
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.redirect("http://localhost:3000/auth/login?error=1");
  }
}