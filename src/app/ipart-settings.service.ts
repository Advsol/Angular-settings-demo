import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CommonService } from  'asi-core';
import { ContentItemData } from './models/content-item-data';
import { ContentKeysService } from './content-keys.service';

@Injectable({
  providedIn: 'root'
})
export class IpartSettingsService extends CommonService {

  constructor(private http: HttpClient, private contentKeys: ContentKeysService) {
    super(http);
    
  }

  public GetSettings (): Observable<ContentItemData>
  {
    const params = new HttpParams()
    .set('contentKey', this.contentKeys.contentKey)
    .set('contentItemKey',this.contentKeys.contentItemKey);
    return this.single(ContentItemData,params);
  }


}
