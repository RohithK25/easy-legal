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
import { ExitStrategyForm } from "./forms/exit-strategy/ExitStrategyForm";
import { exitStrategyFormSchema, type ExitStrategyFormData } from "./forms/exit-strategy/types";
import { ConfidentialityAgreementForm } from "./forms/confidentiality/ConfidentialityAgreementForm";
import { confidentialityFormSchema, type ConfidentialityFormData } from "./forms/confidentiality/types";
import { IpAssignmentForm } from "./forms/ip-assignment/IpAssignmentForm";
import { ipAssignmentFormSchema, type IpAssignmentFormData } from "./forms/ip-assignment/types";
import { PrivacyPolicyForm } from "./forms/privacy-policy/PrivacyPolicyForm";
import { privacyPolicyFormSchema, type PrivacyPolicyFormData } from "./forms/privacy-policy/types";
import { TermsConditionsForm } from "./forms/terms-conditions/TermsConditionsForm";
import { termsConditionsFormSchema, type TermsConditionsFormData } from "./forms/terms-conditions/types";
import { PurchaseOrderForm } from "./forms/purchase-order/PurchaseOrderForm";
import { purchaseOrderFormSchema, type PurchaseOrderFormData } from "./forms/purchase-order/types";
import { SalesAgreementForm } from "./forms/sales-agreement/SalesAgreementForm";
import { salesFormSchema, type SalesFormData } from "./forms/sales-agreement/types";
import { DividendPolicyAgreementForm } from "./forms/dividend-policy/DividendPolicyAgreementForm";
import { dividendPolicyFormSchema, type DividendPolicyFormData } from "./forms/dividend-policy/types";
import { LoanNoteForm } from "./forms/loan-note/LoanNoteForm";
import { loanNoteFormSchema, type LoanNoteFormData } from "./forms/loan-note/types";
import { LoanAgreementForm } from "./forms/loan-agreement/LoanAgreementForm";
import { loanFormSchema, type LoanFormData } from "./forms/loan-agreement/types";
import { InvestmentAgreementForm } from "./forms/investment-agreement/InvestmentAgreementForm";
import { investmentFormSchema, type InvestmentFormData } from "./forms/investment-agreement/types";
import { ShareholderAgreementForm } from "./forms/shareholder-agreement/ShareholderAgreementForm";
import { shareholderFormSchema, type ShareholderFormData } from "./forms/shareholder-agreement/types";
import { OperatingAgreementForm } from "./forms/operating-agreement/OperatingAgreementForm";
import { operatingFormSchema, type OperatingFormData } from "./forms/operating-agreement/types";
import { StockOptionAgreementForm } from "./forms/StockOptionAgreementForm";
import { stockOptionFormSchema, type StockOptionFormData } from "./forms/StockOptionAgreementForm";
import { NonCompeteAgreementForm } from "./forms/NonCompeteAgreementForm";
import { nonCompeteFormSchema, type NonCompeteFormData } from "./forms/NonCompeteAgreementForm";
import { IndependentContractorAgreementForm } from "./forms/IndependentContractorAgreementForm";
import { contractorFormSchema, type ContractorFormData } from "./forms/IndependentContractorAgreementForm";
import { employmentFormSchema, type EmploymentFormData } from "./forms/employment-agreement/types";
import { EmploymentAgreementForm } from "./forms/employment-agreement/EmploymentAgreementForm";

interface DocumentFormSelectorProps extends DocumentFormProps {
  onSubmit: (data: any) => void;
}

export function DocumentFormSelector({ templateTitle, onSubmit }: DocumentFormSelectorProps) {
  const isWaiverRelease = templateTitle === "Waiver and Release";
  const isLeaseAgreement = templateTitle === "Commercial Lease Agreement";
  const isExitStrategy = templateTitle === "Exit Strategy Agreement";
  const isConfidentiality = templateTitle === "Confidentiality Agreement";
  const isIpAssignment = templateTitle === "Intellectual Property Assignment";
  const isPrivacyPolicy = templateTitle === "Privacy Policy";
  const isTermsConditions = templateTitle === "Terms and Conditions";
  const isPurchaseOrder = templateTitle === "Purchase Order Agreement";
  const isSalesAgreement = templateTitle === "Sales Agreement";
  const isDividendPolicy = templateTitle === "Dividend Policy Agreement";
  const isLoanNote = templateTitle === "Loan Note";
  const isLoanAgreement = templateTitle === "Loan Agreement";
  const isInvestmentAgreement = templateTitle === "Investment Agreement";
  const isShareholderAgreement = templateTitle === "Shareholder Agreement";
  const isOperatingAgreement = templateTitle === "Operating Agreement";
  const isStockOptionAgreement = templateTitle === "Stock Option Agreement";
  const isNonCompeteAgreement = templateTitle === "Non-Compete Agreement";
  const isIndependentContractorAgreement = templateTitle === "Independent Contractor Agreement";
  const isEmploymentAgreement = templateTitle === "Employment Agreement";

  const salesForm = useForm<SalesFormData>({
    resolver: zodResolver(salesFormSchema),
    defaultValues: {
      sellerName: "",
      sellerAddress: "",
      buyerName: "",
      buyerAddress: "",
      state: "",
      description: "",
      quantity: "",
      condition: "",
      totalPrice: "",
      depositAmount: "",
      balanceAmount: "",
      paymentSchedule: "",
      paymentMethod: "",
      deliveryDate: "",
      deliveryAddress: "",
      responsibleParty: "",
      inspectionPeriod: "",
      disputeResolution: "",
      location: "",
    }
  });

  const purchaseOrderForm = useForm<PurchaseOrderFormData>({
    resolver: zodResolver(purchaseOrderFormSchema),
    defaultValues: {
      buyerName: "",
      buyerAddress: "",
      sellerName: "",
      sellerAddress: "",
      goodsDescription: "",
      quantity: "",
      unitPrice: "",
      totalPrice: "",
      deliveryDate: "",
      deliveryAddress: "",
      paymentTerms: "",
      state: "",
    }
  });

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

  const exitStrategyForm = useForm<ExitStrategyFormData>({
    resolver: zodResolver(exitStrategyFormSchema),
    defaultValues: {
      effectiveDate: "",
      companyName: "",
      companyAddress: "",
      founderNames: "",
      founderAddresses: "",
      businessType: "",
      state: "",
      reviewFrequency: "",
      exitTriggerEvent: "",
      revenueTarget: "",
      profitTarget: "",
      shareholderApprovalPercentage: "",
      valuationMethod: "",
      nonCompetePeriod: "",
      geographicalScope: "",
      nonSolicitationPeriod: "",
      confidentialityPeriod: "",
      arbitrationBody: "",
    }
  });

  const confidentialityForm = useForm<ConfidentialityFormData>({
    resolver: zodResolver(confidentialityFormSchema),
    defaultValues: {
      effectiveDate: "",
      partyAName: "",
      partyAAddress: "",
      partyBName: "",
      partyBAddress: "",
      confidentialityPeriod: "",
      returnPeriod: "",
      state: "",
      location: "",
    }
  });

  const employmentForm = useForm<EmploymentFormData>({
    resolver: zodResolver(employmentFormSchema),
    defaultValues: {
      employerName: "",
      employerAddress: "",
      employeeName: "",
      employeeAddress: "",
      startDate: "",
      jobTitle: "",
      salary: "",
      salaryPeriod: "",
      supervisorName: "",
      nonCompetePeriod: "",
      geographicArea: "",
      noticePeriod: "",
      state: "",
    }
  });

  const ipAssignmentForm = useForm<IpAssignmentFormData>({
    resolver: zodResolver(ipAssignmentFormSchema),
    defaultValues: {
      assignorName: "",
      assignorAddress: "",
      assigneeName: "",
      assigneeAddress: "",
      workDescription: "",
      relationshipType: "",
      consideration: "",
      state: "",
    }
  });

  const privacyPolicyForm = useForm<PrivacyPolicyFormData>({
    resolver: zodResolver(privacyPolicyFormSchema),
    defaultValues: {
      companyName: "",
      websiteUrl: "",
      contactEmail: "",
      contactPhone: "",
      businessAddress: "",
      state: "",
      location: "",
    }
  });

  const termsConditionsForm = useForm<TermsConditionsFormData>({
    resolver: zodResolver(termsConditionsFormSchema),
    defaultValues: {
      companyName: "",
      websiteUrl: "",
      contactEmail: "",
      contactPhone: "",
      businessAddress: "",
      state: "",
      location: "",
    }
  });

  const dividendPolicyForm = useForm<DividendPolicyFormData>({
    resolver: zodResolver(dividendPolicyFormSchema),
    defaultValues: {
      companyName: "",
      companyAddress: "",
      state: "",
      shareholderNames: "",
      paymentPeriod: "",
      paymentDays: "",
    }
  });

  const loanNoteForm = useForm<LoanNoteFormData>({
    resolver: zodResolver(loanNoteFormSchema),
    defaultValues: {
      lenderName: "",
      lenderAddress: "",
      borrowerName: "",
      borrowerAddress: "",
      loanAmount: "",
      bankName: "",
      accountNumber: "",
      maturityDate: "",
      state: "",
      interestRate: "",
      yearBasis: "",
      startDate: "",
      paymentSchedule: "",
      installmentAmount: "",
      paymentDay: "",
      lateFee: "",
      defaultPeriod: "",
    }
  });

  const loanAgreementForm = useForm<LoanFormData>({
    resolver: zodResolver(loanFormSchema),
    defaultValues: {
      lenderName: "",
      lenderAddress: "",
      borrowerName: "",
      borrowerAddress: "",
      state: "",
      loanAmount: "",
      bankName: "",
      accountNumber: "",
      interestRate: "",
      yearBasis: "",
      paymentFrequency: "",
      startDate: "",
      maturityDate: "",
      installmentAmount: "",
      paymentDay: "",
      paymentPeriod: "",
      lateFee: "",
      lateFeePercentage: "",
      gracePeriod: "",
      entityType: "",
      defaultCurePeriod: "",
    }
  });

  const investmentForm = useForm<InvestmentFormData>({
    resolver: zodResolver(investmentFormSchema),
    defaultValues: {
      investorName: "",
      investorAddress: "",
      companyName: "",
      companyAddress: "",
      state: "",
      investmentAmount: "",
      numberOfShares: "",
      pricePerShare: "",
      closingDate: "",
      boardRepresentationThreshold: "",
      nonCompetePeriod: "",
      geographicRegion: "",
    }
  });

  const shareholderForm = useForm<ShareholderFormData>({
    resolver: zodResolver(shareholderFormSchema),
    defaultValues: {
      shareholder1Name: "",
      shareholder1Address: "",
      shareholder2Name: "",
      shareholder2Address: "",
      companyName: "",
      companyType: "",
      state: "",
      incorporationDate: "",
      companyAddress: "",
      shareholder1Shares: "",
      shareholder2Shares: "",
      shareholder1Ownership: "",
      shareholder2Ownership: "",
      shareholder1Directors: "",
      shareholder2Directors: "",
      supermajorityThreshold: "",
      dragAlongThreshold: "",
      confidentialityPeriod: "",
      amendmentThreshold: "",
    }
  });

  const operatingForm = useForm<OperatingFormData>({
    resolver: zodResolver(operatingFormSchema),
    defaultValues: {
      llcName: "",
      member1Name: "",
      member1Address: "",
      member2Name: "",
      member2Address: "",
      state: "",
      filingDate: "",
      businessAddress: "",
      businessActivity: "",
      member1Contribution: "",
      member2Contribution: "",
      member1Ownership: "",
      member2Ownership: "",
      managementType: "",
      taxStatus: "",
    }
  });

  const stockOptionForm = useForm<StockOptionFormData>({
    resolver: zodResolver(stockOptionFormSchema),
    defaultValues: {
      companyName: "",
      companyAddress: "",
      optionHolderName: "",
      optionHolderAddress: "",
      effectiveDate: "",
      numberOfShares: "",
      exercisePrice: "",
      vestingSchedule: "",
      optionTerm: "",
      expirationDate: "",
      terminationPeriod: "",
      paymentMethod: "",
      state: "",
    }
  });

  const nonCompeteForm = useForm<NonCompeteFormData>({
    resolver: zodResolver(nonCompeteFormSchema),
    defaultValues: {
      companyName: "",
      companyAddress: "",
      employeeName: "",
      employeeAddress: "",
      effectiveDate: "",
      nonCompetePeriod: "",
      geographicArea: "",
      industry: "",
      nonSolicitPeriod: "",
      state: "",
    }
  });

  const contractorForm = useForm<ContractorFormData>({
    resolver: zodResolver(contractorFormSchema),
    defaultValues: {
      contractorName: "",
      contractorAddress: "",
      companyName: "",
      companyAddress: "",
      startDate: "",
      endDate: "",
      services: "",
      compensation: "",
      paymentSchedule: "",
      terminationNotice: "",
      state: "",
    }
  });

  if (isSalesAgreement) {
    return (
      <Form {...salesForm}>
        <form onSubmit={salesForm.handleSubmit(onSubmit)} className="space-y-4">
          <SalesAgreementForm form={salesForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isPurchaseOrder) {
    return (
      <Form {...purchaseOrderForm}>
        <form onSubmit={purchaseOrderForm.handleSubmit(onSubmit)} className="space-y-4">
          <PurchaseOrderForm form={purchaseOrderForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

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

  if (isExitStrategy) {
    return (
      <Form {...exitStrategyForm}>
        <form onSubmit={exitStrategyForm.handleSubmit(onSubmit)} className="space-y-4">
          <ExitStrategyForm form={exitStrategyForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isConfidentiality || isIndependentContractorAgreement) {
    return (
      <Form {...confidentialityForm}>
        <form onSubmit={confidentialityForm.handleSubmit(onSubmit)} className="space-y-4">
          <ConfidentialityAgreementForm form={confidentialityForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isIpAssignment) {
    return (
      <Form {...ipAssignmentForm}>
        <form onSubmit={ipAssignmentForm.handleSubmit(onSubmit)} className="space-y-4">
          <IpAssignmentForm form={ipAssignmentForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isPrivacyPolicy) {
    return (
      <Form {...privacyPolicyForm}>
        <form onSubmit={privacyPolicyForm.handleSubmit(onSubmit)} className="space-y-4">
          <PrivacyPolicyForm form={privacyPolicyForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isTermsConditions) {
    return (
      <Form {...termsConditionsForm}>
        <form onSubmit={termsConditionsForm.handleSubmit(onSubmit)} className="space-y-4">
          <TermsConditionsForm form={termsConditionsForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isDividendPolicy) {
    return (
      <Form {...dividendPolicyForm}>
        <form onSubmit={dividendPolicyForm.handleSubmit(onSubmit)} className="space-y-4">
          <DividendPolicyAgreementForm form={dividendPolicyForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isLoanNote) {
    return (
      <Form {...loanNoteForm}>
        <form onSubmit={loanNoteForm.handleSubmit(onSubmit)} className="space-y-4">
          <LoanNoteForm form={loanNoteForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isLoanAgreement) {
    return (
      <Form {...loanAgreementForm}>
        <form onSubmit={loanAgreementForm.handleSubmit(onSubmit)} className="space-y-4">
          <LoanAgreementForm form={loanAgreementForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isInvestmentAgreement) {
    return (
      <Form {...investmentForm}>
        <form onSubmit={investmentForm.handleSubmit(onSubmit)} className="space-y-4">
          <InvestmentAgreementForm form={investmentForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isShareholderAgreement) {
    return (
      <Form {...shareholderForm}>
        <form onSubmit={shareholderForm.handleSubmit(onSubmit)} className="space-y-4">
          <ShareholderAgreementForm form={shareholderForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isOperatingAgreement) {
    return (
      <Form {...operatingForm}>
        <form onSubmit={operatingForm.handleSubmit(onSubmit)} className="space-y-4">
          <OperatingAgreementForm form={operatingForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isStockOptionAgreement) {
    return (
      <Form {...stockOptionForm}>
        <form onSubmit={stockOptionForm.handleSubmit(onSubmit)} className="space-y-4">
          <StockOptionAgreementForm form={stockOptionForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isNonCompeteAgreement) {
    return (
      <Form {...nonCompeteForm}>
        <form onSubmit={nonCompeteForm.handleSubmit(onSubmit)} className="space-y-4">
          <NonCompeteAgreementForm form={nonCompeteForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isIndependentContractorAgreement) {
    return (
      <Form {...contractorForm}>
        <form onSubmit={contractorForm.handleSubmit(onSubmit)} className="space-y-4">
          <IndependentContractorAgreementForm form={contractorForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isEmploymentAgreement) {
    return (
      <Form {...employmentForm}>
        <form onSubmit={employmentForm.handleSubmit(onSubmit)} className="space-y-4">
          <EmploymentAgreementForm form={employmentForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  return null;
}

