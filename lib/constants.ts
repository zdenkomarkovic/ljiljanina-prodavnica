// Globalne konstante sajta
// Ove vrednosti se koriste za SEO, metadata, itd.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "My Site";

export const SITE_DESCRIPTION =
  "Ljiljanina mala Chogan prodavnica – originalna Chogan parfimerija, kozmetika i dodaci ishrani po pristupačnim cenama, sa brzom dostavom širom Srbije.";

export const SOCIAL_INSTAGRAM_HANDLE = "ljiljanina_prodavnica";

export const SOCIAL_INSTAGRAM = `https://www.instagram.com/${SOCIAL_INSTAGRAM_HANDLE}/`;

export const SOCIAL_INSTAGRAM_DM_URL = `https://ig.me/m/${SOCIAL_INSTAGRAM_HANDLE}`;

export const CONTACT_PHONE = "+381646664852";
