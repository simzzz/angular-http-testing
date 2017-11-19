import { HttpTestService } from './http-test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpTestService]
})
export class AppComponent {
  getData: string;
  postData: string;

  constructor (private _httpService: HttpTestService) {
  }

  onTestGet() {
    this._httpService.getCurrentTime()
    .subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log('finished')
    );
  }

  onTestPost() {
    this._httpService.postJSON()
    .subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log('finished')
    );
  }
}
