# Enquiry form — connecting the leads spreadsheet

The contact form now genuinely submits. `POST /api/enquiry` writes to two
independent sinks and reports success if **either** one accepts the lead.

| Sink | Configuration | Persists on Vercel/Netlify? |
|---|---|---|
| `data/enquiries.csv` | none — works out of the box | **No** (read-only filesystem) |
| `ENQUIRY_WEBHOOK_URL` | one env var | Yes |

Locally you need nothing: leads append to `data/enquiries.csv`, which opens
directly in Excel or Google Sheets. That file is gitignored — it contains
personal data and must never be committed.

**Before going live you must set `ENQUIRY_WEBHOOK_URL`,** otherwise the CSV is
the only sink and it will silently vanish on a serverless host. If both sinks
fail the API returns 502 and the form shows the ASR phone number, so a lead is
never lost quietly — but it also isn't captured.

## Connecting a Google Sheet (about 5 minutes)

1. Create a Sheet. Name the first row of columns:
   `submitted_at | full_name | phone | email | team | location | project_brief`

2. **Extensions → Apps Script**, and replace the contents with:

   ```js
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     SpreadsheetApp.getActiveSpreadsheet()
       .getActiveSheet()
       .appendRow([
         data.submittedAt,
         data.fullName,
         data.phone,
         data.email,
         data.team,
         data.location,
         data.projectBrief,
       ]);
     return ContentService.createTextOutput(
       JSON.stringify({ ok: true })
     ).setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**

   Copy the resulting `/exec` URL.

4. Put it in `.env.local` (and in your host's environment variables):

   ```
   ENQUIRY_WEBHOOK_URL=https://script.google.com/macros/s/AKfy.../exec
   ```

5. Restart, submit a test enquiry, confirm the row appears, then delete the
   test row.

## Notes

- The webhook call has a 10-second timeout; a slow Sheet won't hang the form.
- Validation is server-side as well as client-side: name, phone, project type,
  location and description are required; email is optional; phone must contain
  at least 8 digits.
- To move to email or a CRM later, add a third sink in
  `src/app/api/enquiry/route.ts` — drop it into the `Promise.allSettled` array
  and the "success if any sink accepted" logic covers it automatically.
- Consider adding spam protection (honeypot field or Turnstile) before running
  paid traffic to the form.
