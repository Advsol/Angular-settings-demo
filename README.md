# Angular 9 Settings Demo
This iPart demonstrates, using Angular 9, how to grab the settings for your iPart.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--deployUrl` flag when running ng build to ensure the correct asset paths for deployment in iMIS:

For CDN style deployment:
`ng build --deployUrl=https://[SLD.FLD]/[folder]/index.html `  
For zip style deployment:
`ng build --deployUrl=~/iPartSource/[zipfileName]/[foldername]/index.html `

_`index.html` is the entry point for you iPart_

## To replicate this iPart 
- use `ng new` to create a new Angular project.

Edit the index.html file and remove everything except the Angular componet tag, e.g.
```html
<app-root></app-root>
```
- Follow the instructions above on how to build, using `--deployUrl`
- For URL/CDN style deployment you can either publish to your external hosting, or make sure your paths match a webserver running on your local machine (as long as you have provided access to it, through your firewalls)

## Deploy

### Configuring the iPart in iMIS
Do the following to configure the iPart in iMIS
 - Log into iMIS as a Staff user.
 - Go to: **RiSE -> Maintenance -> Content types**.
 - Click **New**  **Content-Type**.
 - Select **Client-based (preferred)**.

