import { type FC } from "react";
import Hero from "./sections/hero";
import Customers from "./sections/customers";
import ModernProductTeams from "./sections/modern-product-teams";
import LongTermPlanning from "./sections/long-term-planning";
import IssueTracking from "./sections/issue-tracking";
import Collaborate from "./sections/collaborate";
import Foundation from "./sections/foundation";
import PreFooter from "./sections/prefooter";
import AmbientLighting from "@/components/ambient-lighting";
import FeaturesToExpect from "./sections/features-to-expect";
import Testimonials from "./sections/testimonials";

const Home: FC = () => {
  return (
    <main className=" min-h-screen  pt-[calc(var(--header-top)+var(--header-height))]">
      <AmbientLighting />
      <Hero />
      <Customers />
      <ModernProductTeams />
      <FeaturesToExpect />
      {/* <LongTermPlanning /> */}
      <IssueTracking />
      <Collaborate />
      {/* <Foundation /> */}
      <Testimonials />
      <PreFooter />
    </main>
  );
};

export default Home;
