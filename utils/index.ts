export const $app = {
  name: "Nutriveg Agricola SL",
  domain: "www.nutrivegagricola.com",
  email: "info@nutrivegagricola.com",
  phone: "+34 635 78 25 47",
  address: "C. Isla de Lobos, 50<br />30730 San Javier, Murcia, Spain",
  hours: "Mon-Sat: 8am – 2pm, 4pm – 7pm",
  vat: "ES B05559307",
  reg: "000",
  contact: "Perez Mercader Enrique",
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
