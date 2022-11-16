---
title: WCAG Compliance
toc: true
eleventyNavigation:
  key: WCAG Compliance
  parent: various
  order: 12
---

Making MapsIndoors accessible to all is important to us at MapsPeople, and we go to great lengths to make sure you can build accessible apps using our SDKs.

We support building apps that are at least compliant with WCAG 2.1 AA using any of the MapsIndoors SDKs (JavaScript, iOS, and Android). Our SDKs also support screen readers such as Voiceover on iOS and TalkBack on Android.

However, it is important to note that compliance with e.g. WCAG is to some degree a subjective assessment. You will only be judged based on which of the WCAG criteria fit your app's specific use case. We offer our customers the ability to build apps that are (most often) centered around maps, so they are judged on that, not how you would evaluate a music player or news app.

### AAA Support

Technically, it is possible to build an app that is AAA compliant under the WCAG assessment, but most legal requirements focus on AA compliance, which is less specific on some points compared to AAA.

### VPAT

MapsPeople provides an External Visually Impaired Voluntary Product Accessibility Template (VPAT) upon request, which details the guidelines and compliance level related to each MapsIndoors SDK.

> Compliance of SDKs indicate that a WCAG compliant application can be built using the SDK.

#### A - Beginner Level

|                         **Guideline**                         |                          **Summary**                          | **Status iOS  SDK** | **Status Web SDK** | **Status Android SDK** |
|:-------------------------------------------------------------:|:-------------------------------------------------------------:|:-------------------:|:------------------:|:----------------------:|
| 1.1.1 – Non-text Content                                      | _Provide text alternatives for non-text content_              | Compliant           | Compliant          | Compliant              |
| 1.2.1 – Audio-only and Video-only (Pre-recorded)              | _Provide an alternative to video-only and audio-only content_ | Not Relevant        | Not relevant       | Not relevant           |
| 1.2.2 – Captions (Pre-recorded)                               | _Provide captions for videos with audio_                      | Not Relevant        | Not relevant       | Not relevant           |
| 1.2.3 – Audio Description or Media Alternative (Pre-recorded) | _Video with audio has a second alternative_                   | Not Relevant        | Not relevant       | Not relevant           |
| 1.3.1 – Info and Relationships                                | _Logical structure_                                           | Compliant           | Compliant          | Compliant              |
| 1.3.2 – Meaningful Sequence                                   | _Present content in a meaningful order_                       | Compliant           | Compliant          | Compliant              |
| 1.3.3 – Sensory Characteristics                               | _Use more than one sense for instructions_                    | Compliant           | Compliant          | Compliant              |
| 1.4.1 – Use of Colour                                         | _Don’t use presentation that relies solely on colour_         | Compliant           | Compliant          | Compliant              |
| 1.4.2 – Audio Control                                         | _Don’t play audio automatically_                              | Not relevant        | Not relevant       | Not relevant           |
| 2.1.1 – Keyboard                                              | _Accessible by keyboard only_                                 | Compliant           | Compliant          | Compliant              |
| 2.1.2 – No Keyboard Trap                                      | _Don’t trap keyboard users_                                   | Compliant           | Compliant          | Compliant              |
| 2.1.4 - Character Key Shortcuts                               | _Provide options for Character Key Shortcuts_                 | Not Relevant        | Not relevant       | Not relevant           |
| 2.2.1 – Timing Adjustable                                     | _Time limits have user controls_                              | Not Relevant        | Compliant          | Not Relevant           |
| 2.2.2 – Pause, Stop, Hide                                     | _Provide user controls for moving content_                    | Not Relevant        | Not relevant       | Not relevant           |
| 2.3.1 – Three Flashes or Below                                | _No content flashes more than three times per second_         | Not Relevant        | Compliant          | Not Relevant           |
| 2.4.1 – Bypass Blocks                                         | _Provide a ‘Skip to Content’ link_                            | Not relevant        | Not relevant       | Not relevant           |
| 2.4.2 – Page Titled                                           | _Use helpful and clear page titles_                           | Compliant           | Compliant          | Compliant              |
| 2.4.3 – Focus Order                                           | _Logical order_                                               | Compliant           | Compliant          | Compliant              |
| 2.4.4 – Link Purpose (In Context)                             | _Every link’s purpose is clear from its context_              | Compliant           | Compliant          | Compliant              |
| 2.5.1 - Pointer Gestures                                      | _Pointer Gestures can be operated with a single pointer_      | Compliant           | Complaint          | Compliant              |
| 2.5.2 - Pointer Cancellation                                  | _Functionality for pointer cancellation_                      | Compliant           | Compliant          | Compliant              |
| 2.5.3 - Label in Name                                         | _Name of item contains text that is presented visually_       | Compliant           | Compliant          | Compliant              |
| 2.5.4 - Motion Actuation                                      | _Motion controls also have user interface components_         | Compliant           | Compliant          | Not relevant           |
| 3.1.1 – Language of Page                                      | _Page has a language assigned_                                | Not relevant        | Compliant          | Not relevant           |
| 3.2.1 – On Focus                                              | _Elements do not change when they receive focus_              | Compliant           | Compliant          | Compliant              |
| 3.2.2 – On Input                                              | _Elements do not change when they receive input_              | Compliant           | Compliant          | Compliant              |
| 3.3.1 – Error Identification                                  | _Clearly identify input errors_                               | Compliant           | Compliant          | Compliant              |
| 3.3.2 – Labels or Instructions                                | _Label elements and give instructions_                        | Compliant           | Compliant          | Compliant              |
| 4.1.1 – Parsing                                               | _No major code errors_                                        | Not Relevant        | Compliant          | Not Relevant           |
| 4.1.2 – Name, Role, Value                                     | _Build all elements for accessibility_                        | Compliant           | Compliant          | Compliant              |

#### AA - Intermediate Level (Level recommended by ADA and Section 508)

|                   **Guideline**                  |                            **Summary**                            |                     **Status iOS  SDK**                    | **Status Web SDK** |                   **Status Android SDK**                   |
|:------------------------------------------------:|:-----------------------------------------------------------------:|:----------------------------------------------------------:|:------------------:|:----------------------------------------------------------:|
| 1.2.4 – Captions (Live)                          | _Live videos have captions_                                       | Not Relevant                                               | Not relevant       | Not Relevant                                               |
| 1.2.5 – Audio Description (Pre-recorded)         | _Users have access to audio description for video content_        | Not Relevant                                               | Not relevant       | Not Relevant                                               |
| 1.3.4 - Orientation                              | _Content is not restricted to specific orientation_               | Compliant                                                  | Compliant          | Compliant                                                  |
| 1.3.5 - Identify Input Purpose                   | _Purpose of input fields is clear_                                | Not Relevant                                               | Not relevant       | Compliant                                                  |
| 1.4.3 – Contrast (Minimum)                       | _Contrast ratio between text and background is at least 4.5:1_    | Compliant, but will depend on colors selected by customer. | Compliant          | Compliant, but will depend on colors selected by customer. |
| 1.4.4 – Resize Text                              | _Text can be resized to 200% without loss of content or function_ | Compliant                                                  | Compliant          | Compliant                                                  |
| 1.4.5 – Images of Text                           | _Don’t use images of text_                                        | Compliant                                                  | Compliant          | Compliant                                                  |
| 1.4.10 - Reflow                                  | _Content responds dynamically to viewport dimension changes_      | Compliant                                                  | Compliant          | Compliant                                                  |
| 1.4.11 - Non-text Contrast                       | _Non-textual elements have minimum contrast ratio_                | Compliant                                                  | Compliant          | Compliant                                                  |
| 1.4.12 - Text Spacing                            | _Guidelines for text spacing_                                     | Compliant                                                  | Compliant          | Compliant                                                  |
| 1.4.13 Content on Hover or Focus                 | _Guidelines for content behavior on interaction_                  | Not Relevant                                               | Not relevant       | Compliant                                                  |
| 2.4.5 – Multiple Ways                            | _Offer several ways to find pages_                                | Compliant                                                  | Compliant          | Compliant                                                  |
| 2.4.6 – Headings and Labels                      | _Use clear headings and labels_                                   | Compliant                                                  | Compliant          | Compliant                                                  |
| 2.4.7 – Focus Visible                            | _Ensure keyboard focus is visible and clear_                      | Compliant                                                  | Compliant          | Compliant                                                  |
| 3.1.2 – Language of Parts                        | _Tell users when the language on a page changes_                  | Not Relevant                                               | Not Relevant       | Not Relevant                                               |
| 3.2.3 – Consistent Navigation                    | _Use menus consistently_                                          | Compliant                                                  | Compliant          | Compliant                                                  |
| 3.2.4 – Consistent Identification                | _Use icons and buttons consistently_                              | Compliant                                                  | Compliant          | Compliant                                                  |
| 3.3.3 – Error Suggestion                         | _Suggest fixes when users make errors_                            | Compliant                                                  | Compliant          | Compliant                                                  |
| 3.3.4- Error Prevention (Legal, Financial, Data) | _Reduce the risk of input errors for sensitive data_              | Not Relevant                                               | Not Relevant       | Not Relevant                                               |
| 4.1.3 - Status Messages                          | _Guidelines for Status Messages_                                  | Not Relevant                                               | Compliant          | Compliant                                                  |

#### AAA - Advanced Level

> Please note that MapsIndoors is not fully compliant with the AAA Level of accessibility at this time.

|                   **Guideline**                   |                          **Summary**                          |                        **Status iOS SDK**                        | **Status Web SDK** |                      **Status Android SDK**                      |
|:-------------------------------------------------:|:-------------------------------------------------------------:|:----------------------------------------------------------------:|:------------------:|:----------------------------------------------------------------:|
| 1.2.6 – Sign Language (Pre-recorded)              | _Provide sign language translations for videos_               | Not Relevant                                                     | Not Relevant       | Not Relevant                                                     |
| 1.2.7 – Extended Audio description (Pre-recorded) | _Provide extended audio description for videos_               | Not Relevant                                                     | Not Relevant       | Not Relevant                                                     |
| 1.2.8 – Media Alternative (Pre-recorded)          | _Provide a text alternative to videos_                        | Not Relevant                                                     | Not Relevant       | Not Relevant                                                     |
| 1.2.9 – Audio Only (Live)                         | _Provide alternatives for live audio_                         | Not Relevant                                                     | Not Relevant       | Not Relevant                                                     |
| 1.3.6 - Identify Purpose                          | _Purpose of UI components can be programmatically determined_ | Not compliant                                                    | Not compliant      | Not compliant                                                    |
| 1.4.6 – Contrast (Enhanced)                       | _Contrast ratio between text and background is at least 7:1_  | Compliant, but will depend on colors selected by customer.       | Compliant          | Compliant, but will depend on colors selected by customer.       |
| 1.4.7 – Low or No Background Audio                | _Audio is clear for listeners to hear_                        | Not Relevant                                                     | Not Relevant       | Not Relevant                                                     |
| 1.4.8 – Visual Presentation                       | _Offer users a range of presentation options_                 | Not Compliant                                                    | Not Compliant      | Not Compliant                                                    |
| 1.4.9 – Images of Text (No Exception)             | _Don’t use images of text_                                    | Compliant                                                        | Compliant          | Compliant                                                        |
| 2.1.3 – Keyboard (No Exception)                   | _Accessible by keyboard only, without exception_              | Compliant                                                        | Not Compliant      | Compliant                                                        |
| 2.2.3 – No Timing                                 | _No time limits_                                              | Compliant                                                        | Not Compliant      | Compliant                                                        |
| 2.2.4 – Interruptions                             | _Don’t interrupt users_                                       | Compliant                                                        | Compliant          | Compliant                                                        |
| 2.2.5 – Re-authenticating                         | _Save user data when re-authenticating_                       | Compliant                                                        | Compliant          | Compliant                                                        |
| 2.2.6 - Timeouts                                  | _Users are warned about timeouts_                             | Not Relevant                                                     | Not Relevant       | Not Relevant                                                     |
| 2.3.2 – Three Flashes                             | _No content flashes more than three times per second_         | Compliant                                                        | Compliant          | Compliant                                                        |
| 2.3.3 - Animations from Interactions              | _Most Animations from Interactions can be disabled_           | Not compliant                                                    | Not compliant      | Not compliant                                                    |
| 2.4.8 – Location                                  | _Let users know where they are_                               | Not Compliant                                                    | Not Compliant      | Not Compliant                                                    |
| 2.4.9 – Link Purpose (Link Only)                  | _Every link’s purpose is clear from its text_                 | Compliant                                                        | Compliant          | Compliant                                                        |
| 2.4.10 – Section Headings                         | _Break up content with headings_                              | Compliant                                                        | Compliant          | Compliant                                                        |
| 2.5.5 - Target Size                               | _Guidelines for size of target for pointer inputs_            | Not Compliant                                                    | Not Compliant      | Not Compliant                                                    |
| 2.5.6 - Concurrent Input Mechanisms               | _Non-restriction of input modalities_                         | Compliant                                                        | Compliant          | Compliant                                                        |
| 3.1.3 – Unusual words                             | _Explain any strange words_                                   | Compliant                                                        | Compliant          | Compliant                                                        |
| 3.1.4 – Abbreviations                             | _Explain any abbreviations_                                   | Compliant                                                        | Compliant          | Compliant                                                        |
| 3.1.5 – Reading Level                             | _Users with nine years of school can read your content_       | Compliant                                                        | Compliant          | Compliant                                                        |
| 3.1.6 – Pronunciation                             | _Explain any words that are hard to pronounce_                | Compliant                                                        | Compliant          | Compliant                                                        |
| 3.2.5 – Change on Request                         | _Don’t change elements on your website until users ask_       | Not fully compliant, search auto populates results on text input | Compliant          | Not fully compliant, search auto populates results on text input |
| 3.3.5 – Help                                      | _Provide detailed help and instructions_                      | Not Compliant                                                    | Compliant          | Not Compliant                                                    |
| 3.3.6 – Error Prevention (All)                    | _Reduce the risk of all input errors_                         | Compliant                                                        | Compliant          | Compliant                                                        |
