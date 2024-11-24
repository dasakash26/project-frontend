import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OfferDetails } from "./utils/types";
import { Offer } from "./Offer";

interface OfferSubmissionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  offerDetails: OfferDetails;
}

export function OfferSubmissionDialog({
  isOpen,
  onClose,
  offerDetails,
}: OfferSubmissionDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] h-[90vh]">
        <DialogHeader>
          <DialogTitle>Offer Submitted Successfully</DialogTitle>
          <DialogDescription>
            Your offer has been submitted. Here's a summary of your offer:
          </DialogDescription>
        </DialogHeader>
        <Offer offerDetails={offerDetails} />
      </DialogContent>
    </Dialog>
  );
}
