import { Component, inject, OnInit } from '@angular/core';
import { LicenseService } from '../../services/license.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ksmart-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  licenseSearchForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  wards: any[] = [];

  licenseService = inject(LicenseService);
  ngOnInit(): void {
    this.initLicenseSearchForm();
  }

  initLicenseSearchForm() {
    this.licenseSearchForm = this.formBuilder.group({
      zonalOffice: [''],
      ward: [''],
    });
  }
}
