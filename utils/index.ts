export const $app = {
  name: "Nutriveg Agrícola SL",
  desc: "Nutriveg Agrícola SL is a trusted supplier of high-quality organic and chemical fertilizers in Spain. Boost crop yields with eco-friendly, nutrient-rich solutions tailored for sustainable agriculture.",
  domain: "www.nutrivegagricola.com",
  email: "info@nutrivegagricola.com",
  phone: "+34 635 78 25 47",
  address: "C. Isla de Lobos, 50, 30730 San Javier, Murcia, Spain",
  hours: "Mon-Sat: 8am – 2pm, 4pm – 7pm",
  vat: "ES B05559307",
  reg: "",
  legal: "Sociedad Limitada Unipersonal (S.L.U.)",
  contact: "Enrique Pérez Mercader",
  api: "https://xtremnet.vercel.app/mailer",
};
export function generateSlug(str: string) {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, " ") // Replace non-alphanumeric with space
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}
export const types = [
  {
    title: "Organic Fertilizers",
    desc: "Enhance your garden naturally with eco-friendly organic fertilizers! Packed with nutrients, they boost soil fertility & plant growth sustainably. Ideal for all crops. ",

    path: "/fertilizers/organic",
    image: "/images/organic.jpg",
  },
  {
    title: "Inorganic Fertilizers",
    desc: "Boost crop growth fast with our high-quality inorganic fertilizers. Delivers precise NPK nutrients for maximum yields and quick soil replenishment.",

    path: "/fertilizers/inorganic",
    image: "/images/inorganic.jpg",
  },
  {
    title: "Animal Feeds",
    desc: "Premium animal feed for livestock & pets—nutritious, balanced, and tailored for cattle, poultry, pigs & fish. Supports growth, health & peak performance.",

    path: "/animal-feeds",
    image: "/images/animal-feed.jpg",
  },
];
