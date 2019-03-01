import { Injectable } from '@angular/core';

// and also inject this into angular.
@Injectable()
export class AppConstantService implements IConstants {
    public headers: { [name: string]: string | string[]; } = {};
    public baseUrl: string;
    public baseIPartUrl: string;
    public authToken: string;
    public selectedPartyId: string;
    public loggedInPartyId: string;

    constructor() {
        const data = (document.querySelector("#__ClientContext") as HTMLInputElement).value;

        // we used to deserialize straight into this class, but i'm not sure how to structure this
        const appContext: IConstants = JSON.parse(data);
        appContext.authToken = (document.querySelector("#__RequestVerificationToken") as HTMLInputElement).value;

        this.baseUrl = appContext.baseUrl;
        this.baseIPartUrl = this.baseUrl + 'Areas/';

        this.authToken = appContext.authToken;

        //this.headers['Authorization'] = 'Bearer ' + '[Your Token goes here!!!! without brackets]'; 
        //this.headers['Content-Type'] = 'application/json'; 
        this.headers['RequestVerificationToken'] = appContext.authToken;

        this.selectedPartyId = appContext.selectedPartyId;
        this.loggedInPartyId = appContext.loggedInPartyId;
    }
}

export interface IConstants {
    baseUrl: string;
    baseIPartUrl: string;
    authToken: string;
    selectedPartyId: string;
    loggedInPartyId: string;
    headers: { [name: string]: string | string[]; };
}