#### Fetch Attributes from Solution

You can choose to fetch the Position Provider information (`CMS` > `Solution Details` > `App Settings` > `Position Provider`) from the CMS as follows:

```java
Map<String, Map<String, Object>> providerConfig = MapsIndoors.getSolution().getPositionProviderConfig();
```

The outer keyset (`Map<String, Map<String, Object>>`) contains the name of the positioning provider, for example, `indooratlas3` for IndoorAtlas, or `ciscodna` when using Cisco DNA Spaces.

The inner keyset (`Map<String, Object>`) consist of various attribute fields for a given positioning provider, such as keys, floor mapping etc. These attribute fields will vary across different positioning providers, so refer to their own documentation for details.
