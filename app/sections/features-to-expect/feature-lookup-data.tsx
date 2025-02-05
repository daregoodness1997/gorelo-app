import { type FeatureLookupProps } from "@/components/bento-grid/components/bento-grid-feature-lookup-card";
import CrossTerm from "@/assets/cross-team.svg";
import Initiative from "@/assets/initiative.svg";
import Insight from "@/assets/insight.svg";
import Milestone from "@/assets/milestone.svg";
import { TabHeaders } from "./components/wide-card/tab-header";

export const longTermFeatureLookup: FeatureLookupProps[] = [
  {
    id: "service-delivery",
    title: "Service Delivery (PSA)",
    description:
      "Tickets, forms, portal—connecting you and your clients better🤝",
    icon: <Initiative />,
  },
  {
    id: "remote-mnagement",
    title: "Remote Management (RMM)",
    description:
      "Keep tabs on your systems and devices with tools that lets you manage everythingg remotely ",
    icon: <CrossTerm />,
  },
  {
    id: "documentation",
    title: "Documentation",
    description:
      "All your info, neatly organized and ready when you need it 🗂️. No more digging around.",
    icon: <Milestone />,
  },
  {
    id: "billing",
    title: "Billing",
    description:
      "Invoices, bundles, contract-billing made simple. We would even tell you what you forogt to bill",
    icon: <Insight />,
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Let the boring stuff handle itself. Automate tasks so you can focus on the big stuff 🚀",
    icon: <Insight />,
  },
  {
    id: "integrations",
    title: "Integrations",
    description:
      "Hook Gorelo up to the tools you already use and make your workflow seamless",
    icon: <Insight />,
  },
];

export const tabHeaders: TabHeaders[] = [
  {
    id: "tab-header-1",
    title: "Collaborative documents",
  },
  {
    id: "tab-header-2",
    title: "Inline comments",
  },
  {
    id: "tab-header-3",
    title: "Text-to-issue commands",
  },
];
