import { v4 as uuidv4 } from 'uuid';
import type { offeringItem } from '../types/types';

const dataQuenas: offeringItem[] = [
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de ébano africano",
        image: "/src/assets/offerings/ebano-africano.jpg",
        alt: "Quena de lujo en madera de ebano africano - Foto frontal muestra todo el instrumento",
        description: "Quena profesional fabricada en madera de ébano africano de Gabón",
        priceCLP: 320000,
        youtubeLink: "https://youtu.be/5zw1Hmfjx_0?si=mVsYxC9Pj6-m-tq1",
        detailLink: '/catalog/quena-ebano-africano'
    },
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de cocobolo",
        image: "/src/assets/offerings/cocobolo.jpg",
        alt: "Quena de lujo en madera de cocobolo - Foto frontal muestra todo el instrumento",
        description: "Quena profesional fabricada en madera de cocobolo",
        priceCLP: 320000,
        youtubeLink: "https://youtu.be/pcdFF_nqCD8?si=DrXivFiyRhqPRozg",
        detailLink: '/catalog/quena-cocobolo'
    },
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de ébano asiático",
        image: "/src/assets/offerings/ebano-asiatico.jpg",
        alt: "Quena de lujo en madera de ebano asiático - Foto frontal muestra todo el instrumento",
        description: "Quena profesional fabricada en madera de ébano asiático",
        priceCLP: 345000,
        youtubeLink: "https://youtu.be/ZSg3y58Ote0?si=OL3z2w2c56O4DzlI",
        detailLink: '/catalog/quena-ebano-asiatico'
    },
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de haya rosada",
        image: "/src/assets/offerings/haya-rosada.jpg",
        alt: "Foto quena de haya rosada - Se muestra todo el instrumento destacando su color y las vetas de la madera",
        description: "Quena profesional fabricada en madera de haya rosada",
        priceCLP: 175000,
        youtubeLink: "https://youtu.be/2nSWItibXuI?si=6qllTxComjBCKOs-",
        detailLink: '/catalog/quena-haya-rosada'
    },
    {
        id: uuidv4(),
        title: "Quena profesional en madera de jacarandá",
        image: "/src/assets/offerings/jacaranda.jpg",
        alt: "Foto quena de jacarandá - Se muestra todo el instrumento destacando su color marón oscuro y las vetas de la madera",
        description: "Quena profesional fabricada en madera de jacarandá",
        priceCLP: 155000,
        youtubeLink: "https://youtu.be/fdwPbf0Ipls?si=vCwA2feOzcKDhHxB",
        detailLink: '/catalog/quena-jacaranda'
    },
    {
        id: uuidv4(),
        title: "Quena profesional en bambú",
        image: "/src/assets/offerings/bambu.jpg",
        alt: "Foto quena de bambú - Se muestra todo el instrumento destacando su color marón amarillo claro y la perfección de sus orificios y simetría",
        description: "Quena profesional fabricada en bambú de primera calidad",
        priceCLP: 85000,
        youtubeLink: "https://youtu.be/67PS4Uwyy2A?si=ZMLx2hDdO4YWxOCp",
        detailLink: '/catalog/quena-bambu'
    },
    {
        id: uuidv4(),
        title: "Quena PVC",
        image: "/src/assets/offerings/pvc.jpg",
        alt: "Foto quena de PVC - Se muestra todo el instrumento",
        description: "Quena de estudio en material de PVC",
        priceCLP: 55000,
        youtubeLink: "https://youtu.be/67PS4Uwyy2A?si=ZMLx2hDdO4YWxOCp",
        detailLink: '/catalog/pvc'
    },
];

export default dataQuenas