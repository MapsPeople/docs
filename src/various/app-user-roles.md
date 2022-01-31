---
title: Application User Roles
eleventyNavigation:
    key: app-user-roles
    parent: various
    title: Application User Roles
    order: 2
---

_Application User Roles_ is a feature that lets you define various roles you can assign to your users, or they can choose between themselves.

You might have parts of your map that can only be accessed by employees, so you define "Employee" and "Visitor" roles. When using the application to search for directions, users assigned to the "Visitor" role may be shown a different route from "Employee" users based on what they have access to.

## How to Configure App User Roles

App User Roles are configured via the MapsIndoors CMS. Go to `Solution Details > App Settings > App Configuration`, and find `App User Roles` on the page. Here, you can configure existing roles, and add new ones.

Click `Add App User Role` and enter the name of the newly created Role in all defined languages for your Solution.

## How to Assign/Change a Role to a User

Assigning or changing App User Roles to users is done in the app itself. The method depends on which platform you're developing for. Here are some examples:

<mi-tabs>
<mi-tab label="iOS" tab-for="iOS"></mi-tab>
<mi-tab label="Android" tab-for="Android"></mi-tab>
<mi-tab label="Web" tab-for="Web"></mi-tab>
<mi-tab-panel id="iOS">

You get the available Roles with help of the `MPSolutionProvider`:

```swift
let myUserRole: MPUserRole
MPSolutionProvider().getUserRoles { (userRoles, error) in
    myUserRole = userRoles.first
}
```

User Roles can be set on a global level using `MapsIndoors.userRoles`.

```swift
MapsIndoors.userRoles = [myUserRole]
```

User roles can also be set for a specific direction query using `DirectionsQuery.userRoles` instead of `MapsIndoors.userRoles`, for example if you want to find directions that are more accesible to individuals with disabilities.

> For more information, see the [reference documentation](https://app.mapsindoors.com/mapsindoors/reference/ios/v3/interface_m_p_solution_provider.html).

</mi-tab-panel>
<mi-tab-panel id="Android">

To fetch User Roles from the SDK, you call `getUserRoles`:

```java
final List<UserRole> cmsUserRoles = MapsIndoors.getUserRoles();
```

To set User Roles, `applyUserRoles` is used:

```java
MapsIndoors.applyUserRoles(savedUserRoles);
```

> For more information, see the [reference documentation](https://app.mapsindoors.com/mapsindoors/reference/android/v3/index.html).

</mi-tab-panel>
<mi-tab-panel id="Web">

To get the available Roles in the Web SDK, you use `SolutionsService`:

```js
mapsindoors.services.SolutionsService.getUserRoles().then(userRoles => {
  console.log(userRoles);
});
```

User Roles can be set on a global level using `mapsindoors.MapsIndoors.setUserRoles()`.

```js
mapsindoors.MapsIndoors.setUserRoles(['myUserRoleId']);
```

> For more information, see the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.MapsIndoors.html#.setUserRoles).

</mi-tab-panel>
</mi-tabs>

## Features Affected by App User Roles

The App User Roles are useful for setting limits on who can find certain Locations. App User Rules influence the map in three ways; which Locations are displayed on the map, whether they show up in search results, and the directions you can get.

Any Location defined on the map, in the menu, there is a section named `Restrictions`, where you are presented with options for limiting certain App User Roles.

![app-user-role-restrictions](/assets/various/app-user-role-restrictions.png)

* **Open for all** - All users can view, search for, and get directions to this Location.
* **Open for specific App User Roles** - Select which App User Roles have access to viewing, searching and getting directions to this specific Location.
* **Closed for All** - No users will see this Location on the map.

### The Map

If a Location has been restricted to certain App User Roles, it will not be displayed on the map for those who do not have permission.

### Search

Similarly to the effect on the map, if a Location has restrictions, it will not show up in the search results for users without sufficient permissions.

### Directions

As mentioned previously, App User Roles can be used to determine which passages can be taken by a given role. Specifically for "Entrance" Location types, the Restrictions will define whether or not a search for Directions will take the route through a given Entrance. For example, if a door needs an access card, a Route for a visitor to the premises might need to bypass this door, and find an alternate route.
