import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request) {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser || !currentUser.email)
			return NextResponse.json({ msg: "Unauthorized" }, { status: 404 });

		const body = await req.json();
		const { userID } = body;

		const existingConversations = await prisma.conversation.findMany({
			where: {
				OR: [
					{
						userIds: {
							equals: [currentUser.id, userID],
						},
					},
					{
						userIds: {
							equals: [userID, currentUser.id],
						},
					},
				],
			},
		});

		const singleExistingConversation = existingConversations[0];
		if (singleExistingConversation) return NextResponse.json(singleExistingConversation);

		const newConversation = await prisma.conversation.create({
			data: {
				users: {
					connect: [
						{
							id: currentUser.id,
						},
						{
							id: userID,
						},
					],
				},
			},
			include: {
				users: true,
			},
		});

		return NextResponse.json(newConversation);
	} catch (e: any) {
		return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
	}
}
