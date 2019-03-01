import { Component, OnInit } from '@angular/core';
import { IpartSettingsService } from './ipart-settings.service';
import{ ContentItemData } from './models/content-item-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  title = 'Innovations settings-demo';
  data: MySettings; // this is JSON data

  constructor(private settings: IpartSettingsService) {
    
  }

  ngOnInit(): void {
    this.settings.GetSettings().subscribe((data: ContentItemData) =>{
      this.data =  data.Data.Settings as MySettings;
    });
  }
}


interface MySettings
{
  myStringSetting?: string;
  myBoolSetting?: string;
  mySelectSetting?: string;
}
