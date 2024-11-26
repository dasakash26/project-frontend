import * as React from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OfferDetails } from "./utils/types";
import { Textarea } from "./ui/textarea";

interface OfferDetailsStepProps {
  offerDetails: OfferDetails;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const OfferDetailsStep: React.FC<OfferDetailsStepProps> = ({
  offerDetails,
  handleInputChange,
}) => {
  const {
    price,
    quantity,
    harvestTime,
    location,
    offerDuration,
    paymentTerms,
  } = offerDetails || {};

  return (
    <>
      <CardHeader className="border-b border-[#2a2f2a]">
        <CardTitle className="text-2xl font-semibold text-[#9ab88d]">
          Offer Details
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {/* price */}
              <Label htmlFor="price">Price (per kg)</Label>
              <Input
                type="number"
                placeholder="Enter price per kg"
                id="price"
                name="price"
                value={price}
                onChange={handleInputChange}
              />
            </div>
            {/*  quantity */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="quantity">Quantity (kg)</Label>
              <Input
                type="number"
                placeholder="Enter quantity in kg"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleInputChange}
              />
            </div>
            {/*  harvestTime */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="harvestTime">Harvest Time (approx)</Label>
              <Input
                type="date"
                id="harvestTime"
                name="harvestTime"
                value={
                  harvestTime ? harvestTime.toISOString().split("T")[0] : ""
                }
                onChange={handleInputChange}
              />
            </div>
            {/*  location */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                placeholder="Enter location"
                id="location"
                name="location"
                value={location}
                onChange={handleInputChange}
              />
            </div>
            {/*  offerDuration */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="offerDuration">Offer Duration (Days)</Label>
              <Input
                type="number"
                placeholder="Enter duration in days"
                id="offerDuration"
                name="offerDuration"
                value={offerDuration}
                onChange={handleInputChange}
              />
            </div>
            {/*  paymentTerms */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="paymentTerms">Payment Terms</Label>
              <Textarea
                id="paymentTerms"
                name="paymentTerms"
                placeholder="Enter payment terms"
                value={paymentTerms}
                onChange={(e) => handleInputChange(e)}
                rows={4}
              />
            </div>
          </div>
        </form>
      </CardContent>
    </>
  );
};
