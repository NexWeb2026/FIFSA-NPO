import { Facebook, Instagram, Mail, MapPin, Music2, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { organisation } from "../../data/site";
import { Container } from "./Container";

const socialIcons = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  TikTok: Music2,
};

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <img className="h-20 w-auto rounded-brand bg-white p-2" src={organisation.logo} alt="FIFSA logo" />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">{organisation.mission}</p>
          <div className="mt-6 flex gap-3">
            {organisation.social.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-brand bg-white/10 text-white transition hover:bg-sun hover:text-ink"
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterGroup title="Navigation" links={[["About", "/about"], ["Our Work", "/our-work"], ["Events", "/events"], ["Gallery", "/gallery"]]} />
          <FooterGroup
            title="Our Work"
            links={[
              ["Youth Development", "/our-work/youth-development"],
              ["Education", "/our-work/education-leadership"],
              ["Humanitarian Aid", "/our-work/humanitarian"],
              ["Community Projects", "/our-work/community"],
            ]}
          />
          <FooterGroup
            title="Get Involved"
            links={[
              ["Donate", "/donate"],
              ["Volunteer", "/volunteer"],
              ["Fusion Friend", "/fusion-friend"],
              ["Corporate Partnerships", "/corporate-partnerships"],
            ]}
          />
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-sun">Contact</h2>
            <address className="mt-4 not-italic text-sm leading-7 text-white/70">
              <span className="mb-2 flex gap-2">
                <MapPin className="mt-1 shrink-0 text-sun" size={16} />
                <span>{organisation.addressLines.join(", ")}</span>
              </span>
              <a className="flex gap-2 transition hover:text-sun" href={`mailto:${organisation.email}`}>
                <Mail className="mt-1 shrink-0 text-sun" size={16} />
                {organisation.email}
              </a>
            </address>
            <p className="mt-5 text-xs leading-6 text-white/60">
              NPO Number: {organisation.npo}
              <br />
              PBO Number: {organisation.pbo}
            </p>
          </div>
        </div>
      </Container>
      <Container className="mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-white/56 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 | Fifsa.net</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-sun">
            Privacy Policy
          </Link>
          <Link to="/privacy" className="hover:text-sun">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-sun">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm text-white/70">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link className="transition hover:text-sun" to={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
