// Single place for hard-coded company details / asset paths.
// Anything localisable belongs in src/i18n/*.js instead.

export const site = {
  name: 'TenderHub',
  domain: 'https://tenderhub.et',

  // Replace with the real inbox before going live.
  email: 'hello@tenderhub.et',
  phone: '+251 911 234 567',

  // Optional hero backdrop. Drop the image in /public and set e.g. '/hero.jpg'.
  // Left null so the CSS gradient artwork is used instead of a broken request.
  heroImage: null,

  social: {
    // Fill these in with the real profile URLs.
    facebook: '',
    telegram: '',
    linkedin: '',
    instagram: '',
    youtube: '',
  },
}

/** Strips formatting from the display phone number for a tel: href. */
export const phoneHref = site.phone.replace(/[^\d+]/g, '')
