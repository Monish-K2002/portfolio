
export interface Section {
  id: string;
  label: string;
  href: string;
}

export const sectionsData: Section[] = [
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  }
];