import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllservicesService } from '../services/allservices.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  
  

  constructor(
    private allService: AllservicesService,
    public toastr: ToastrService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  public phoneNumber: any;
  public successOtp: boolean = false;
  public otp: any;
  

  genrateOtp() {
    this.allService.genrateOTP(this.phoneNumber).subscribe((res) => {
      this.successOtp = true;
      console.log(res);
      this.toastr.success('OTP gentrated successfully', 'Success', {
  timeOut: 300000,
});
    },
      (error) => {
        console.log(error);
         this.toastr.error('OTP not gentrated', 'Failed', {
  timeOut: 300000,
});
      });
  }

  submitOtp() {
    this.allService.submitOTP(this.phoneNumber, this.otp).subscribe((res:any) => {
      localStorage.setItem('token', res.token);
    },
      (error) => {
        console.log(error);
     }
    ) 
  }

}
