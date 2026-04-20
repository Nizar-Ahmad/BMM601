"use client";

import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ContentTypesSection from "@/components/sections/ContentTypesSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import QuickGallerySection from "@/components/sections/QuickGallerySection";
import SiteSectionsPreview from "@/components/sections/SiteSectionsPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ContentTypesSection />
      <WorkflowSection />
      <QuickGallerySection />
      <SiteSectionsPreview />
    </>
  );
}