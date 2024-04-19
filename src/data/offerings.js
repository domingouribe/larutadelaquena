import { v4 as uuidv4 } from "uuid";



const offeringsData = [
  {
    id: uuidv4(),
    title: "Quena de lujo en madera de ébano africano",
    description:
      "Quena profesional fabricada en madera de ébano africano de Gabón",
    price: { CLP: 260000, USD: 345 },
    imageSrc: "/src/assets/images/ebano1.jpg",
    contactLink: "/contact",
    youtubeLink: "https://youtu.be/5zw1Hmfjx_0?si=mVsYxC9Pj6-m-tq1",
  },
  {
    id: uuidv4(),
    title: "Quena madera de cocobolo",
    description: "Quena profesional fabricada en madera de cocobolo",
    price: { CLP: 260000, USD: 345 },
    imageSrc: "/src/assets/images/ebano1.jpg",
    contactLink: "/contact",
    youtubeLink: "https://youtu.be/pcdFF_nqCD8?si=DrXivFiyRhqPRozg",
  },
  {
    id: uuidv4(),
    title: "Quena madera de ébano asiático",
    description: "Quena profesional fabricada en madera de ébano asiático",
    price: { CLP: 290000, USD: 375 },
    imageSrc: "/src/assets/images/ebano1.jpg",
    contactLink: "/contact",
    youtubeLink: "https://youtu.be/ZSg3y58Ote0?si=OL3z2w2c56O4DzlI",
  },
  {
    id: uuidv4(),
    title: "Quena madera de haya rosada",
    description: "Quena profesional fabricada en madera de haya rosada",
    price: { CLP: 155000, USD: 235 },
    imageSrc: "/src/assets/images/hayarosada1.jpg",
    contactLink: "/contact",
    youtubeLink: "URL_de_YouTube",
  },
  // Resto de los elementos Offering...
];

export default offeringsData;
