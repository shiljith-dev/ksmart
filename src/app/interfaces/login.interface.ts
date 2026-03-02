interface GenerateOtpResponse {
  message: string;
  payload: string;
}

interface VerifyOtpInput {
  id: string;
  pen: string;
}

interface VerifyOtpResponse {
  message: string;
  payload: {
    token: string;
  };
}
