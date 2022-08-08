---
title: Booking Providers
toc: true
eleventyNavigation:
  title: Booking Providers
  key: cms-booking
  parent: cms
  order: 10
---

## Booking Providers

This submenu presents you the option of integrating a Booking system to your Solution. The exact menus presented here depend on which provider you opt for.

### Google Calender

![solution-details-booking-provider-google](/assets/cms/solution-details/Solution_Details_Booking_Providers_Google.png)

1. **Service Name** - Name your service.
1. **Organizer** - Provide a contact email address.
1. **Token** - To get your Token, follow these steps - Please note that Administrator access to the GCP Project is required:
    1. Go to [Google Cloud Console](https://console.cloud.google.com/).
    1. Navigate to your Project containing your location resources, and ensure it is the active Project.
    1. Open the top-left menu and navigate to **IAM & Admin > IAM**.
    1. Click on **Service Accounts** in the IAM & Admin menu.
    1. Click on **Create Service Account**.
    1. Fill out account details.
    1. Assign the **Editor** role - Another role can be chosen, as long as it has permissions to manage resources and calendars.
    1. Click **Done**.
    1. Head back to **Service Accounts** and open the newly created service account.
    1. Navigate to the **Keys** tab and click **Add Key > Create new key > JSON**
    1. Save and secure the downloaded file, as you will not be able to retrieve it again.
1. **Booking Permissions** - 

### Office 365

![solution-details-booking-provider-office365](/assets/cms/solution-details/Solution_Details_Booking_Providers_Office365.png)

1. **Service Name** - Name your service.
1. **Timeout (ms)** - Allowed time (in milliseconds) to wait for resources to respond to event invites. Defaults to 10000.
1. **Tenant Id** - 
1. **Client Id** - 
1. **Client Secret** - 
1. **Redirect Uri** - 
1. **Organizer** - Provide a contact email address.
1. **Refresh Token** - 
1. **Access Type** - 
