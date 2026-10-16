import { FaFacebookF, FaTelegram, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { site } from '../config/site'

// `href` falls back to '#' until the real profile URLs are filled in
// src/config/site.js — update those and drop the fallback.
const socials = [
  { name: 'Facebook', href: site.social.facebook || '#', Icon: FaFacebookF },
  { name: 'Telegram', href: site.social.telegram || '#', Icon: FaTelegram },
  { name: 'LinkedIn', href: site.social.linkedin || '#', Icon: FaLinkedinIn },
  { name: 'Instagram', href: site.social.instagram || '#', Icon: FaInstagram },
  { name: 'YouTube', href: site.social.youtube || '#', Icon: FaYoutube },
]

export default socials
