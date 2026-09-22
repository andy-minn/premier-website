/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: "Premier Decorative Materials",
  email: "info@premiermaterial.com",
  phoneForTel: "09456783338",
  phoneFormatted: "(09) 456-783-338",
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: "",
  address: {
    lineOne: "No. 66/B, Wai Za Yan Tar Road,",
    lineTwo: "",
    city: "South Okkalapa Township",
    state: "Yangon, Myanmar",
    zip: "",
    country: "MM",
    mapLink: "https://maps.app.goo.gl/a8ydDhiDSqndviyQ9",
  },
  socials: {
    facebook: "https://www.facebook.com/premierdecorativematerials/",
    instagram: "https://www.instagram.com/premiermaterial/",
    google: "https://maps.app.goo.gl/a8ydDhiDSqndviyQ9",
  },
  domain: "https://www.premiermaterial.com",
} as const;

export type Client = typeof client;
