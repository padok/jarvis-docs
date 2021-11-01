---
title: Getting started with JARVIS
author: Timo Hueser
date: 2021-10-28
layout: post
---

<center>
<span style="color:#63a31f;font-size:18px"><b>This Guide is also available as a series of videos on Youtube!</b></span><br>
<iframe width="336" height="189" src="https://www.youtube.com/embed/videoseries?list=PLHRdrn7aySLfxchhU8X_aTkcDVRMlwvPP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

Before you dive into our guide, here are some notes to help you find what you need:
- If you want to get an overview of what JARVIS can and can't do our Paper might be a good starting point. 
- This guide covers all the basic steps you need to take to get from the idea of using markerless tracking to 3D pose predictions ready for analysis.
  This obviously makes it quite a lengthy read, so feel free to skip any sections that might not be relevant to you.
- If you want in depth explanations or troubleshooting advice please check out our Manual, as this guide only covers the essential functionality of the tools.
- You don't need any datasets already recorded or annotated to follow this guide. [Click here]() to download the example data that is used in this tutorial and our video guide.


<hr style="border:2px solid gray">
## Designing a 3D Motion Capture Setup
Designing a good Camera Setup for Motion Capture is probably the most critical step to achieve reliable tracking and will safe you a lot of frustration while annotating, training your network and analyzing your data.\
That being said, without a proper starting point the vast number of available cameras, lenses, lighting options and possible setup configurations can be quite overwhelming.
That's why your first step should be to answer the following questions for your planned setup.<br><br>
The first set of questions will cover all the camera and lens specific decisions you'll have to make. Keep in mind that if you want to use our Acquisition Tool without any modifications you should use a camera model from our [list of supported cameras](index.html#supported_cameras).  
- <span style="color:#63a31f">**What is the size of the area my subject will move in and at what distance do I want to mount my cameras?**</span>\
 This will determine the field of view and with that the **focal length** of your lenses. You can use this handy [Calculator](https://www.lensation.de/calculator.html) to help you pick the correct values. If your setup requires lenses with a very short focal length, make sure to get lenses with as little distortion as possible.
 <center>
   <img src="docs/assets/field_of_view.png" width="30%">
 </center>
- <span style="color:#63a31f">**What is the size of the smallest features you want to resolve?**</span>\
  This will determine the resolution of your camera sensor. Make sure you are able to annotate all the keypoints you want without to much difficulty at the resolution you choose.
  <center>
    <img src="docs/assets/resolution.png" width="40%">
  </center>
- <span style="color:#63a31f">**What is the fastest speed my subject will move at?**</span>\
  This will determine both the minimum frame rate you need to record at and the maximum exposure time you can use. As a rough rule of thumb a framerate of 50 Hz works well for everyting that moves at human speed or lower, for fast moving subjects like monkeys or mice you'll want to go up to at least 100 Hz. If you want a more rigorous rule the [Nyquist Theorem](https://en.wikipedia.org/wiki/Nyquist_frequency) is your friend.
  <center>
    <img src="docs/assets/fast_slow.png" width="30%">
  </center>
- <span style="color:#63a31f">**How long will the cables going from your cameras to the recording computer be?**</span>\
  This will determine whether GigE or USB3.0 cameras are the better choice for you. We generally recommend using USB cameras, but for distances longer than a couple of meters the ethernet based GigE cameras are the better choice.
  <center>
    <img src="docs/assets/cable_length.png" width="40%">
  </center>

Now that the configuration of the individual cameras is out of the way, we can move on to the questions regarding the whole setup.


<hr style="border:2px solid gray">
## Setting up the Acquisition Tool


<hr style="border:2px solid gray">
## Recording Calibration Videos

### Intrinsics Calibration

The first step to get your camera calibration files is to record one calibration video for each camera. This video will be used to compute its focal length, principal point offset and distortion
parameters. Or in simpler terms: all the camera specific parameters that we need for 3D reconstruction.

<center>
<figure class="half" style="display:flex">
<p float="left">
    <img width="45%" align="center" src="docs/assets/distortion_types.png">
    <img width="30%" align="center" src="docs/assets/camera_model.png">
</p>
</figure>
</center>

There are a few rules you have to follow to get the best intrinsics calibration possible:

- <span style="color:#63a31f">**Move the checkerboard along all axis (especially rotation!)**</span>\
  Make sure you do not only record frames with the checkerboard parallel to the camera (as shown in the picture on the left). Not rotating it enough makes it impossible for the calibration tool
  to estimate the focal length correctly.

<center>
<figure class="half" style="display:flex">
<p float="left">
    <img width="24%" align="center" src="docs/assets/Checkerboard_move_wrong.png">
    <img width="25%" align="center" src="docs/assets/Checkerboard_move_correct.png">
</p>
</figure>
</center>


- <span style="color:#63a31f">**Fill as much of the field of view with the checkerboard as possible**</span>\
  Make sure to be close enough to the camera to take advantage of the full resolution of your camera to cover at least 2/3
  of the cameras field of view. Obvioulsy it's just as important to not get so close the camera looses focus, a bigger checkerboard will help in those cases.

<center>
<figure class="half" style="display:flex">
<p float="left">
    <img width="24.4%" align="center" src="docs/assets/Checkerboard_distance_wrong.png">
    <img width="25%" align="center" src="docs/assets/Checkerboard_distance_correct.png">
</p>
</figure>
</center>


### Extrinsics Calibration

The second step is to select a primary camera. This camera defines your reference frame when doing 3D reconstruction. To calibrate the extrinsic parameters you will have to record videos for all possible camera pairs that contain the primary camera. Those videos will be used to calculate the position of all secondary cameras relative to the primary camera.

<center>
  <img src="docs/assets/extrinsics.png" width="30%">
</center>

The main thing to watch out for during extrinsics recordings is that both cameras have a good and unoccluded view of the checkerboard. As long as that's the case it is as simple as just waving the
board around as much as you can.\
Side note: While it is **strongly** recommended to record seperate videos for intrinsics and extrinsics it is possibly to use your extrinsic recordings for intrinsics calibration.
If you do so make sure to still follow the intrinsic calibration rules during your recordings.

## Creating and Labeling Datasets
