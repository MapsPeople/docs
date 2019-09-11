---
title: Changelog
---
Changelog for MapsIndoors for Android. This document structure is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and the project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

  <!-- ### Added        for new features. -->
  <!-- ### Changed      for changes in existing functionality.  -->
  <!-- ### Deprecated   for soon-to-be removed features.  -->
  <!-- ### Removed      for now removed features.  -->
  <!-- ### Fixed        for any bug fixes.  -->
  <!-- ### Security     in case of vulnerabilities. -->


<!---
 ## [Unreleased]
 - Tweaks and fixes to search algorithm.
 -->

 ## [2.0.0-beta1] - 2017-10-04
 ### Changed
 - Put something in here...
 - Fix `MPLocation.copy()` results in nil `MPLocation.descr`.

 ### Fixed
- Fix geometry property nil when copying `MPLocation`
- Fix unlabeled icons not respecting `MapsIndoors.mapIconSize`

### Added
- Support for statically adding a position provider, optionally by setting `MapsIndoors.positionProvider`
