---
title: Getting started with JARVIS
author: Timo Hueser
date: 2021-10-28
layout: post
---

# Designing a 3D Motion Capture Setup

# Recording Calibration Videos

## Intrinsics Calibration

The first step to get your camera calibration files is to record one calibration video for each camera. This video will be used to compute its focal length, principal point offset and distortion
parameters. Or in simpler terms: all the camera specific parameters that we need for 3D reconstruction.

<figure class="half" style="display:flex">
<p float="left">
    <img width="35%" align="left" src="docs/assets/distortion_types.png">
    <img width="35%" align="right" src="docs/assets/camera_model.png">
</p>
</figure>

There are a few rules you have to follow to get the best intrinsics calibration possible:

- **Use an asymmetric Checkerboard**\
  Make sure your checkerboard doesn't look the same when rotated 180 degrees.

<figure class="half" style="display:flex">
<p float="left">
    <img width="35%" align="left" src="docs/assets/Checkerboard_shape_wrong.png">
    <img width="35%" align="right" src="docs/assets/Checkerboard_shape_correct.png">
</p>
</figure>

- **Move the checkerboard along all axis (especially rotation!)**\
  Make sure you do not only record frames with the checkerboard parallel to the camera (as shown in the picture on the left). Not rotating it enough makes it impossible for the calibration tool
  to estimate the focal length correctly.

<figure class="half" style="display:flex">
<p float="left">
    <img width="35%" align="left" src="docs/assets/Checkerboard_move_wrong.png">
    <img width="35%" align="right" src="docs/assets/Checkerboard_move_correct.png">
</p>
</figure>

- **Fill as much of the field of view with the checkerboard as possible**
  Make sure to be close enough to the camera to take advantage of the full resolution of your camera to cover at least 2/3
  of the cameras field of view. Obvioulsy it's just as important to not get so close the camera looses focus, a bigger checkerboard will help in those cases.

<figure class="half" style="display:flex">
<p float="left">
    <img width="35%" align="left" src="docs/assets/Checkerboard_distance_wrong.png">
    <img width="35%" align="right" src="docs/assets/Checkerboard_distance_correct.png">
</p>
</figure>

## Extrinsics Calibration
The second step is to select a primary camera. This camera defines your reference frame when doing 3D reconstruction. To calibrate the extrinsic parameters you will have to record videos for all possible camera pairs that contain the primary camera. Those videos will be used to calculate the position of all secondary cameras relative to the primary camera.

<center>
  <img src="docs/assets/extrinsics.png" height="200">
</center>

The main thing to watch out for during extrinsics recordings is that both cameras have a good and unoccluded view of the checkerboard. As long as that's the case it is as simple as just waving the
board around as much as you can.\
Side note: While it is **strongly** recommended to record seperate videos for intrinsics and extrinsics it is possibly to use your extrinsic recordings for intrinsics calibration.
If you do so make sure to still follow the intrinsic calibration rules during your recordings.

# Setting up the Acquisition Tool

# Creating and labeling Datasets with the Annotation Tool
