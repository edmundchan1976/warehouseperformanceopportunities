// Website settings. Edit the values between the quotes, then re-upload this file.
window.WOF_CONFIG = {
  // Google Sheet ID: the long code in the sheet's address,
  // https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit
  sheetId: "1amLR3zUyEUAY0UscXKH2xd_0NkwmTJENBOXk0FoaRdc",

  // Web app URL of the focus-list email relay (see SETUP.txt, step 4).
  // Looks like https://script.google.com/macros/s/.../exec
  enquiryUrl: "https://script.google.com/macros/s/AKfycby6fvMrRhg2Q1Z37rKKLO7aXc5oo0Hv-gooGNDKxXFBIvQlLLqzSEQpldzjsxICaOR7Xw/exec",

  // Where focus lists are sent. Also set TO in the relay script to match.
  enquiryTo: "Help-COI-SCM@rp.edu.sg",

  // Visitor analytics (see SETUP.txt, step 5). Leave blank to switch off.
  // Google Analytics 4 measurement ID, looks like G-XXXXXXXXXX
  gaMeasurementId: "G-3NK9SZ3B6C",
  // Microsoft Clarity project ID, a short code like abcd1234ef
  clarityProjectId: "",
  // "notice": analytics runs by default, visitors see a one-time notice and can opt out.
  // "optin":  nothing is tracked until a visitor clicks Accept (stricter).
  analyticsMode: "notice"
};
