import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';
import { AuthService } from '../../auth/auth.service';
import { UserData } from '../../auth/user-data.model';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent implements OnInit {
  @Input() userData: any = {};
  profilePictureBase64: string | null = null;
  clickOnChooseFile: boolean = false;

  email: string = '';
  displayName: string = '';
  profilePicture: string = '';
  userId: string = '';
  error: string | null = null;
  showNotification!: boolean;
  loadSpinner: boolean = false;

  @ViewChild('model') modal: any;
  @ViewChild('modelContent') modelContent: any;


  constructor(private sharedService: SharedService, private authService: AuthService) { }

  ngOnInit(): void {
    this.email = this.userData.email;
    this.displayName = this.userData.displayName;
    this.profilePicture = this.userData.profilePicture;
    this.userId = this.userData.userId;
    this.showNotification = this.userData.showNotification;
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
  }

  onSubmit(authForm: NgForm) {
    if (authForm.value.profilePicture === '') {
      authForm.value.profilePicture = this.profilePicture
    }
    const userObj = {
      email: this.email,
      displayName: authForm.value.displayName,
      profilePicture: this.profilePictureBase64 ? this.profilePictureBase64 : authForm.value.profilePicture,
      userId: this.userId,
      showNotification: authForm.value.showNotification
    }
    if (this.displayName == '' || this.displayName == undefined) {
      return;
    }
    this.authService.getUsersData().subscribe(
      (res: any) => {
        console.log(this.userData.userId);
        for (let key in res) {
          if (res.hasOwnProperty(key)) {
            const innerObject = res[key];
            if (innerObject.userId === this.userData.userId) {
              this.loadSpinner = true;
              this.authService.updateUserData(key, userObj).subscribe(
                (res: any) => {
                  this.sharedService.openProfileChanged.next(false);
                  this.authService.userData.next(res);
                  this.loadSpinner = false;
                }, (error) => {
                  alert(error.error.error.message);
                  this.loadSpinner = false;
                }
              )
            }
          }
        }
      }
    )
  }

  closeModel(e: any) {
    if (e.target !== undefined) {
      if (e.target.classList.contains('modal')) {

        this.sharedService.openProfileChanged.next(false);
        setTimeout(() => {
          this.modal.nativeElement.classList.replace('d-none', 'd-block');
        }, 100)
      }
    } else if (e == true) {
      this.sharedService.openProfileChanged.next(false);
      setTimeout(() => {
        this.modal.nativeElement.classList.replace('d-none', 'd-block');
      }, 100)
    }
  }

  closeModelBtn() {
    this.modal.nativeElement.classList.replace('d-block', 'd-none');
  }
}
