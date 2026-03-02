export interface SearchYourLicenseWith {
  id: string;
  name: string;
}

export interface FinancialYear {
  id: number;
  year: string;
}

export interface WardYear {
  id: number;
  assessmentYear: number;
}

export interface WardResponse {
  message: string;
  payload: Ward[];
}

export interface ZonalOffice {
  id: number;
  name: string;
  officeCode: number;
}

export interface Ward {
  id: string;
  name: string;
  wardNo: number;
  officeCode: number;
}

export interface SearchLicenseRequest {
  officeCode: string;
  licenseNumber: string | null;
  wardId: number;
  doorNo: string;
  zonalId: number;
  surveyNumber: string | null;
  doorNoSub: string | null;
  searchType: string;
  subDivisionNo: string | null;
  partitionNo: string | null;
  villageId: string | null;
  applicationNo: string | null;
  financialYear: number;
}

export interface SearchLicenseResponse {
  message: string;
  payload: LicenseDetails[];
}

export interface LicenseDetails {
  status: string;
  applicationNo: string;
  surveyNo: string | null;
  doorNo: string;
  financialYear: number;
  applicationType: string;
  licenseId: string;
  licenseNumber: string;
  licenseValidFrom: string;
  licenseValidTo: string;
  paymentReceived: boolean;
  wardNo: string;
  isCorrected: string | null;
  applicantName: string;
  licenseUnitName: string;
  isCancelled: string | null;
  paymentReceivedCorrection: string | null;
}
