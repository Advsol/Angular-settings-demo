import { Component } from '@angular/core';
import { IpartSettingsService } from './ipart-settings.service';
import{ ContentItemData } from './models/content-item-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello iMIS!';
  data: MySettings; // this is JSON data

  constructor(private settings: IpartSettingsService) {
    
  }

  ngOnInit(): void {
    this.settings.GetSettings().subscribe((data: ContentItemData) =>{
      this.data =  data.Data as MySettings;
    });
  }
}


interface MySettings
{
  myStringSetting?: string;
  myBoolSetting?: string;
  mySelectSetting?: string;
}
