export interface Photo {
	id: number;
	width: number;
	height: number;
	url: string;
	avg_color: string;
	src: PhotoSizes;
	alt: string;
}

export interface PhotoSizes {
	original: string;
	large2x: string;
	large: string;
	medium: string;
	small: string;
	portrait: string;
	landscape: string;
	tiny: string;
}

export interface ResponsePhoto {
	total_results: number;
	page: number;
	per_page: number;
	photos: Photo[];
	next_page: string;
}
