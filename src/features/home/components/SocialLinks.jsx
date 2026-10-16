import socials from '../../../data/socials'

/**
 * Renders the social profile links in their own wrapper.
 * The caller sets the placement via `className`
 * (e.g. "topbar-social" in the utility bar, "footer-social" in the footer).
 */
export default function SocialLinks({ className }) {
  return (
    <div className={className}>
      {socials.map(({ name, href, Icon }) => {
        // Placeholder links stay in the same tab; real profiles open in a new one.
        const external = href !== '#'
        return (
          <a
            key={name}
            href={href}
            aria-label={name}
            title={name}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}
