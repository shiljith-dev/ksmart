import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { SearchService } from '../../services/search.service';
import {
  FinancialYear,
  LicenseDetails,
  SearchYourLicenseWith,
  Ward,
  WardYear,
  ZonalOffice,
} from '../../interfaces/search.interface';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LicenseService } from '../../services/license.service';
import { LicensePreview } from '../../interfaces/license.interface';
import { MatExpansionModule } from '@angular/material/expansion';

const LICENSE_SEARCH_FILTER = 'license-search-filter';

@Component({
  selector: 'ksmart-business-facilitation',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIcon,
    MatTableModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
  ],
  templateUrl: './business-facilitation.html',
  styleUrl: './business-facilitation.scss',
})
export class BusinessFacilitation implements OnInit {
  businessFacilitationForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  searchService = inject(SearchService);
  licenseService = inject(LicenseService);

  searchYourLicenseWithList = signal<SearchYourLicenseWith[]>([
    { id: 'LICENSENO', name: 'License ID' },
    { id: 'BUILDING', name: 'Building' },
    { id: 'APPLICATIONNO', name: 'Application No' },
  ]);
  financialYearList = signal<FinancialYear[]>([]);
  wardYearList = signal<WardYear[]>([]);
  zonalOfficeList = signal<ZonalOffice[]>([]);
  wardList = signal<Ward[]>([]);
  searchResults = signal<LicenseDetails[]>([]);
  displayedColumns: string[] = [
    'applicationNo',
    'applicationType',
    'doorNo',
    'applicantName',
    'licenseUnitName',
    'status',
    'licenseId',
  ];
  isLoading = signal(false);
  licensePreviewResult = signal<LicensePreview>(null!);
  step = signal(0);

  ngOnInit(): void {
    this.initForm();
    this.getFinancialYear();
    this.getWardYear();
    this.getZonalOffices();
    this.getWards();
  }

  initForm() {
    this.businessFacilitationForm = this.formBuilder.group({
      searchYourLicenseWith: [''],
      financialYear: [''],
      wardYear: [''],
      zonalOffice: [''],
      ward: [''],
      doorNo: [''],
      doorSubNo: [''],
    });
    this.setSavedFilter();
  }

  get searchYourLicenseWith() {
    return this.businessFacilitationForm.get('searchYourLicenseWith');
  }

  get financialYear() {
    return this.businessFacilitationForm.get('financialYear');
  }

  get wardYear() {
    return this.businessFacilitationForm.get('wardYear');
  }

  get zonalOffice() {
    return this.businessFacilitationForm.get('zonalOffice');
  }

  get ward() {
    return this.businessFacilitationForm.get('ward');
  }

  get doorNo() {
    return this.businessFacilitationForm.get('doorNo');
  }

  get doorSubNo() {
    return this.businessFacilitationForm.get('doorSubNo');
  }

  getFinancialYear() {
    this.searchService.getFinancialYears().subscribe({
      next: (financialYears) => {
        this.financialYearList.set(financialYears);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getWardYear() {
    this.searchService.getWardYears().subscribe({
      next: (wardYears) => {
        this.wardYearList.set(wardYears);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getZonalOffices() {
    this.searchService.getZonalOffices().subscribe({
      next: (zonalOffices) => {
        this.zonalOfficeList.set(zonalOffices);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getWards() {
    this.searchService.getWards().subscribe({
      next: (wards) => {
        this.wardList.set(wards);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onSearchLicense() {
    this.licensePreviewResult.set(null!);
    this.searchResults.set(null!);
    this.isLoading.set(true);
    this.saveFilter();
    const searchLicenseRequest = {
      officeCode: this.zonalOffice?.value,
      licenseNumber: '',
      wardId: this.ward?.value,
      doorNo: this.doorNo?.value,
      zonalId: Number(this.zonalOffice?.value),
      surveyNumber: null,
      doorNoSub: this.doorSubNo?.value,
      searchType: this.searchYourLicenseWith?.value,
      subDivisionNo: null,
      partitionNo: null,
      villageId: null,
      applicationNo: null,
      financialYear: this.financialYear?.value,
    };
    this.searchService.searchLicense(searchLicenseRequest).subscribe({
      next: (searchResults) => {
        this.searchResults.set(searchResults);
        this.isLoading.set(false);
        this.getLicenseForPreview(searchResults[0].licenseId);
      },
      error: (error) => {
        console.error(error);
        this.isLoading.set(false);
      },
    });
  }

  getLicenseForPreview(licenseId: string) {
    this.isLoading.set(true);
    console.log('License ID for preview:', licenseId);
    this.licenseService.getLicensePreview(licenseId).subscribe({
      next: (licensePreview) => {
        console.log(licensePreview);
        this.licensePreviewResult.set(licensePreview);
        this.isLoading.set(false);
        this.step.update((i) => i + 1);
      },
      error: (error) => {
        console.error(error);
        this.isLoading.set(false);
      },
    });
  }

  saveFilter() {
    const filter = this.businessFacilitationForm.value;
    console.log(filter);
    localStorage.setItem(LICENSE_SEARCH_FILTER, JSON.stringify(filter));
  }

  setSavedFilter() {
    const filter = localStorage.getItem(LICENSE_SEARCH_FILTER);
    if (filter) {
      const parsedFilter = JSON.parse(filter);
      this.businessFacilitationForm.patchValue(parsedFilter);
    }
  }

  setStep(index: number) {
    this.step.set(index);
  }
}
