// data/courses.ts

import {
    SkillIconsCss,
    SkillIconsHtml,
    SkillIconsTypescript,
    LogosPython,
    SkillIconsJavascript,
  } from "../components/icons/Icons";
  interface Course {
    name: string;
    href: string;
    icon: React.ComponentType;
    description: string;
    images: string[];
  }
  export const courses: Course[] = [
    {
      name: "HTML",
      href: "ui/html",
      icon: SkillIconsHtml,
      description: "Aprende los fundamentos de HTML y cómo estructurar páginas web.",
      images: ["/public/html.jpeg"],
    },
    {
      name: "CSS",
      href: "ui/css",
      icon: SkillIconsCss,
      description: "Descubre cómo estilizar tus páginas web con CSS.",
      images: ["/public/css.jpeg"],
    },
    {
      name: "JavaScript",
      href: "ui/javascript",
      icon: SkillIconsJavascript,
      description: "Domina el lenguaje de programación web más popular.",
      images: ["/public/js.jpeg"],
    },
    {
      name: "TypeScript",
      href: "ui/typescript",
      icon: SkillIconsTypescript,
      description: "Mejora tu JavaScript con tipado estático usando TypeScript.",
      images: ["/public/html.jpeg"],
    },
    {
      name: "Python",
      href: "ui/python",
      icon: LogosPython,
      description: "Aprende Python, un lenguaje versátil y poderoso.",
      images: ["/public/python.jpeg"],
    },
  ];
  