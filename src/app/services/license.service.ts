import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LicensePreviewResponse } from '../interfaces/license.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LicenseService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;

  getLicensePreview(licenseId: string) {
    return this.http
      .get<LicensePreviewResponse>(
        `${this.baseUrl}/bf-ifteos-services/application/search-for-preview/${licenseId}`,
      )
      .pipe(map((response) => response.payload));
  }
}
