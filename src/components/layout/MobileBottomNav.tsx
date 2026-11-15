import { PageContainer } from "./PageContainer";
import { navigationItems } from "./navigationItems";
import { useCurrentHash } from "./useCurrentHash";

import "./MobileBottomNav.css";

export function MobileBottomNav() {
  const currentHash = useCurrentHash();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <PageContainer className="mobile-bottom-nav__container">
        <ul className="mobile-bottom-nav__list">
          {navigationItems.map(({ label, href, icon: Icon }) => {
            const isActive = currentHash === href;

            return (
              <li key={label}>
                <a
                  className={[
                    "mobile-bottom-nav__link",
                    isActive ? "mobile-bottom-nav__link--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />

                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </PageContainer>
    </nav>
  );
}
