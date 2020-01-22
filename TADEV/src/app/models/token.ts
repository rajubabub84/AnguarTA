export class Error {
    code:string;
    description:string;
  }
  
export class Token {
    accessToken: string;
    isAuthenticated: string;
    failedAttemptCount: string;
    isAppointmentBooked: boolean;
    isLastTransactionPending: boolean;
    error: Error;

}
