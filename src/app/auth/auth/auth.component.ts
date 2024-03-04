import { AfterViewInit, Component, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserData } from '../user-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit, AfterViewInit {
  public windowWidth?: number;
  @ViewChild('authCard') authCard: any;
  @ViewChild('formWrapper') formWrapper: any;
  @ViewChild('signup') signupBtn: any;
  @ViewChild('login') loginBtn: any;
  @ViewChild('loginFormWrapper') loginFormWrapper: any;
  @ViewChild('signupFormWrapper') signupFormWrapper: any;
  clickOnChooseFile: boolean = false;
  profilePictureBase64: string | null = null;

  signupForm!: FormGroup;
  loginForm!: FormGroup;
  isLoading: boolean = false;
  signupError!: string | null;
  loginError!: string | null;

  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.initSignupForm();
    this.initLoginForm();
    this.authService.userData.next(null);
  }

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 768) {
      this.authCard.nativeElement.classList.add('phone')
    } else {
      this.authCard.nativeElement.classList.remove('phone')
    }
  }

  private initSignupForm() {
    let email = '';
    let displayName = '';
    let profilePicture = '';
    let password = '';

    this.signupForm = new FormGroup({
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'displayName': new FormControl(displayName, [Validators.required]),
      'profilePicture': new FormControl(profilePicture, [Validators.required]),
      'password': new FormControl(password, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
    })
  }

  private initLoginForm() {
    let email = '';
    let password = '';

    this.loginForm = new FormGroup({
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'password': new FormControl(password, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
    })
  }

  onSignup() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value.email, this.signupForm.value.password).subscribe(
        (res) => {
          const userData: UserData = {
            displayName: this.signupForm.value.displayName,
            email: this.signupForm.value.email,
            profilePicture: this.signupForm.value.profilePicture,
            userId: res.localId,
            showNotification: true
          }
          this.authService.addUserData(userData).subscribe(
            () => {
              this._router.navigate(['/board']);
            }
          );
        },
        (error) => {
          this.signupError = error.error.error.message;
        }
      )
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        () => {
          this.authService.autoLogin();
          // this.authService.userData.next()
          this._router.navigate(['/board']);
        },
        (error) => {
          if (error.error.error.message == "INVALID_LOGIN_CREDENTIALS") {
            this.loginError = "uncorrect email or password"
          }
        }
      )
    }
  }

  get signupControlName() {
    return this.signupForm.controls;
  }

  get loginControlName() {
    return this.loginForm.controls;
  }

  goSignup() {
    this.handleGoSignupOrLogin('translateX(-100%)', 'translateX(0)', 'none', 'block', 'login-mode', 'signup-mode');
    this.signupForm.reset();
  }

  goLogin() {
    this.handleGoSignupOrLogin('translateX(0)', 'translateX(100%)', 'block', 'none', 'signup-mode', 'login-mode');
    this.signupForm.reset();
  }

  handleGoSignupOrLogin(
    loginFormTranslate: string,
    signupFormTranslate: string,
    loginBtnDisplay: string,
    signupBtnDisplay: string,
    formWrapperRemoveClass: string,
    formWrapperSetClass: string) {
    this.loginFormWrapper.nativeElement.style.transform = loginFormTranslate;
    this.signupFormWrapper.nativeElement.style.transform = signupFormTranslate;

    if (this.authCard.nativeElement.classList.contains('phone')) {
      this.loginBtn.nativeElement.style.display = loginBtnDisplay;
      this.signupBtn.nativeElement.style.display = signupBtnDisplay;
    } else {
      this.formWrapper.nativeElement.classList.replace(formWrapperRemoveClass, formWrapperSetClass);
      if (signupFormTranslate === 'block') {
        this.signupBtn.nativeElement.style.display = "none";
      } else {
        this.signupBtn.nativeElement.style.display = "block";
      }
    }
  }

  @HostBinding('style.width.px')
  @HostListener('window:resize', ['$event'])

  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 768) {
      if (this.loginBtn.nativeElement.style.display === 'none') {
        this.signupBtn.nativeElement.style.display = 'block';
      } else {
        this.signupBtn.nativeElement.style.display = 'none';
      }
      this.authCard.nativeElement.classList.add('phone');
    } else {
      this.authCard.nativeElement.classList.remove('phone');
      this.signupBtn.nativeElement.style.display = 'block';
      this.loginBtn.nativeElement.style.display = 'block';
      this.loginFormWrapper.nativeElement.style.transform = 'translateX(0)';
      this.signupFormWrapper.nativeElement.style.transform = 'translateX(100%)';
      this.formWrapper.nativeElement.classList.replace('signup-mode', 'login-mode');
    }
  }



  onFileChange(e: any) {
    const file = e.target.files[0];
    if (file) {
      this.readFileAsBase64(file);
    }
  }


  readFileAsBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64String = e.target.result;
      this.uploadImage(base64String);
    };
    reader.readAsDataURL(file);
  }


  uploadImage(base64String: string): void {
    this.profilePictureBase64 = base64String;
    this.signupForm.get('profilePicture')?.setValue(base64String);
  }
}
