
import { Bird, Bookmark, Compass, Search } from "lucide-react";

import { PageContainer } from "./PageContainer";
import "./SiteHeader.css";

const navigationItems = [
  {
    label: "Explore",
    href: "#catalogue",
    icon: Compass,
  },
  {
    label: "Search",
    href: "#search",
    icon: Search,
  },
  {
    label: "Saved birds",
    href: "#saved",
    icon: Bookmark,
  },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <PageContainer className="site-header__container">
        <a
          className="site-header__brand"
          href="/"
          aria-label="Bird Atlas home"
        >
          <Bird
            className="site-header__brand-icon"
            size={25}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span>Bird Atlas</span>
        </a>

        <nav
          className="site-header__navigation"
          aria-label="Main navigation"
        >
          {navigationItems.map(({ label, href, icon: Icon }) => (
            <a
              className="site-header__link"
              href={href}
              key={label}
              aria-label={label}
              title={label}
            >
              <Icon
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span>{label}</span>
            </a>
          ))}
        </nav>
      </PageContainer>
    </header>
  );
}
