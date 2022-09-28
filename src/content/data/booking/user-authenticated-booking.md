---
title: User Authenticated Booking
eleventyNavigation:
  parent: data-booking
  key: data-booking-android-user-auth
  title: User Authenticated Booking
  order: 20
---

<!-- reference to normal booking example -->
It is highly recommended to first read the [guide on Booking]({{ site.url }}/content/data/booking/) to get an an understanding of how booking functions in the MapsIndoors SDK.
<!-- example showing how to input token/tenantId -->

<mi-tabs>
<mi-tab label="Android - Java" tab-for="java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="java">

## User Authenticated Bookings in Java

By default, the `MPBookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings on behalf of a user. For the `MPBookingService` to work on behalf of a user, it must identify the tenant with a given tenant id (optional for single tenant setups) and prove user access with an access token. See the following example.

```java
MPBookingService mBookingService = MPBookingService.getInstance();

public void setAuthentication(String userToken, String tenantId) {
    MPBookingAuthConfig authConfig = new MPBookingAuthConfig.Builder(userToken).setProviderTenantId(tenantId).build();

    mBookingService.setAuthConfig(authConfig);
}
```

<!-- text about aquiring the token is the app makers job -->
When the above configuration is in place, all following operations through the `MPBookingService` will be performed on behalf of a user. If the access token expires, the different Booking methods will result in errors and a new token must be obtained.

### Obtaining a Tenant ID for User Bookings in Java

The tenant id is specific for each tenant / booking provider. If you don't know your tenant id, your IT administrator should be able to provide the information needed. Note that this is optional for single tenant setups and single tenant setups are the most common.

### Obtaining an Access Token for User Bookings in Java

Obtaining an access token for working with Bookings on behalf of a user is outside of the scope of this guide. Usually an access token is obtained in a login flow in your own application.

> Note that the access token obtained from a MapsIndoors Single Sign-on flow cannot be used as access token for the `MPBookingService`. Single Sign-on access tokens are issued by MapsIndoors and not the underlying tenant. You need to login directly on your Booking tenant to get an access token that can be used for working with the Booking Service as an authenticated user.

<!-- example of disabling UAB -->
## Disabling User Authenticated Bookings in Java

It is easy to disable the authentication, simply `null` the `AuthConfig` on the `MPBookingService`.

```java
MPBookingService bookingService = MPBookingService.getInstance();

bookingService.setAuthConfig(null);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

## User Authenticated Bookings in Kotlin

By default, the `MPBookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings on behalf of a user. For the `MPBookingService` to work on behalf of a user, it must identify the tenant with a given tenant id (optional for single tenant setups) and prove user access with an access token. See the following example.

```kotlin
private val mBookingService: MPBookingService = MPBookingService.getInstance()

fun setAuthentication(accessToken: String, tenantId: String) {
    val authConfig = MPBookingAuthConfig.Builder(accessToken).setProviderTenantId(tenantId).build()

    mBookingService.setAuthConfig(authConfig)
}
```

<!-- text about aquiring the token is the app makers job -->
When the above configuration is in place, all following operations through the `MPBookingService` will be performed on behalf of a user. If the access token expires, the different Booking methods will result in errors and a new token must be obtained.

### Obtaining a Tenant ID for User Bookings in Kotlin

The tenant id is specific for each tenant / booking provider. If you don't know your tenant id, your IT administrator should be able to provide the information needed. Note that this is optional for single tenant setups and single tenant setups are the most common.

### Obtaining an Access Token for User Bookings in Kotlin

Obtaining an access token for working with Bookings on behalf of a user is outside of the scope of this guide. Usually an access token is obtained in a login flow in your own application.

> Note that the access token obtained from a MapsIndoors Single Sign-on flow cannot be used as access token for the `MPBookingService`. Single Sign-on access tokens are issued by MapsIndoors and not the underlying tenant. You need to login directly on your Booking tenant to get an access token that can be used for working with the Booking Service as an authenticated user.

<!-- example of disabling UAB -->
## Disabling User Authenticated Bookings in Kotlin

It is easy to disable the authentication, simply `null` the `AuthConfig` on the `MPBookingService`.

```kotlin
val bookingService = MPBookingService.getInstance()

bookingService.setAuthConfig(null)
```

</mi-tab-panel>
<mi-tab-panel id="ios">

## User Authenticated Bookings for iOS

By default, the `MPBookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings on behalf of a user. For the `MPBookingService` to work on behalf of a user, it must identify the tenant with a given tenant id (optional for single tenant setups) and prove user access with an access token. See the following example.

```swift
let bookingService = MPBookingService.sharedInstance()

bookingService.authenticationConfig = MPBookingAuthConfig.init(accessToken: "some-user-access-token")
bookingService.authenticationConfig?.tenantId = "some-tenant-id"
}
```

When the above configuration is in place, all following operations through the `MPBookingService` will be performed on behalf of a user. If the access token expires, the different Booking methods will result in errors and a new token must be obtained.

### Obtaining a Tenant ID for User Bookings for iOS

The tenant id is specific for each tenant / Booking provider. If you don't know your tenant id, your IT administrator should be able to provide the information needed. Note that this is optional for single tenant setups and single tenant setups are the most common.

### Obtaining an Access Token for User Bookings for iOS

Obtaining an access token for working with Bookings on behalf of a user is outside of the scope of this guide. Usually an access token is obtained in a login flow in your own application.

> Note that the access token obtained from a [MapsIndoors Single Sign-on flow]({{ site.url }}/content/various/authentication/sso/) cannot be used as access token for the `MPBookingService`. Single Sign-on access tokens are issued by MapsIndoors and not the underlying tenant. You need to login directly on your Booking tenant to get an access token that can be used for working with the Booking Service as an authenticated user.

### Disabling User Authenticated Bookings for iOS

Disabling User Authenticated Bookings is as simple as setting the `authenticationConfig` to `nil`:

```swift
let bookingService = MPBookingService.sharedInstance().authenticationConfig = nil
}
```

After disabling user authenticated Bookings, all following operations will be treated as anonymous Booking operations.

</mi-tab-panel>
<mi-tab-panel id="web">

## User Authenticated Bookings for Web

By default, the `BookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings on behalf of a user. For the `BookingService` to work on behalf of a user, it must identify the tenant with a given tenant id (optional for single tenant setups) and prove user access with an access token. See the following example.

```javascript
  const bookingService = mapsindoors.services.BookingService;
  const bookingAuthenticationConfig = new bookingService.AuthenticationConfig('some-user-access-token', `some-tenant-id`);
  bookingService.setAuthenticationConfig(bookingAuthenticationConfig);
}
```

When the above configuration is in place, all following operations through the `BookingService` will be performed on behalf of a user. If the access token expires, the different Booking methods will result in errors and a new token must be obtained.

### Obtaining a Tenant ID for User Bookings for Web

The tenant id is specific for each tenant / Booking provider. If you don't know your tenant id, your IT administrator should be able to provide the information needed. Note that this is optional for single tenant setups and single tenant setups are the most common.

### Obtaining an Access Token for User Bookings for Web

Obtaining an access token for working with Bookings on behalf of a user is outside of the scope of this guide. Usually an access token is obtained in a login flow in your own application.

> Note that the access token obtained from a MapsIndoors Single Sign-on flow cannot be used as access token for the `BookingService`. Single Sign-on access tokens are issued by MapsIndoors and not the underlying tenant. You need to login directly on your Booking tenant to get an access token that can be used for working with the Booking Service as an authenticated user.

### Disabling User Authenticated Bookings for Web

Disabling User Authenticated Bookings is as simple as calling the `setAuthenticationConfig` with `null` as the argument:

```javascript
bookingService.setAuthenticationConfig(null);
}
```

After disabling user authenticated Bookings, all following operations will be treated as anonymous Booking operations.

</mi-tab-panel>
</mi-tabs>
