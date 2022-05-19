---
title: Authentication for iOS
eleventyNavigation:
    key: various-authentication-ios
    parent: various-authentication
    title: Authentication for iOS
    order: 10
---

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

MapsIndoors Auth is handled in two ways:

* API keys - This is how standard apps and custom apps built on top of the SDKs authorize by default,
* MapsIndoors Auth server - This is how the MapsIndoors CMS authorizes, as well as apps accessing secured solutions.

The MapsIndoors Auth server is located at [https://auth.mapsindoors.com](https://auth.mapsindoors.com) - including [SSO page](https://auth.mapsindoors.com/login) and [OIDC metadata](https://auth.mapsindoors.com/.well-known/openid-configuration).
The server is an [IdentityServer4](https://identityserver4.readthedocs.io/en/3.1.0/) implementation - with support for OAauth 2 and OIDC protocols.
It stores all users that are managed through the MapsIndoors CMS, as well as configurations for authentication providers.
Based on these users and authentication providers, it can authenticate and authorize users in order to access the MapsIndoors CMS and secured MapsIndoors solutions.

This guide covers the different aspects of user authentication and authorization in the MapsIndoors iOS SDK.

Usually, access to the services behind the MapsIndoors SDK is restricted with API keys. However, as an additional layer of security and control, access can be restricted to users of a specific tenant. A MapsIndoors dataset can only be subject to user authentication and authorization if an integration with an identity provider exists. Current examples of such identity providers are _Google_ and _Microsoft_. These providers and more can be added and integrated to your MapsIndoors project by request.

MapsIndoors follows a common OAuth2-based Single Sign-on flow that allows for multiple login services. As such, we recommend that you use a commonly used and well trusted SSO client library for your application. We created [this Single Sign-on sample](https://github.com/MapsIndoors/MapsIndoorsIOS/tree/master/Example/DemoSamples/Single Sign-On) with the [OAuth2 client library from Open Id](https://github.com/openid/AppAuth-iOS).

In order to utilize an OAuth2 login flow for your MapsIndoors project, you will need to provide some details to the OAuth2 client, like the _issuer url_, _client id_, _scopes_ and possibly a _preferred identity provider_ if there are more than one option. These details can be fetched using `MapsIndoors.fetchAuthenticationDetails()`.

```swift
MapsIndoors.fetchAuthenticationDetails { details, error in
    if let authDetails = details {
        print("Issuer url: \(authDetails.authIssuer)")
        if let client = authDetails.authClients.first {
            print("Client ID: \(client.clientID)")
            if let idp = client.preferredIDPS.first {
                print("acr_values=idp:\(idp)")
            }
        }
        print("Scope: \(authDetails.authScope)")
    }
}
```

You will also need to provide a _redirect url_, but this is not provided by MapsIndoors. The callback url may be a [app url scheme](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app) or a [universal link](https://developer.apple.com/ios/universal-links/).

> Note that the redirect link must be known to MapsIndoors and white-listed for your identity provider integration. You must inform us about all the links that you need for your application, both for development and production use so they can be white-listed.

How to apply the authentication details is varying from each OAuth2 client, but you can see below how they are applied in a login flow using the [OAuth2 client library from Open Id](https://github.com/openid/AppAuth-iOS)

```swift
class SingleSignOnHelper {

    var authState: OIDAuthState?

    func openLoginFlow ( for controller:UIViewController, completion: @escaping () -> Void ) {
        MapsIndoors.fetchAuthenticationDetails { details, error in

            guard let authDetails = details else { return }

            guard let client = authDetails.authClients.first else { return }

            let issuer = URL(string: authDetails.authIssuer)!

            let redirectUrl = URL(string: "mapsindoorsdemo://auth")!

            OIDAuthorizationService.discoverConfiguration(forIssuer: issuer) { configuration, error in

                guard let config = configuration else {
                    return
                }

                var additionalParams:[String:String]? = nil
                if let idp = client.preferredIDPS.first {
                    additionalParams = ["acr_values":"idp:\(idp)"]
                }

                let request = OIDAuthorizationRequest(configuration: config,
                                                      clientId: client.clientID,
                                                      scopes: [OIDScopeOpenID, OIDScopeProfile, authDetails.authScope],
                                                      redirectURL: redirectUrl,
                                                      responseType: OIDResponseTypeCode,
                                                      additionalParameters: additionalParams)

                let appDelegate = UIApplication.shared.delegate as! AppDelegate

                appDelegate.currentAuthorizationFlow =
                OIDAuthState.authState(byPresenting: request, presenting: controller) { [self] authState, error in
                    if let authState = authState {
                        self.authState = authState
                        print("Got authorization tokens. Access token: " +
                              "\(authState.lastTokenResponse?.accessToken ?? "nil")")
                    } else {
                        print("Authorization error: \(error?.localizedDescription ?? "Unknown error")")
                        self.authState = nil
                    }
                    completion()
                }
            }
        }
    }
}
```

The above login flow can then be executed whenever needed in your application, typically in a View Controller in the beginning of your apps lifetime. If the login succeeds, an _access token_ will be issued from MapsIndoors, which should then be passed to the MapsIndoors SDK.

```swift
let authHelper = SingleSignOnHelper.init()
authHelper.openLoginFlow(for: self) {
    MapsIndoors.accessToken = authHelper.authState?.lastTokenResponse?.accessToken
}
```

The SDK will then make sure that all requests for data is performed using this access token.

> Note that the access token obtained from a MapsIndoors Single Sign-on flow cannot be used as access token for the [Booking Service]({{ site.url }}/content/data/booking/). Single Sign-on access tokens are issued by MapsIndoors and not the underlying tenant. You need to login directly on your Booking tenant to get an access token that can be used for working with the Booking Service as an authenticated user.
