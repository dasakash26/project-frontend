import React, { useState } from "react";
import { StepIndicator } from "@/components/StepIndicator";
import { CropDetailsStep } from "@/components/CropDetailsStep";
import { OfferDetailsStep } from "@/components/OfferDetailsStep";
import { ReviewStep } from "@/components/ReviewStep";
import { OfferDetails } from "@/components/utils/types";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Card, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { OfferSubmissionDialog } from "@/components/OfferSubmissionDialog";

const stepCount = 3;
const cropTypes = [
  "Cereals",
  "Vegetables",
  "Grains",
  "Pulses",
  "Oilseeds",
  "Fiber Crops",
  "Fruits",
  "Nuts",
  "Spices",
  "Herbs",
  "Others",
];

export { cropTypes };
export default function CreateOffer() {
  //states
  const [offerDetails, setOfferDetails] = useState<OfferDetails>({
    cropName: "",
    cropType: "",
    description: "",
    price: 0,
    quantity: 0,
    harvestTime: null,
    location: "",
    OfferDuration: "",
    paymentTerms: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getSubHeading = () => {
    switch (currentStep) {
      case 1:
        return "Enter details about the crop.";
      case 2:
        return "Enter details about the offer.";
      case 3:
        return "view all details before submitting.";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "harvestTime") {
      setOfferDetails((prev) => ({
        ...prev,
        [name]: new Date(value),
      }));
      return;
    } else setOfferDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setOfferDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsDialogOpen(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Submitting offer:", offerDetails);
    } catch (error) {
      console.error("Failed to submit offer:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
    setOfferDetails({
      cropName: "",
      cropType: "",
      description: "",
      price: 0,
      quantity: 0,
      harvestTime: null,
      location: "",
      OfferDuration: "",
      paymentTerms: "",
    });
    setCurrentStep(1);
  };
  const handleNext = () =>
    setCurrentStep((prev) => Math.min(stepCount, prev + 1));
  const handlePrevious = () => setCurrentStep((prev) => Math.max(1, prev - 1));

  return (
    <div className="container mx-auto p-6 max-w-4xl mt-12">
      <h1 className="text-3xl font-bold text-center mb-2">Create New Offer</h1>
      <h2 className="text-base text-center mb-8">{getSubHeading()}</h2>
      <StepIndicator currentStep={currentStep} />
      <Card className="w-full border-[#2a2f2a]  rounded-lg shadow-lg overflow-hidden">
        <div className="">
          {/* step:1 */}
          {currentStep === 1 && (
            <CropDetailsStep
              offerDetails={offerDetails}
              //@ts-ignore
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
            />
          )}

          {/* step:2 */}
          {currentStep === 2 && (
            <OfferDetailsStep
              offerDetails={offerDetails}
              handleInputChange={handleInputChange}
            />
          )}

          {/* step:3 */}
          {currentStep === 3 && <ReviewStep offerDetails={offerDetails} />}
        </div>

        <Separator />

        <CardFooter className="flex justify-between p-6">
          {/* prev button */}
          {currentStep > 1 && (
            <Button onClick={handlePrevious} variant="outline">
              <ChevronLeft />
              Prev
            </Button>
          )}
          {/* next button */}
          {currentStep < 3 ? (
            <Button onClick={handleNext} variant="outline">
              Next
              <ChevronRight />
            </Button>
          ) : (
            // submit button
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              variant={isSubmitting ? "secondary" : "outline"}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Check />
                  Submit Offer
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
      <OfferSubmissionDialog
        isOpen={isDialogOpen}
        onClose={onCloseDialog}
        offerDetails={offerDetails}
      />
    </div>
  );
}
