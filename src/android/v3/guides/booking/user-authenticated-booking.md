---
title: User Authenticated Booking
eleventyNavigation:
    parent: android-v3-guides-booking
    key: android-v3-guides-booking-UAB
    title: User Authenticated Booking
---



<!-- reference to normal booking example -->
It is highly recommended to first read the [guide on Booking](../) to get an an understanding of how booking functions in the MapsIndoors SDK.
<!-- example showing how to input token/tenantId -->
## User Authenticated Bookings

By default, the `MPBookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings on behalf of a user. For the `MPBookingService` to work on behalf of a user, it must identify the tenant with a given tenant id (optional for single tenant setups) and prove user access with an access token. See the following example.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPBookingService mBookingService = MPBookingService.getInstance();

public void setAuthentication(String userToken, String tenantId) {
    MPBookingAuthConfig authConfig = new MPBookingAuthConfig.Builder(userToken).setProviderTenantId(tenantId).build();

    mBookingService.setAuthConfig(authConfig);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
private val mBookingService: MPBookingService = MPBookingService.getInstance()

fun setAuthentication(accessToken: String, tenantId: String) {
    val authConfig = MPBookingAuthConfig.Builder(accessToken).setProviderTenantId(tenantId).build()

    mBookingService.setAuthConfig(authConfig)
}
```

</mi-tab-panel>
</mi-tabs>

<!-- text about aquiring the token is the app makers job -->
When the above configuration is in place, all following operations through the `MPBookingService` will be performed on behalf of a user. If the access token expires, the different Booking methods will result in errors and a new token must be obtained.

### Obtaining a Tenant ID for User Bookings

The tenant id is specific for each tenant / booking provider. If you don't know your tenant id, your IT administrator should be able to provide the information needed. Note that this is optional for single tenant setups and single tenant setups are the most common.

### Obtaining an Access Token for User Bookings

Obtaining an access token for working with Bookings on behalf of a user is outside of the scope of this guide. Usually an access token is obtained in a login flow in your own application.

> Note that the access token obtained from a MapsIndoors Single Sign-on flow cannot be used as access token for the `MPBookingService`. Single Sign-on access tokens are issued by MapsIndoors and not the underlying tenant. You need to login directly on your Booking tenant to get an access token that can be used for working with the Booking Service as an authenticated user.

<!-- example of disabling UAB -->
## Disabling User Authenticated Bookings

It is easy to disable the authentication, simply `null` the `AuthConfig` on the `MPBookingService`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPBookingService bookingService = MPBookingService.getInstance();

bookingService.setAuthConfig(null);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
val bookingService = MPBookingService.getInstance()

bookingService.setAuthConfig(null)
```

</mi-tab-panel>
</mi-tabs>
