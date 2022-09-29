#### Fetch Attributes from Solution

You can choose to fetch the Position Provider information (`CMS` > `Solution Details` > `App Settings` > `Position Provider`) from the CMS as follows:

```swift
MPSolutionProvider().getSolutionWithCompletion { solution, error in
    let providerConfig: Dictionary<String, Dictionary>? = solution?.positionProviderConfigs
}
```

The keys of the outer `Dictionary` are the names of the positioning provider, for example, `indooratlas3` for IndoorAtlas, or `ciscodna` when using Cisco DNA Spaces.

The inner `Dictionary` consists of various attribute fields for a given positioning provider, such as keys, floor mapping etc. These attribute fields will vary across different positioning providers, so refer to their own documentation for details.
