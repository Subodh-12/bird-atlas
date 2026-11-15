import { PageContainer } from "./PageContainer";
import { navigationItems } from "./navigationItems";

import "./MobileBottomNav.css";

export function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <PageContainer className="mobile-bottom-nav__container">
        <ul className="mobile-bottom-nav__list">
          {navigationItems.map(
            ({ label, href, icon: Icon, activeByDefault }) => (
              <li key={label}>
                <a
                  className={[
                    "mobile-bottom-nav__link",
                    activeByDefault ? "mobile-bottom-nav__link--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  href={href}
                  aria-current={activeByDefault ? "page" : undefined}
                >
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />

                  <span>{label}</span>
                </a>
              </li>
            ),
          )}
        </ul>
      </PageContainer>
    </nav>
  );
}
