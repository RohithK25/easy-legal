import { Template } from "@/types/template";
import { investmentAgreementTemplate } from "./investment-agreement";

export const financialTemplates: Template[] = [
  investmentAgreementTemplate,
  {
    title: "Loan Agreement",
    description: "Details terms of business loans, including interest rates and repayment schedules.",
    category: "Financial",
    slug: "loan-agreement",
    content: ""
  },
  {
    title: "Loan Note",
    description: "Confirms terms of loan or debt agreement from investors or third parties.",
    category: "Financial",
    slug: "loan-note",
    content: ""
  },
  {
    title: "Dividend Policy Agreement",
    description: "Defines how company will distribute profits to shareholders.",
    category: "Financial",
    slug: "dividend-policy",
    content: ""
  }
];