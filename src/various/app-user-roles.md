---
title: Application User Roles
eleventyNavigation:
    key: app-user-roles
    parent: various
    title: Application User Roles
    order: 2
---

Application User Roles are a feature of the MapsIndoors where you can define roles that you can assign to your users. This will impact various features of the app, for example, if certain doors can only be accessed by employees, you could define an "Employee" and "Visitor" role, and when using the application to search for directions, users assigned to the "Visitor" role will be shown a different route that does not go through such doors, whereas "Employee" users will be shown directions that also include these doors.

## How to Configure App User Roles

App User Roles are confuigured via the CMS web application. In the menus, go to `Solution Details > App Settings > App Configuration`, and then find the menu point named `App User Roles`. Here, you can configure existing roles, and add new ones.

Upon clicking `Add App User Role`, you will be asked to enter the name of the newly created Role, in all defined languages for your solution.

## How to Assign/Change a Role to a User

Assigning or changing App User Roles to users is done in the app itself, and the exact method depends on which platform you're developing for.

### iOS

You get the available Roles with help of the `MPSolutionProvider`:

```swift
MPSolutionProvider.init().getUserRoles { (userRoles, error) in
    let myUserRole = myUserRole.first
}
```

User Roles can be set on a global level using `MapsIndoors.userRoles`.

```swift
MapsIndoors.userRoles = [myUserRole]
```

### Android

cdnjdcjdnc

### Web

To get the available Roles in the Web SDK, you use `SolutionsService`:

```js
mapsindoors.services.SolutionsService.getUserRoles().then(userRoles => {
  console.log(userRoles);
});
```

> For more information, see the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.SolutionsService.html#getUserRoles).

User Roles can be set on a global level using `mapsindoors.MapsIndoors.setUserRoles()`.

```js
mapsindoors.MapsIndoors.setUserRoles(['myUserRoleId']);
```

> For more information, see the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.MapsIndoors.html#.setUserRoles).

## How to Change the Assigned Role

mcdmkdmkd

## What Features do App User Roles Affect?

The App User Roles are a useful tool to limit which types of users can see certain Locations. The main fields that can be influenced through the App User Rules are the Locations on the Map itself, whether they show up in the Search, and how they influence the Directions.

Any Location defined on the map, in the menu, there is a section named `Restrictions`, where you are presented with options for limiting certain App User Roles.

![app-user-role-restrictions](/assets/various/app-user-role-restrictions.png)

* **Open for all** - All App User Roles can view and search for this Location.
* **Open for specific App User Roles** - Here you will see an overview of the App User Roles you have set up previously. Using the checkboxes you can define which App User Roles should have access to viewing and searching for this specific Location.
* **Closed for All** - No users will see this Location on the Map.

### The Map

If a Location has been restricted to certain App User Roles, it will not be displayed on the Map for those who do not have permission.

### Search

Similarly to the effect on the Map, if a Location has restrictions, it will not show up in a Search for users without sufficient permissions.

### Directions

As mentioned previously, App User Roles can be used to determine which passages can be taken by a given role. Specifically for "Entrance" Location types, the Restrictions will define whether or not a search for Directions will take the route through a given Entrance. For example, if a door needs an access card, a Route for a visitor to the premises might need to bypass this door, and find an alternate route.
