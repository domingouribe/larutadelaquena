<<<<<<< HEAD
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
        usd: number;
        clp: number;
    },
    youtubeLink: string;
    id: string;
=======
export interface Instrument {
    id: string;
    title: string;
    description: string;
    price: object;
    imageSrc: string;
    contactLink: string;
    youtubeLink: string;
>>>>>>> 1e8eef9f41a670d1293d3969d469e833c6f91281
}