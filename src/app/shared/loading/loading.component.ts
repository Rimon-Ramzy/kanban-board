import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: '<div id="loading"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

}
