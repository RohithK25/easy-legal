import { DocumentFormProps } from "@/types/document-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WaiverReleaseForm } from "./forms/waiver-release/WaiverReleaseForm";
import { waiverReleaseFormSchema, type WaiverReleaseFormData } from "./forms/waiver-release/types";
import { LeaseAgreementForm } from "./forms/lease-agreement/LeaseAgreementForm";
import { leaseFormSchema, type LeaseFormData } from "./forms/lease-agreement/types";

interface DocumentFormSelectorProps extends DocumentFormProps {
  onSubmit: (data: any) => void;
}

export function DocumentFormSelector({ templateTitle, onSubmit }: DocumentFormSelectorProps) {
  const isWaiverRelease = templateTitle === "Waiver and Release";
  const isLeaseAgreement = templateTitle === "Commercial Lease Agreement";

  const waiverReleaseForm = useForm<WaiverReleaseFormData>({
    resolver: zodResolver(waiverReleaseFormSchema),
    defaultValues: {
      effectiveDate: "",
      releasorName: "",
      releasorAddress: "",
      releaseeName: "",
      releaseeAddress: "",
      activityDescription: "",
      risks: "",
      state: "",
      county: "",
      notaryName: "",
    }
  });

  const leaseForm = useForm<LeaseFormData>({
    resolver: zodResolver(leaseFormSchema),
    defaultValues: {
      effectiveDate: "",
      lessorName: "",
      lessorAddress: "",
      lesseeName: "",
      lesseeAddress: "",
      propertyAddress: "",
      intendedUse: "",
      term: "",
      startDate: "",
      endDate: "",
      renewalTerm: "",
      noticePeriod: "",
      rentAmount: "",
      rentDueDay: "",
      lateFeeGracePeriod: "",
      lateFeeAmount: "",
      securityDeposit: "",
      depositReturnPeriod: "",
      defaultPeriod: "",
      curePeriod: "",
      terminationNoticePeriod: "",
      terminationFee: "",
      state: "",
    }
  });

  if (isWaiverRelease) {
    return (
      <Form {...waiverReleaseForm}>
        <form onSubmit={waiverReleaseForm.handleSubmit(onSubmit)} className="space-y-4">
          <WaiverReleaseForm form={waiverReleaseForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isLeaseAgreement) {
    return (
      <Form {...leaseForm}>
        <form onSubmit={leaseForm.handleSubmit(onSubmit)} className="space-y-4">
          <LeaseAgreementForm form={leaseForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  return null;
}