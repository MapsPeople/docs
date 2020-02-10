---
title: Hello world
layout: default.njk
eleventyNavigation:
  key: index
  title: Hello world
---

# {{ title }}

## Android

<ul>
{% for post in collections.androidV3 %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> posted in {{ post.data.category }} tagged {{ post.data.tags }} on {{ post.date }}</li>
{% endfor %}
</ul>

## iOS

<ul>
{% for post in collections.iosV3 %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> posted in {{ post.data.category }} tagged {{ post.data.tags }} on {{ post.date }}</li>
{% endfor %}
</ul>
