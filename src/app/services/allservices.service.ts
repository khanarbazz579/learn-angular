import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
  
  private baseUrl: string;
  
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }
 
  
  genrateOTP(phoneNumber: string) {
    const numberInput = { username: phoneNumber }
    return this.http.post(this.baseUrl + '/auth/admin/generate-otp', numberInput)
  }

  submitOTP(phoneNumber: string, otp: string) {
    const body = { username: phoneNumber, otp: otp }
    return this.http.post(this.baseUrl + '/auth/login', body)
  }

}
