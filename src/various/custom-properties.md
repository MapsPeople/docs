---
title: Custom Properties
eleventyNavigation:
  key: Custom-Properties
  title: Custom Properties
  parent: various
  order: 3
---

You have the option of adding Custom Properties to any piece of geodata within MapsIndoors. They can be anything that makes sense for you in building your app.

## Creating Custom Properties

Custom Properties are created for each Location, defined using a `key` and a `value`. This is found in a section in the menu for each Location.

![custom-properties](/assets/various/custom-properties.png)

## Reading Custom Properties

The method for reading and using these custom properties depends on which platform you're developing for. Here are some examples:

<mi-tabs>
<mi-tab label="iOS" tab-for="iOS"></mi-tab>
<mi-tab label="Android" tab-for="Android"></mi-tab>
<mi-tab label="Web" tab-for="Web"></mi-tab>
<mi-tab-panel id="iOS">

To get the content of a custom property, the method `getFieldForKey:` can be used.

For example, if the custom property had the name `Area Name`, you would do as follows:

```swift
let area: String = location?.getField(forKey: "area name")?.value ?? ""
```

</mi-tab-panel>
<mi-tab-panel id="Android">

![custom-properties-android](/assets/various/custom-properties-android.png)

Using the above screenshot as an example basis - To fetch the entire custom property, you use the following:

```java
DataField data = location.getField("field name");
```

To retrieve individual segments of the property, you can use:

```java
String text = data.getText();
String value = data.getValue();
String type = data.getType();
```

* `data.getText();` retrieves the content of the `key` field, and in the given example, would return `email`.
* `data.getValue();` retrieves the content of the `value` field, and in the given example, would return `123@email.com`.
* `data.getType();` retrieves the type of the Custom Property, and will in most known cases return `text`.

</mi-tab-panel>
<mi-tab-panel id="Web">

![custom-properties-android](/assets/various/custom-properties-android.png)

Using the above screenshot as an example basis - To fetch the `value` value of a custom property (also known as the `field`), you use `location.properties.fields[key].value`. In an example, that would look like this:

```js
function getLocationFieldValue(location, key) {
    return location.properties.fields[key].value;
}

console.log(getLocationFieldValue(this.currentLocation, 'email'));
// Prints out: "123@gmail.com";
```

Another option that is not case-sensitive is `getFieldForKey(key)`.

</mi-tab-panel>
</mi-tabs>

### An Example

You are a conference organizer that needs to associate some pieces of data with each exhibitor, like the sponsor level they are are on and what the size of their stand should be. You would create two Custom Properties, one called `sponsorLevel` and another called `standSize`. When building your app on top of our SDK, you could use these Custom Properties to assign a gold color to your highest paying sponsors' names, and a larger image because of their larger stand size.

Your Custom Properties can contain any combination of letters and numbers. They can not contain special characters (underscores, hyphens, dots etc.) for technical reasons. Moreover, if your Solution has multiple languages, you must provide the necessary translations for each Custom Property. When adding a Custom Property through the CMS, a value input field will be provided for each language in your Solution allowing you to input the translated values directly in the CMS.

You can also add Custom Properties through the Integration API with the exact same requirements and options as when adding them via the MapsIndoors CMS.
