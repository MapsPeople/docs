---
title: Media Library
toc: true
eleventyNavigation:
  title: Media Library
  key: cms-media-library
  parent: cms
  order: 10
---

The Media Library is a feature in the MapsIndoors CMS which enables the user to upload and manage custom images, to use in the MapsIndoors CMS. The Media Library can be accessed through the dedicated Media Library button, the Location Details panel or the Display Settings panel.

**INSERT SCREENSHOT**

## Interface Overview

**INSERT SCREENSHOT**

1. Upload a file to the Media Library.
1. Sort the content of the Media Library - options are by file name or my upload date, both ascending and descending.
1. Filter the contents of the Media Library by file type.
1. Filter the contents of the Media Library, choosing between user uploads or MapsIndoors default icons.
1. Filter the content of the Media Library by size.
1. Search the Media Library by file name.
1. Delete this content from the Media Library.
1. Preview of the content - Click to highlight this content.
    * Hover on this preview to see more information about this content, such as dimensions and upload date.

1. Cancel this use of the Media Library.
1. Select the highlighted media.

## Feature List

### Media Library

**INSERT SCREENSHOT**

The Media Library itself consists of a window which contains an overview of the media present in the Solution, along with functions to manage said media.

Media present in the Media Library is displayed with a preview image. This preview will also contain the filename and the option to delete the Media. If you hover over the preview, the bottom edge will expand to reveal further information about the media, such as dimensions (in pixels) and upload date.

To select a piece of media, click on it to ensure it is selected and highlighted, and then click "Select" in the bottom-right corner.

### Uploading Files

**INSERT SCREENSHOT**

Clicking the "Upload" button opens a local File Explorer window, allowing you to locate the file you wish to upload to the Media Library. If a file with the same name as the selected file already exists in the Media Library, a warning will show up. You may choose to cancel the upload, or to overwrite the existing file, but this will also replace all existing uses of the file with this name. `sampleimage.jpg` and `sampleimage.png` may both exist in the Media Library concurrently, but `sampleimage.jpg` and `SampleImage.jpg` will throw a warning, as this check is not case-sensitive.

> Files cannot be larger than 8 mb.

### Sort

**INSERT SCREENSHOT**

The "Sort" option in the filter-bar provides the option to sort the content of the Media Library alphabetically or by upload date, both ascending and descending. This provides the following options in a drop-down menu:

* File Name A-Z
* File Name Z-A
* Recently Uploaded
* Oldest Uploaded

Clicking on one of these options initiates the sort.

### Filters

**INSERT SCREENSHOT**

Various filtering options have been built into the Media Library, to ensure that you have an easy time finding exactly the media you need.

#### Type Filter

**INSERT SCREENSHOT**

The "Filter" option in the filter-bar opens a drop-down menu allowing you to select which file-type should be displayed. These are currently `.svg`, `.png` and `.jpg/.jpeg`. You can select more than one option. If no option is selected, content of all file types will be displayed.

#### MapsIndoors Filter

**INSERT SCREENSHOT**

A secondary filter also exists, allowing you to sort between media that is user-uploaded, and media that MapsPeople has pre-loaded as default options. These MapsIndoors icons cannot be deleted, but using this filter you can opt to not have them displayed.

#### Search by File Name

**INSERT SCREENSHOT**

By typing a part of a filename here, the filter will return to display all media in the Media Library containing this string of text. For example, typing `ima` will return all three of `LimaPeru.jpg`, `sampleImage.png` and `imaginePlease.svg`.
