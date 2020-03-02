---
title: iOS SDK v2 Tutorials
published: true
date: 2019-09-30
eleventyNavigation:
  key: ios-v2-tutorials
  title: Tutorials
  parent: ios-v2
  order: 4
---

> A [newer version]({{ site.url }}/ios/v3) of the MapsIndoors SDK for iOS is available. The legacy version will not receive new features and will only get critical bugfix and security updates.
{: .mi-warning}

With these simple tutorials, each reflecting common use cases, you can get more hands on experience with MapsIndoors on iOS.

<ul>
  {%- for post in collections.iosV2Tutorials -%}
    <li>
      <a href="{{ post.data.permalink }}">{{ post.data.title }}</a>
    </li>
  {%- endfor -%}
</ul>
