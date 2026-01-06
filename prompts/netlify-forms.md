Update the Netlify form on contact.html.

Requirements:
- Convert the form to a standard HTML POST (remove simulateSubmit() and any JS submit interception / preventDefault).
- Ensure Netlify form attributes:
  - form name="quick-quote" (or keep "quote" but be consistent everywhere)
  - method="POST"
  - data-netlify="true"
  - netlify-honeypot="bot-field"
  - enctype="multipart/form-data"
- Add required hidden input: <input type="hidden" name="form-name" value="quick-quote" />
- Add honeypot field block (hidden) with input name="bot-field".
- Keep existing drag & drop UI and file list UI; but do NOT prevent default submit.
- On success, redirect to /contact.html#thanks (use action="/contact.html#thanks").
- Ensure toast works for #thanks (trigger toast if location.hash === '#thanks').
- Add note under upload: “For large artwork packages, we’ll follow up with a secure upload link.”
Return file-by-file diff only. No explanations.
