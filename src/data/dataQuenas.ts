import { v4 as uuidv4 } from 'uuid';
import type { offeringItem } from '../types/types';

const dataQuenas: offeringItem[] = [
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de ébano africano",
        image: "/src/assets/images/ebano1.jpg",
        alt: "Quena de lujo en madera de ebano africano - Foto frontal muestra todo el instrumento",
        description: "Quena profesional fabricada en madera de ébano africano de Gabón",
        price: {
            clp: 260000,
            usd: 345
        },
        youtubeLink: "https://youtu.be/5zw1Hmfjx_0?si=mVsYxC9Pj6-m-tq1"
    },
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de cocobolo",
        image: "/src/assets/images/cocobolo1.jpg",
        alt: "Quena de lujo en madera de ebano africano - Foto frontal muestra todo el instrumento",
        description: "Quena profesional fabricada en madera de cocobolo",
        price: {
            clp: 260000,
            usd: 345
        },
        youtubeLink: "https://youtu.be/pcdFF_nqCD8?si=DrXivFiyRhqPRozg"
    },
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de ébano asiático",
        image: "/src/assets/images/ebano-asiatico1.jpg",
        alt: "Quena de lujo en madera de ebano africano - Foto frontal muestra todo el instrumento",
        description: "Quena profesional fabricada en madera de ébano asiático",
        price: {
            clp: 290000,
            usd: 375
        },
        youtubeLink: "https://youtu.be/ZSg3y58Ote0?si=OL3z2w2c56O4DzlI"
    },
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de haya rosada",
        image: "/src/assets/images/haya-rosada2.jpg",
        alt: "Foto quena de haya rosada - Se muestra todo el instrumento destacando su color y las vetas de la madera",
        description: "Quena profesional fabricada en madera de haya rosada",
        price: {
            clp: 155,
            usd: 235
        },
        youtubeLink: "https://youtu.be/2nSWItibXuI?si=6qllTxComjBCKOs-"
    },
    {
        id: uuidv4(),
        title: "Quena profesional en madera de jacarandá",
        image: "/src/assets/images/jacaranda1.jpg",
        alt: "Foto quena de jacarandá - Se muestra todo el instrumento destacando su color marón oscuro y las vetas de la madera",
        description: "Quena profesional fabricada en madera de jacarandá",
        price: {
            clp: 135,
            usd: 215
        },
        youtubeLink: "https://youtu.be/fdwPbf0Ipls?si=vCwA2feOzcKDhHxB"
    },
    {
        id: uuidv4(),
        title: "Quena profesional en bambú",
        image: "/src/assets/images/bambu1.jpg",
        alt: "Foto quena de bambú - Se muestra todo el instrumento destacando su color marón amarillo claro y la perfección de sus orificios y simetría",
        description: "Quena profesional fabricada en bambú de primera calidad",
        price: {
            clp: 85,
            usd: 160
        },
        youtubeLink: "https://youtu.be/67PS4Uwyy2A?si=ZMLx2hDdO4YWxOCp"
    }

];

export default dataQuenas