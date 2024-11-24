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
import { OfferPreview } from "@/components/OfferPreview";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/hooks/use-toast";

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
    offerDuration: "",
    paymentTerms: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     //setOfferDetails((prev) => ({ ...prev, image: e.target.files[0] }));
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: "Offer Submitted Successfully",
        description: (
          <div className="mt-2 grid gap-1">
            <p>Your offer for <span className="font-semibold">{offerDetails.cropName}</span> has been submitted successfully.</p>
            <p className="text-xs opacity-80">Submitted at: {new Date().toLocaleTimeString()}</p>
            <p className="text-xs mt-2">You can review it in your dashboard.</p>
          </div>
        ),
      });
      console.log("Submitting offer:", offerDetails);
      handleNext();
    } catch (error) {
      console.error("Failed to submit offer:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setOfferDetails({
      cropName: "",
      cropType: "",
      description: "",
      price: 0,
      quantity: 0,
      harvestTime: null,
      location: "",
      offerDuration: "",
      paymentTerms: "",
    });
    setCurrentStep(1);
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  return (
    <>
      <div className="container mx-auto p-6 max-w-4xl mt-12">
        {currentStep <= 3 && (
          <>
            <h1 className="text-3xl font-bold text-center mb-2">
              Create New Offer
            </h1>
            <h2 className="text-base text-center mb-8">{getSubHeading()}</h2>
            <StepIndicator currentStep={currentStep} />
          </>
        )}
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

            {/* step:4 */}
            {currentStep === 4 && (
              <OfferPreview offerDetails={offerDetails} resetForm={resetForm} />
            )}
          </div>

          <Separator />

          {currentStep <= 3 && (
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

            </div>
            {/* <div className="space-y-2">
              <Label htmlFor="image" className="text-green-700">Crop Image</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

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
          )}
        </Card>
        <Toaster />
      </div>
    </>

                <span className="text-sm text-green-600">
                  {offerDetails.image ? offerDetails.image.name : 'No file chosen'}
                </span>
              </div>
            </div> */}
          </form>
        </CardContent>
        <CardFooter className="relative z-10">
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Offer...
              </>
            ) : (
              'Create Offer'
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
