#### Fetch Attributes from Solution

To avoid hard-coding variables in your app, there is a shortcut you can use:

```java
Map<String, Map<String, Object>> providerConfig = MapsIndoors.getSolution().getPositionProviderConfig();
```

The outer keyset contains the name of the positioning provider, for example, `indooratlas3` for IndoorAtlas, or `ciscodna` when using Cisco DNA Spaces.

The inner keyset consist of various attribute fields for a given positioning provider, such as keys, floor mapping etc. These attribute fields will vary across different positioning provider, to refer to their own documentation for details.