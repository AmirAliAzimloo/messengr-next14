import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export default async function POST(request : Request) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        // const {
        //     userId,
        // } = body;
        

    } catch (error:any) {
        return new NextResponse("Internal Error",{ status:500 })
    }
}