/**
 * GOOGLE APPS SCRIPT FOR IIAS LEADS
 * 
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1lRAvcC-e-uInZhdA1V4ODOW2c2DOClwXc5YjT2u-se0/edit
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this code.
 * 4. Click the 'Save' icon.
 * 5. Click 'Deploy' > 'New Deployment'.
 * 6. Select 'Web App' as the type.
 * 7. Set 'Who has access' to 'Anyone' (this is important for the API to work).
 * 8. Click 'Deploy' and copy the 'Web App URL'.
 * 9. Paste this URL into your .env file as GOOGLE_SHEET_WEBAPP_URL.
 */

function doPost(e) {
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);

        // Add timestamp
        var timestamp = new Date();

        // Append the data row by row
        // Format: Timestamp | Full Name | Email Address | Phone Number | Course | Message (if any) | Age
        sheet.appendRow([
            timestamp,
            data.fullName || "N/A",
            data.email || "N/A",
            data.phone || "N/A",
            data.course || "N/A",
            data.message || "",
            data.age || "N/A"
        ]);

        return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
