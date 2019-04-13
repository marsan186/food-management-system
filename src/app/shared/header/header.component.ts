import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone,Renderer2 } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserAuthService } from '../../services/userAuth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public href: string = "";  
  restData:any;
  registerForm: FormGroup;
  submitted = false;

  loggedStatus =false;
  userData:any={};
  message:string;
  loginClose:boolean= false;
  display='none';
  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('logclose') public logcloseElement: ElementRef;
  
  constructor(private formBuilder: FormBuilder,
    private authService: UserAuthService,
    private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    this.registerForm = this.formBuilder.group({
        userName: ['',[Validators.required,Validators.email]],
        password: ['', Validators.required]
    });

    if (this.authService.isAuthenticated()){
      this.loggedStatus = true;
      this.userData = JSON.parse(this.authService.isAuthenticated());
    }
      
    
}
get f() { return this.registerForm.controls; }



    onSubmit() {
      alert("hi");
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value)
        alert('SUCCESS!! :-)\n\n')
    }


    
  login() {

    if(this.registerForm.invalid){
      return;
    }

    this.authService.login(this.registerForm.value).subscribe(data => {
      console.log(data);
      this.loginClose =true;
       this.loggedStatus =true;
      localStorage.setItem('user', JSON.stringify(data));
      this.userData =data;
      this.display='none';
      this.logcloseElement.nativeElement.click();
    // this.renderer.removeClass(this.backdropElement,this.clasName);
    },
    error=>{
      this.message="Invalid username and password";
    });
  }

  logout(){
    this.authService.logout();
    this.loggedStatus =false;
    this.userData={};
  }

}
