---
title: Authentication for Android
eleventyNavigation:
    key: various-authentication-android
    parent: various-authentication
    title: Authentication for Android
    order: 20
---

This guide covers the different aspects of user authentication and authorization in the MapsIndoors Android SDK.
This feature is available in version 3.12.0 and above.

Usually, access to the services behind the MapsIndoors SDK is restricted with API keys. However, as an additional layer of security and control, access can be restricted to users of a specific tenant. A MapsIndoors dataset can only be subject to user authentication and authorization if an integration with an identity provider exists. Current examples of such identity providers are _Google_ and _Microsoft_. These providers and more can be added and integrated to your MapsIndoors project by request.

We recommend using a library like [AppAuth](https://github.com/openid/AppAuth-Android) to handle verification and response to get a token to use in the MapsIndoors SDK.

In order to utilize an OAuth2 login flow for your MapsIndoors project, you will need to provide some details to the OAuth2 client, like the _issuer url_, _client id_, _scopes_ and possibly a _preferred identity provider_ if there are more than one option. These details can be fetched using `MapsIndoors.getAuthenticationDetails`

This can be called from MapsIndoors like this:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MapsIndoors.getAuthenticationDetails("apikey", authDetails -> {
    //Check if authdetails is not null and auth is required for the api
    if (authDetails != null && authDetails.isAuthRequired) {
        //Through the authDetails you can retrieve the necessary data to create a auth request. Here is an example through the appAuth library
        AuthorizationServiceConfiguration.fetchFromIssuer(Uri.parse(authDetails.getAuthIssuer()), (serviceConfiguration, ex) -> {
            if (serviceConfiguration != null) {
                authorizationRequest = new AuthorizationRequest.Builder(serviceConfiguration, authDetails.getAuthClients().get(0).getClientId(), ResponseTypeValues.CODE, Uri.parse("redirectUri"))
                            .setAdditionalParameters(Collections.singletonMap("acr_values", "idp:" + authDetails.getAuthClients().get(0).getPreferredIDPs().get(0)))
                            .setScope("openid profile account client-apis").build();
                authorizationService = new AuthorizationService(this);
                Intent authIntent = authorizationService.getAuthorizationRequestIntent(authorizationRequest);
                startActivity(authIntent);
            }
        }
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MapsIndoors.getAuthenticationDetails("d2540acd09f241d187994eec") { authDetails: MPAuthDetails? ->
    //Check if authdetails is not null and auth is required for the api
    if (authDetails != null && authDetails.isAuthRequired) {
        //Through the authDetails you can retrieve the necessary data to create a auth request. Here is an example through the appAuth library
        AuthorizationServiceConfiguration.fetchFromIssuer(Uri.parse(authDetails.authIssuer)) { serviceConfiguration: AuthorizationServiceConfiguration?, _: AuthorizationException? ->
            authorizationRequest = AuthorizationRequest.Builder(
                serviceConfiguration!!,
                authDetails.authClients[0].clientId,
                ResponseTypeValues.CODE,
                Uri.parse("mapsindoorsapp://"))
                .setAdditionalParameters(Collections.singletonMap("acr_values", "idp:" + authDetails.authClients[0].preferredIDPs[0]))
                .setScope("openid profile account client-apis").build()
            authorizationService = AuthorizationService(this)
            val authIntent = authorizationService!!.getAuthorizationRequestIntent(authorizationRequest!!)
            startActivity(authIntent)
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

You will also need to provide a _redirect url_, but this is not provided by MapsIndoors. The callback url may be a [Android app link](https://developer.android.com/studio/write/app-link-indexing).

> Note that the redirect link must be known to MapsIndoors and white-listed for your identity provider integration. You must inform us about all the links that you need for your application, both for development and production use so they can be white-listed.

After you have made the request if using the library you will have to react on the recieved intent from the user logging in.

With that you response you will create the token exchange request. The token exchange request will respond with a token if succesful that can be set through the `MapsIndoors` class by calling `setAuthToken`. The set access token is used by the MapsIndoors SDK, for remaining lifespan of the SDK. If the SDK is initialized again, a token will need to be set again.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
//Continuing the example of using the appAuth library together with MapsIndoors
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    final Uri data = intent.getData();

    AuthorizationResponse authorizationResponse = new AuthorizationResponse.Builder(authorizationRequest).fromUri(data).build();
    authorizationService.performTokenRequest(authorizationResponse.createTokenExchangeRequest(), (response, ex1) -> {
        if (response != null) {
            if (response.accessToken != null) {
                MapsIndoors.setAuthToken(response.accessToken);
            }
        }
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
//Continuing the example of using the appAuth library together with MapsIndoors
override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    val data = intent!!.data

    val authorizationResponse = AuthorizationResponse.Builder(authorizationRequest!!).fromUri(data!!).build()
    authorizationService!!.performTokenRequest(authorizationResponse.createTokenExchangeRequest()) { response: TokenResponse?, _: AuthorizationException? ->
        if (response != null) {
            if (response.accessToken != null) {
                MapsIndoors.setAuthToken(response.accessToken!!)
            }
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

You can now validate that you have set up the token correctly by calling `MPApiKeyValidatorService.checkAuthToken` with your solution key like this:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
private void checkApiKeyValidityAndInitializeSDK() {
    MPApiKeyValidatorService.checkAuthToken("apikey", error -> {
        if (error != null) {
            //An error happened, authentication was not succesful.
        }else {
            //You have now succesfully gotten access to a solution that requires authentication
            MapsIndoors.initialize(getApplicationContext(), "apikey");
        }
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
fun checkApiKeyValidityAndInitializeSDK() {
    MPApiKeyValidatorService.checkAuthToken("apikey") {
        if (it != null) {
            //An error happened, authentication was not succesful.
        }else {
            //You have now succesfully gotten access to a solution that requires authentication
            MapsIndoors.initialize(applicationContext, "apikey");
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

The SDK will ensure all subsequent performed data requests will include the set access token.

> Note that the access token obtained from a MapsIndoors Single Sign-on flow cannot be used as access token for the [Booking service]({{ site.url }}/content/data/booking/user-authenticated-booking-android/). Single Sign-on access tokens are issued by MapsIndoors and not the underlying tenant. You need to login directly on your Booking tenant to get an access token that can be used for working with the Booking Service as an authenticated user.
