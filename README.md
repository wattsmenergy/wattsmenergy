# WattsM Energy Solar Proposal Portal

## Run locally
Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Deploy
Upload all files to GitHub Pages, Azure Static Web Apps, IIS, Apache, Nginx, Netlify, or any static host.

## Notes
- Excel `.xlsx` export uses SheetJS from its public CDN. If unavailable, the portal downloads CSV.
- PDF generation uses the browser Print / Save as PDF function.
- All calculations are preliminary. Final engineering must verify module/inverter datasheets, ampacity, derating, short-circuit protection, voltage drop, earthing, structure, DISCOM rules, subsidy eligibility, and site conditions.
- Update company address, GSTIN, bank details, commercial terms and warranty text before issuing quotations.
