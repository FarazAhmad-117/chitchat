import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { NextApiRequest } from "next";

export async function POST(request: NextApiRequest) {
  try {
    const currentUser = await getCurrentUser();
    const body = request.body;

    const { name, image } = body;

    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name: name,
        image: image,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log("ERROR_SETTINGS", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
