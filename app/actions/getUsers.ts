import getSession from "./getSession";
import prisma from "@/app/libs/prismadb";

export const getUsers = async () => {
	const session = await getSession();
	if (!session?.user?.email) return [];

	try {
		const users = prisma.user.findMany({
			where: {
				NOT: {
					email: session?.user?.email,
				},
			},
			orderBy: { createdAt: "desc" },
		});

		return users;
	} catch (e: any) {
		return [];
	}
};
