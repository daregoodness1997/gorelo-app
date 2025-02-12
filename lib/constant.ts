import { type ReactNode } from "react";
import { type UserCardProps } from "@/app/sections/issue-tracking/components/user-card";
import { CarouselCardProps } from "@/app/sections/modern-product-teams/components/carousel-card";

type FooterListItem = {
  id: string | number;
  link: string;
  item: string;
};
export type FooterSection = {
  title: string;
  items: FooterListItem[];
};

export const footerSections: FooterSection[] = [
  {
    title: "Product",
    items: [
      {
        id: "footer-section-11",
        link: "#",
        item: "Home",
      },
      {
        id: "footer-section-12",
        link: "#",
        item: "Pricing",
      },
      {
        id: "footer-section-13",
        link: "#",
        item: "Automation",
      },
      {
        id: "footer-section-23",
        link: "#",
        item: "Service Delivery (PSA)",
      },
      {
        id: "footer-section-24",
        link: "#",
        item: "Remote Management (RMM)",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        id: "footer-section-21",
        link: "#",
        item: "About us",
      },
      {
        id: "footer-section-22",
        link: "#",
        item: "Blog",
      },
      {
        id: "footer-section-23",
        link: "#",
        item: "Careers",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        id: "footer-section-31",
        link: "#",
        item: "Roadmap",
      },
      {
        id: "footer-section-32",
        link: "#",
        item: "Changelog",
      },
      {
        id: "footer-section-33",
        link: "#",
        item: "Help Center",
      },

      {
        id: "footer-section-35",
        link: "#",
        item: "Privacy Policy",
      },
      {
        id: "footer-section-36",
        link: "#",
        item: "Terms of service",
      },
    ],
  },
  // {
  //   title: "Developers",
  //   items: [
  //     {
  //       id: "footer-section-41",
  //       link: "#",
  //       item: "API",
  //     },
  //     {
  //       id: "footer-section-42",
  //       link: "#",
  //       item: "Status",
  //     },
  //     {
  //       id: "footer-section-43",
  //       link: "#",
  //       item: "GitHub",
  //     },
  //     {
  //       id: "footer-section-44",
  //       link: "#",
  //       item: "README",
  //     },
  //   ],
  // },
];

export type FoundationListItem = {
  id: string | number;
  label: string;
  value: string;
};

export type FoundationList = FoundationListItem[];

export const foundationList: FoundationList = [
  {
    id: "foundation-1",
    label: "Linear Sync Engine",
    value:
      "Built with a high-performance architecture and an obsessive focus on speed.",
  },
  {
    id: "foundation-2",
    label: "Enterprise-ready security",
    value:
      "Best-in-class security practices keep your work safe and secure at every layer.",
  },
  {
    id: "foundation-3",
    label: "Engineered for scale",
    value:
      "Built for teams of all sizes. From early-stage startups to global enterprises.",
  },
];

export const userCards: UserCardProps[] = [
  {
    id: "user-card-1",
    title: "Users report unexpected rate limiting",
    img: "/user-1.png",
    name: "Tom",
  },
  {
    id: "user-card-2",
    title: "RangeError: Index 0 out of range",
    img: "/user-2.jpg",
    name: "Romain",
  },
  {
    id: "user-card-3",
    title:
      'Pressing "Enter" quickly when logging in via email generates multiple emails',
    img: "/user-3.jpg",
    name: "Tuomas",
  },
];

export const modernProductCards: CarouselCardProps[] = [
  {
    id: "modern-carousel-card-1",
    img: "/product-development.jpeg",
    title: "Sentiment Analysis",
  },
  {
    id: "modern-carousel-card-2",
    img: "/fast-moving.avif",
    title: "Guided Scripting",
  },
  {
    id: "modern-carousel-card-3",
    img: "/perfection.avif",
    title: "Suggested Replies",
  },
];
