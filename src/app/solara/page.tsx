import React from "react";
import type { Metadata } from "next";
import SolaraPageClient from "./SolaraPageClient";

export const metadata: Metadata = {
  title: "Solara Accra | AI & Coding Fellowship for Kids & Teens (Ages 10–16) — Codetrain Africa",
  description:
    "Solara is a 3-year AI & Computer Science Fellowship for ambitious kids and teens aged 10–16 in Accra, Ghana. Built by Codetrain Africa — 700+ engineers trained since 2017. Applications open for the 2026 Founding Cohort.",
  keywords: [
    "coding for kids Ghana",
    "AI course for children Accra",
    "STEM programme Ghana",
    "kids coding East Legon",
    "Codetrain Africa",
    "tech fellowship Ghana",
    "AI classes for teens Accra"
  ],
  alternates: {
    canonical: "https://www.codetrainafrica.com/solara",
  },
  openGraph: {
    type: "website",
    siteName: "Solara by Codetrain Africa",
    title: "Solara | AI & Coding Fellowship for Kids & Teens — Codetrain Africa",
    description:
      "A 3-year AI & Computer Science Fellowship for ambitious kids and teens aged 10–16 in Accra, Ghana. Built by the team behind Codetrain Africa.",
    url: "https://www.codetrainafrica.com/solara",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara | AI & Coding Fellowship for Kids & Teens — Codetrain Africa",
    description: "A 3-year AI & Computer Science Fellowship for ambitious kids and teens aged 10–16 in Accra, Ghana.",
  },
};

export default function SolaraPage() {
  return <SolaraPageClient />;
}
