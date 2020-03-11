import { Component } from '@angular/core';
import { IpartSettingsService } from './ipart-settings.service';
import{ ContentItemData } from './models/content-item-data';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' iMIS!';
  data: MySettings; // this is JSON data

  constructor(private settings: IpartSettingsService,private http: HttpClient) {
    
  }
  // Using commonService
  ngOnInit(): void {
    this.settings.GetSettings().subscribe((data: ContentItemData) =>{
      this.data =  data.Data as MySettings;
    });
  }

  // Without CommonService
  example(): void{
    const ck = (document.querySelector("#x-contentKey") as HTMLInputElement).value;
    const cik = (document.querySelector("#x-contentItemKey") as HTMLInputElement).value;    
    const params = new HttpParams()
    .set('contentKey', ck)
    .set('contentItemKey',cik);
        
    this.http.get("api/ContentItem",{params: params}).subscribe((data) => {
        console.log(data);
    });
  }
}


interface MySettings
{
  myStringSetting?: string;
  myBoolSetting?: string;
  mySelectSetting?: string;
}
