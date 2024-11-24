import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  MapPinIcon,
  Wheat,
  IndianRupeeIcon,
  Scale,
  Info,
} from "lucide-react";

export function Offer({ offerDetails }: { offerDetails: any }) {
  const {
    cropName,
    cropType,
    price,
    quantity,
    harvestTime,
    location,
    paymentTerms,
    description,
  } = offerDetails;
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DetailSection
          title="Crop Information"
          icon={<Wheat className="w-5 h-5 text-[#9ab88d]" />}
        >
          <DetailItem label="Crop Name" value={cropName} />
          <DetailItem label="Crop Type" value={cropType} />
        </DetailSection>

        <DetailSection
          title="Pricing Details"
          icon={<IndianRupeeIcon className="w-5 h-5 text-[#9ab88d]" />}
        >
          <DetailItem
            label="Price"
            value={`$${price.toLocaleString()} per kg`}
          />
          <DetailItem
            label="Quantity"
            value={`${quantity.toLocaleString()} kg`}
          />
        </DetailSection>

        <DetailSection
          title="Timing & Location"
          icon={<CalendarIcon className="w-5 h-5 text-[#9ab88d]" />}
        >
          <DetailItem
            label="Harvest Date"
            value={harvestTime?.toLocaleDateString()}
            icon={<CalendarIcon className="w-4 h-4 text-[#9ab88d]" />}
          />
          <DetailItem
            label="Location"
            value={location}
            icon={<MapPinIcon className="w-4 h-4 text-[#9ab88d]" />}
          />
        </DetailSection>

        <DetailSection
          title="Terms & Conditions"
          icon={<Scale className="w-5 h-5 text-[#9ab88d]" />}
        >
          <DetailItem label="Payment Terms" value={paymentTerms} />
        </DetailSection>
      </div>

      <Separator className="bg-[#2a2f2a]" />

      <DetailSection
        title="Crop Description"
        icon={<Info className="w-5 h-5 text-[#9ab88d]" />}
      >
        <div className="mt-2 space-y-4">
          <div>
            <h4 className="text-sm font-medium text-[#9ab88d] mb-1">
              Description
            </h4>
            <p className=" p-4 rounded-md">{description}</p>
          </div>
        </div>
      </DetailSection>
    </>
  );
}

interface DetailSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function DetailSection({ title, icon, children }: DetailSectionProps) {
  return (
    <div className="border-x-2 rounded-lg p-4 transition-all hover:bg-secondary">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

interface DetailItemProps {
  label: string;
  value: string | number | undefined;
  icon?: React.ReactNode;
}

function DetailItem({ label, value, icon }: DetailItemProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{label}</span>
      <div className="flex items-center gap-2">
        {icon}
        <Badge
          variant="secondary"
          className="hover:bg-secondary hover:text-[#9ab88d] cursor-pointer"
        >
          {value || "Not specified"}
        </Badge>
      </div>
    </div>
  );
}
