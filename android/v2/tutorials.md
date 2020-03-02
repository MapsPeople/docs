---
title: Tutorials
published: true
date: 2019-09-30
eleventyNavigation:
  key: android-v2-tutorials
  title: Tutorials
  parent: android-v2-guides
---

> A [newer version]({{ site.url }}/android/v3) of the MapsIndoors SDK for Android is available. The legacy version will not receive new features and will only get critical bugfix and security updates.
{: .mi-warning}

With these simple tutorials, each reflecting common use cases, you can get more hands on experience with MapsIndoors on Android.

<ul>
    {%- for post in collections.androidV2Tutorials -%}
      <li>
        <a href="{{ post.data.permalink }}">{{ post.data.title }}</a>
      </li>
    {%- endfor -%}
  </ul>
