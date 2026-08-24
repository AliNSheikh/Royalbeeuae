/**
 * Royal Bee -> Google Sheets endpoint
 * 1) Create/open a Google Sheet.
 * 2) Extensions > Apps Script.
 * 3) Paste this file into Code.gs and save.
 * 4) Replace SHEET_NAME if needed.
 * 5) Deploy > New deployment > Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 6) Copy the Web app URL into config.js as GOOGLE_SHEETS_ENDPOINT.
 */
const SHEET_NAME = 'Leads';

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Service', 'City', 'Language', 'Source']);
  }
  const body = JSON.parse(e.postData.contents || '{}');
  sheet.appendRow([
    new Date(),
    body.name || '',
    body.phone || '',
    body.service || '',
    body.city || '',
    body.language || '',
    body.source || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Royal Bee lead endpoint is running.');
}
