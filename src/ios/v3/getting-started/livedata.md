---
title: Enable Live Data
toc: true
eleventyNavigation:
  title: Enable Live Data
  key: ios-v3-getting-started-enable-live-data
  parent: ios-v3-getting-started
  order: 170
---

{% include "src/shared/live-data/live-data-intro.md" %}

{% include "src/shared/getting-started/live-data/live-position-demo-preconditions.md" %}

Enabling of Live Data through `MPMapControl` can be done as simple as calling `MPMapControl.enableLiveData()` with a [Domain Type]({{ site.url }}/ios/v3/guides/live-data/#domain-type).

```swift
  self.mapControl.enableLiveData(MPLiveDomainType.position)
```

By consequence, `MPMapControl` will manage the Live Data subscriptions needed for the current visible map and provide a default rendering of the Live Updates depending on the Domain Type.

In the context of your view controller showing a map, just add the call somewhere after your initialization of `MPMapControl`.

```swift
class MapViewController: UIViewController {
  private var mapControl: MPMapControl?

  override func viewDidLoad() {
    super.viewDidLoad()
    mapControl = MPMapControl(map: mapView)
    mapControl?.enableLiveData(MPLiveDomainType.position)
  }
}
```

{% include "src/shared/getting-started/live-data/live-position-demo-result.md" %}

Learn more about controlling and rendering Live Data in MapsIndoors in the [introduction to Live Data]({{ site.url }}/ios/v3/guides/live-data/).
