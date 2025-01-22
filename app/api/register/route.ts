import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    try {
        const body = await req.json();
        const {name, email,password} = body;

        if(!email || !password || !name){
            return NextResponse.json({message: "Missing required fields"}, {status:400});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword,
            },
        });

        return NextResponse.json({message: "User created successfully", user}, {status: 201});

    } catch (error) {
        console.log("ERROR_REGISTER_USER", error);
        return NextResponse.json({message: "An error occurred while creating the user"}, {status: 500});
    }
}
