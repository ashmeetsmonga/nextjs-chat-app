export const getConversations = async (userID: string) => {
	const res = await fetch(`/api/conversations`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ userID }),
	});
	const data = await res.json();
	return data;
};
