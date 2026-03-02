import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  FinancialYear,
  SearchLicenseRequest,
  SearchLicenseResponse,
  WardResponse,
  ZonalOffice,
} from '../interfaces/search.interface';
import { delay, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;

  getFinancialYears() {
    return of<FinancialYear[]>([
      { id: 2026, year: '2026-2027' },
      { id: 2025, year: '2025-2026' },
      { id: 2024, year: '2024-2025' },
      { id: 2023, year: '2023-2024' },
      { id: 2021, year: '2021-2023' },
      { id: 1998, year: '1998-1999' },
    ]).pipe(delay(1000));
    // return this.http.get<FinancialYear[]>(
    //   `${this.baseUrl}/egov-mdms-service/v1/finance-services/year`,
    // );
  }

  getWardYears() {
    return of([
      { id: 3405, assessmentYear: 2025 },
      { id: 2025, assessmentYear: 2011 },
      { id: 2024, assessmentYear: 1993 },
    ]).pipe(delay(1000));
  }

  getZonalOffices() {
    return of<ZonalOffice[]>([{ id: 2513, name: 'Main Office', officeCode: 10132101131 }]).pipe(
      delay(1000),
    );
    // return this.http.get(
    //   `${this.baseUrl}/egov-mdms-service/v1/common-masters/zonal/circle/officeLbCode/10132101131`,
    // );
  }

  getWards() {
    return this.http
      .get<WardResponse>(`${this.baseUrl}/dmdm-services/v1/wards/10132101131/2011?status=1`)
      .pipe(map((response) => response.payload));
  }

  searchLicense(searchLicenseRequest: SearchLicenseRequest) {
    return this.http
      .post<SearchLicenseResponse>(
        `${this.baseUrl}/bf-ifteos-services/employee/search-license`,
        searchLicenseRequest,
      )
      .pipe(map((response) => response.payload));
  }
}
