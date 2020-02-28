# Angular 9 Settings Demo
This iPart demonstrates, using Angular 9, how to grab the settings for your iPart.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--deployUrl` flag when running ng build:

For CDN style deployment:
`ng build --deployUrl=https://[SLD.FLD]/[folder]/ `  
For zip style deployment:
`ng build --deployUrl=~/iPartSource/[zipfileName]/[foldername]/index.html `


## To replicate this iPart 
Edit the index.html file and remove everything except the Angular componet tag, e.g.
```html
<app-root></app-root>
```

## Deploy

### Configuring the iPart in iMIS
Do the following to configure the iPart in iMIS
 - Log into iMIS as a Staff user.
 - Go to: **RiSE -> Maintenance -> Content types**.
 - Click **New**  **Content-Type**.
 - Select **Client-based (preferred)**.

