export interface LicensePreviewResponse {
  message: string;
  payload: LicensePreview;
}

export interface LicensePreview {
  licenseValidFrom: string;
  licenseValidTo: string;
  renewalPeriodTo: string;
  applicationDate: string;
  applicationNo: string;
  applicationType: string;
  status: string;
  fees: Fees[];
  business: Business[];
  licenseUnit: LicenseUnit;
  buildings: Building[];
  applicant: Applicant[];
}

export interface Applicant {
  nameEng: string;
  nameLocal: string;
  mobileNo: string;
  emailId: string;
}

export interface Building {
  doorNo: number;
}

export interface LicenseUnit {
  unitTypeMaster: UnitTypeMaster;
  licenseUnitNameEng: string;
  wardNo: number;
}
export interface UnitTypeMaster {
  name: string;
}
export interface Fees {
  fees: number;
  paymentReceived: boolean;
}

export interface Business {
  businessCategoryMaster: {
    name: string;
  };
  businessTypeMaster: {
    name: string;
  };
  businessSubtypeMaster: {
    name: string;
  };
}
