import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ServicePageTemplate } from "@/components/service-page-template";

const serviceData = siteConfig.serviceDetails["daily-cleaning"];

export const metadata: Metadata = {
  title: serviceData.title,
  description: serviceData.description,
  openGraph: {
    title: `${serviceData.title} | FDA SERVICE`,
    description: serviceData.description,
  },
};

export default function DailyCleaningPage() {
  return (
    <ServicePageTemplate
      title={serviceData.title}
      subtitle={serviceData.subtitle}
      description={serviceData.description}
      included={serviceData.included}
      whoFor={serviceData.whoFor}
      frequency={serviceData.frequency}
      qualityControl={serviceData.qualityControl}
    />
  );
}
