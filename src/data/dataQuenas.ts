import { v4 as uuidv4 } from 'uuid';
import type { offeringItem } from '../types/types';

const dataQuenas: offeringItem[] = [
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de ébano africano",
        image: "/src/assets/offerings/ebano-africano.jpg",
        alt: "Quena de ébano. Luce su color negro brillante. Se puede ver el instrumento completo en perspectiva.",
        description: "Quena profesional fabricada en madera de ébano africano de Gabón.",
        priceCLP: 320000,
        youtubeLink: "https://youtu.be/5zw1Hmfjx_0?si=mVsYxC9Pj6-m-tq1",
        detailLink: '/catalog/quena-ebano-africano'
    },
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de cocobolo",
        image: "/src/assets/offerings/cocobolo.jpg",
        alt: "Quena en madera de cocobolo. Luce su color rojizo. Es sostenida por la mano del luthier.",
        description: "Quena profesional fabricada en madera de cocobolo",
        priceCLP: 320000,
        youtubeLink: "https://youtu.be/pcdFF_nqCD8?si=DrXivFiyRhqPRozg",
        detailLink: '/catalog/quena-cocobolo'
    },
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de ébano asiático",
        image: "/src/assets/offerings/ebano-asiatico.jpg",
        alt: "Quena de ébano asiático. Luce su color marrón muy oscuro, casi negro y su brillo. Se puede ver el instrumento completo en perspectiva.",
        description: "Quena profesional fabricada en madera de ébano asiático",
        priceCLP: 345000,
        youtubeLink: "https://youtu.be/ZSg3y58Ote0?si=OL3z2w2c56O4DzlI",
        detailLink: '/catalog/quena-ebano-asiatico'
    },
    {
        id: uuidv4(),
        title: "Quena de lujo en madera de haya rosada",
        image: "/src/assets/offerings/haya-rosada.jpg",
        alt: "Quena de haya rosada. Se ve la parte superior del instrumento. Luce su color claro, amarrillo y rosado.",
        description: "Quena profesional fabricada en madera de haya rosada",
        priceCLP: 175000,
        youtubeLink: "https://youtu.be/2nSWItibXuI?si=6qllTxComjBCKOs-",
        detailLink: '/catalog/quena-haya-rosada'
    },
    {
        id: uuidv4(),
        title: "Quena profesional en madera de jacarandá",
        image: "/src/assets/offerings/jacaranda.jpg",
        alt: "Quena de jacarandá. Luce todo el instrumento destacando su color marón oscuro y las vetas de la madera",
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
        title: "Quenacho profesional de bambú",
        image: "/src/assets/offerings/quenacho-bambu.jpg",
        alt: "Foto quenacho de bambú - Se muestra todo el instrumento destacando su color marón oscuro y la perfección de sus orificios y simetría",
        description: "Quenacho profesional fabricada en bambú de primera calidad",
        priceCLP: 105000,
        youtubeLink: "https://youtu.be/HzwafdfEsy0",
        detailLink: '/catalog/quena-bambu'
    },
    {
        id: uuidv4(),
        title: "Quena PVC",
        image: "/src/assets/offerings/pvc.jpg",
        alt: "Foto quena de PVC - Se muestra todo el instrumento",
        description: "Quena de estudio en material de PVC",
        priceCLP: 38000,
        youtubeLink: "https://youtu.be/wyrgphcybiQ",
        detailLink: '/catalog/pvc'
    },
    {
        id: uuidv4(),
        title: "Quenacho PVC",
        image: "/src/assets/offerings/pvc.jpg",
        alt: "Foto quenacho de PVC color naranja - Se muestra todo el instrumento",
        description: "Quenacho de estudio en material de PVC",
        priceCLP: 42000,
        youtubeLink: "https://youtu.be/zXf68Kk1Pco",
        detailLink: '/catalog/pvc'
    },
    {
        id: uuidv4(),
        title: "Zampoña (Malta)",
        image: "/src/assets/offerings/zampona-malta.jpg",
        alt: "Foto zampoña tamaño malta - Se muestra todo el instrumento",
        description: "Zampoña tamaño malta. Afinación a pedido",
        priceCLP: 85000,
        youtubeLink: "https://youtu.be/yYpqlSElw9w?si=9hjeWqhOsdyV9wYo",
        detailLink: '/catalog/pvc'
    },
];

export default dataQuenas