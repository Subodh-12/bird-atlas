import { Bird } from "lucide-react";

import { PageContainer } from "./PageContainer";
import { navigationItems } from "./navigationItems";

import "./SiteHeader.css";

export function SiteHeader() {
  return (
    <header className="site-header">
      <PageContainer className="site-header__container">
        <a className="site-header__brand" href="/" aria-label="Bird Atlas home">
          <Bird
            className="site-header__brand-icon"
            size={25}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span>Bird Atlas</span>
        </a>

        <nav className="site-header__navigation" aria-label="Main navigation">
          {navigationItems.map(
            ({ label, href, icon: Icon, activeByDefault }) => (
              <a
                className="site-header__link"
                href={href}
                key={label}
                aria-label={label}
                aria-current={activeByDefault ? "page" : undefined}
              >
                <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ),
          )}
        </nav>
      </PageContainer>
    </header>
  );
}
