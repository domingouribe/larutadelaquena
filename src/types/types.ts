export interface menuItem { // Acá no es interface props. Se debe llamar como el type
    title: string;
    url: string;
}

export interface offeringItem {
    image: string;
    alt: string;
    title: string;
    description: string;
    price: {
        clp: number;
    },
    youtubeLink: string;
    id: string;
    detailLink: string;
}