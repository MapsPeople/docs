---
title: Media Library
toc: true
eleventyNavigation:
  title: Media Library
  key: cms-media-library
  parent: cms
  order: 10
---

The Media Library is a new feature in the MapsIndoors CMS, replacing the Icon Manager that was used before. All features of the Icon Manager are present in the Media Library, but with new and improved functionality. The Media Library lets you upload and manage media files to use in the MapsIndoors CMS, for example the use of custom icons for Locations, or to place images of logos on the map. The Media Library can be accessed through the Display Settings panel, and the App Categories page, found here: `Solution Details -> App Settings -> App Configuration -> App Categories`.

![media-library-access](/assets/cms/media-library/media-library-access.png)

## Interface Overview

![media-library-overview](/assets/cms/media-library/media-library-overview.png)

1. Upload a file to the Media Library.
1. Sort the content of the Media Library - options are by file name or by upload date, both ascending and descending.
1. Filter the contents of the Media Library by file type.
1. Filter the contents of the Media Library, choosing between user uploads or MapsIndoors default icons.
1. Search the Media Library by file name.
1. Delete this content from the Media Library.
1. Preview of the content - Click to select this content, which highlights it.
    * Hover on this preview to see more information about this content, such as dimensions and upload date.

1. Cancel this use of the Media Library.
1. A warning if your file is too large, it may impact performence - Click the box to proceed anyways. Only appears when accesing Media Library via `Icon` menu.
1. Select the highlighted media.
1. Sync your Media library to other Solutions you own.

<!-- 1. Filter the content of the Media Library by image dimensions.  THIS IS NOT IN THE CURRENT FEATURE SCOPE -->

## Feature List

### Media Library

![media-library](/assets/cms/media-library/media-library.png)

The Media Library window contains an overview of all uploaded media in the Solution, along with functions to manage said media.

Media present in the Media Library is displayed with a preview image. This preview will also contain the filename and the option to delete the Media. If you hover over the preview, the footer will expand to reveal further information about the media, such as dimensions (in pixels) and upload date.

To select a piece of media, click on it to select it. To deselect it, click it again, or select another file in the Media Library. Your selection is indicated by a highlight. Confirm the selection of the media by clicking the "Select" button.

> When using the Integration API, all images must reside on a server that has CORS enabled. Otherwise the images can't be loaded when using the JavaScript SDK.

#### Icons

When accessing the Media Library through the `Icon` menu point, you will be presented with a slightly different functionality than elsewhere. If you select a piece of content larger than 128x64 pixels in size, or larger than 150 kb in file size, you will be presented with a warning, in which you will have to confirm your choice before allowing you to proceed. This is to prevent unintentional performance impacts by uploading too large icons.

### Uploading Files

Clicking the "Upload" button opens a local File Explorer window, allowing you to locate the file you wish to upload to the Media Library. If a file with the same name as the selected file already exists in the Media Library, a warning will appear. You may choose to cancel the upload, or to overwrite the existing file, but this will also replace all existing uses of the file with this name. `sampleimage.jpg` and `sampleimage.png` may both exist in the Media Library concurrently, but `sampleimage.jpg` and `SampleImage.jpg` will throw a warning, as this check is not case-sensitive.

> Files cannot be larger than 8 mb.

### Sort

![media-library-sort](/assets/cms/media-library/media-library-sort.png)

The "Sort" option in the filter-bar provides the option to sort the content of the Media Library alphabetically or by upload date, both ascending and descending. This provides the following options in a drop-down menu:

* File Name A-Z
* File Name Z-A
* Recently Uploaded (default)
* Oldest Upload

Clicking on one of these options initiates the sort.

### Filters

Various filtering options have been built into the Media Library, to ensure that you have an easy time finding exactly the media you need.

#### Type Filter

![media-library-filter-filetype](/assets/cms/media-library/media-library-filter-filetype.png)

The "Filter" option in the filter-bar opens a drop-down menu allowing you to select which file-type should be displayed. These are currently `.svg`, `.png` and `.jpg/.jpeg`. You can select more than one option. If no option is selected, content of all file types will be displayed.

#### MapsIndoors Filter

![media-library-filter](/assets/cms/media-library/media-library-filter.png)

A secondary filter also exists, allowing you to sort between media that is user-uploaded, and media that MapsPeople has pre-loaded as default options. These "MapsIndoors Icons" cannot be deleted, but using this filter you can opt to not have them displayed.

#### Search by File Name

By typing a part of a filename here, the filter will return to display all media in the Media Library containing the typed string of text. For example, typing `ima` will return all three of `LimaPeru.jpg`, `sampleImage.png` and `imaginePlease.svg`.

### Sync Manager

![media-library-sync](/assets/cms/media-library/media-library-sync.png)

The Sync Manager is a feature that allows you to sync your media between Solutions you have access to. The Sync Manager window contains a preview of the media you're currently syncing, above a list of Solutions you can sync to. You then select the Solutions you want to sync to by clicking the box next to their name(s). Once synced, the files will appear in the selected Solution's Media Library.

To read more about connected features, check out our documentation on [Display Rules]({{  site.url }}/content/map/map-styling/display-rules.md), and how to utilize [2D Models](https://docs-beta.mapsindoors.com/content/cms/#2d-models-and-icons).
