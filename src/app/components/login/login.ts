import { Component, inject, OnInit, signal } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ksmart-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  generateOtpForm!: FormGroup;
  verifyOtpForm!: FormGroup;
  router = inject(Router);

  isVisibleOtpTextbox = signal(false);
  generateOtpPayload = signal<string>('');
  error = signal<string>('');

  loginService = inject(LoginService);
  formbuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.initGenerateOtpForm();
    this.initVerifyOtpForm();
  }

  initGenerateOtpForm() {
    this.generateOtpForm = this.formbuilder.group({
      employeeId: [
        'G79692',
        [Validators.required, Validators.minLength(6), Validators.maxLength(10)],
      ],
    });
  }

  initVerifyOtpForm() {
    this.verifyOtpForm = this.formbuilder.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
  }

  get employeeId() {
    return this.generateOtpForm.get('employeeId');
  }

  get otp() {
    return this.verifyOtpForm.get('otp');
  }

  generateOtp() {
    if (this.generateOtpForm.invalid) return;

    this.loginService.generateOtp(this.employeeId?.value).subscribe((response) => {
      if (response.message === 'Successfully generated and send OTP') {
        this.isVisibleOtpTextbox.set(true);
        this.generateOtpPayload.set(response.payload);
      }
    });
  }

  verifyOtp() {
    if (this.verifyOtpForm.invalid) return;

    this.error.set('');
    this.generateOtpPayload.set('5479bf68-97b8-4385-9392-2867c74968b8');
    console.log(
      'verifying OTP',
      this.otp?.value,
      this.employeeId?.value,
      this.generateOtpPayload(),
    );
    this.loginService
      .verifyOtp(this.generateOtpPayload(), this.otp?.value, this.employeeId?.value)
      .subscribe({
        next: (response) => {
          if (response.message === 'Successfully authenticated') {
            localStorage.setItem('token', response.payload.token);
            this.router.navigate(['/dashboard']);
          }
        },
        error: (error) => {
          console.error('OTP verification failed:', error.error);
          this.error.set(error.error || 'OTP verification failed. Please try again.');
        },
      });
  }
}
