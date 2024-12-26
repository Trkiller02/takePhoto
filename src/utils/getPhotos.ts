import { Env } from "./envKeys";
import type { Photo, ResponsePhoto } from "./interfaces";

export const getPhotos = async (options?: {
	query?: string;
	page?: number;
	limit?: number;
	size?: "small" | "medium" | "large";
	orientation?: "landscape" | "portrait" | "square";
	locale?: string;
}): Promise<ResponsePhoto> => {
	try {
		const urlBase = new URL("https://api.pexels.com/v1/search");

		const { query, page, limit, size, orientation, locale } = options ?? {
			query: "nature",
			size: "small",
			locale: "es-ES",
		};

		urlBase.searchParams.append("query", query ?? "nature");
		if (limit) urlBase.searchParams.append("per_page", limit.toString());
		if (page) urlBase.searchParams.append("page", page.toString());
		if (size) urlBase.searchParams.append("size", size);
		if (orientation) urlBase.searchParams.append("orientation", orientation);
		if (locale) urlBase.searchParams.append("locale", locale);

		const response = await fetch(urlBase, {
			headers: {
				Authorization: Env.PEXELS_API_KEY,
			},
		});

		console.log(urlBase);

		console.log({
			limit: response.headers.get("x-ratelimit-limit"),
			remaining: response.headers.get("x-ratelimit-remaining"),
			reset: new Date(
				Number(response.headers.get("x-ratelimit-reset")) * 1000,
			).toLocaleDateString("es-VE"),
		});

		const data: ResponsePhoto = await response.json();

		return data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
