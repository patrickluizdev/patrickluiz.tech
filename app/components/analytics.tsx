"use client";

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	if (!token) {
		return null;
	}
	return (
		<script
			src=""
			data-token={token}
			async
		/>
	);
}
