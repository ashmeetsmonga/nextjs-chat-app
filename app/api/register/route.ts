import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, password } = body;

		if (!email || !name || !password)
			return NextResponse.json({ msg: "Missing info" }, { status: 400 });

		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(password, salt);

		const user = await prisma.user.create({ data: { name, email, hashedPassword } });
		return NextResponse.json(user);
	} catch (e: any) {
		return NextResponse.json({ msg: "Registration error" }, { status: 500 });
	}
}
