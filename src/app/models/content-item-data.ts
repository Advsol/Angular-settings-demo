import {DataContract} from  'asi-core';

export class ContentItemData extends DataContract {
    $type = 'Asi.Soa.Core.DataContracts.ContentItemData, Asi.Contracts';
    Data: Data;
}

interface Data {
    ContentKey: string;
    ContentTypeKey: string;
    ContentItemKey: string;
    ShowTitleFlag: boolean;
    SortOrder: number;
    LayoutZone: number;
    ContentItemName: string;
    IconUrl?: any;
    Settings: any;
    PartTitle?: any;
    PartTitleHeadingLevel: number;
    DoNotRenderInDesignMode: boolean;
    CssClass?: any;
    ShowBorder: boolean;
    Collapsible: boolean;
    Collapsed: boolean;
    DisplayOnExtraSmallScreens: boolean;
    DisplayOnSmallScreens: boolean;
    DisplayOnMediumScreens: boolean;
    DisplayOnLargeScreens: boolean;
    ModuleSpecificSetting?: any;
    LicenseKeyRestriction?: any;    
}