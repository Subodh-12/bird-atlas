import { Bookmark, Compass, Search } from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navigationItems: NavigationItem[] = [
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
