---
title: Getting started with JARVIS
author: Timo Hueser
date: 2021-10-28
layout: post
---

<link rel="stylesheet" href="{{site.baseurl}}/docs/assets/css/post.css">
<div id="Modal" class="modal">
 <span class="close">&times;</span>
 <img class="modal-content" id="modalImg">
 <div id="caption"></div>
</div>
<script src="{{site.baseurl}}/docs/assets/js/image_modal.js"> </script>

![Alt Text](docs/assets/overview.svg)

<center>
<span style="color:#63a31f;font-size:18px"><b>This Guide is very much work in progress!</b></span><br><br>
</center>

<!-- <center>
<span style="color:#63a31f;font-size:18px"><b>This Guide is also available as a series of videos on Youtube!</b></span><br>
<iframe width="336" height="189" src="https://www.youtube.com/embed/videoseries?list=PLHRdrn7aySLfxchhU8X_aTkcDVRMlwvPP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center> -->

Welcome to our Getting Started Guide! This guide will teach you how to set up the three different parts of our toolbox and how to work with our example data. This will help you get an idea of all the steps required to build and use a 3D markerless motion capture setup. After working through this guide you will be ready to work through our [Manual](/jarvis-docs/2021-10-29-manual.html) and learn all the things neccessary to build you own motion capture system from scratch.\
Note that this Guide is somewhat back to front. You will learn how to work with annotated data before we show you how to actually annotate it. We are not doing that to confuse you but because it helps to get a feel for what you are trying to achieve before you spend hours annotating images.<br>
One additional note, JARVIS uses two different formats for the annotated data. The one you will work with first is called the <span style="color:#63a31f">trainingset</span>. A trainingset is a finished set of annotations in the right format to be used by the JARVIS Pytorch module. The second one is called a <span style="color:#63a31f">dataset</span>, this is the format that is used by the AnnotationTool. We know this can be a bit confusing, but the two different formats are neccessary to make some features of JARVIS work.

<hr style="border:2px solid gray">
## Exploring the Provided Example Trainingset
Let's start by playing around with our provided example so you can familiarize with our software and get a better feel for the task and the workflow.<br>
The example data we're working with in this tutorial are recordings of one of our monkeys - his name is Ralph - performing a simple grasping task in our 12 camera setup. Your task is to track his hand while he is enjoying a variety of fruits we hand him.
We'll split the task into four steps:

1. <span style="color:#63a31f">Installing</span> our [Pytorch Toolbox](https://www.lensation.de/calculator.html) and downloading the example recordings.
2. <span style="color:#63a31f">Visualizing</span> the provided annotations, both in 2D and 3D.
3. <span style="color:#63a31f">Training</span> the entire network stack.
4. Using your freshly trained network to <span style="color:#63a31f">track</span> Ralph's hand in the example recording.

### 1. Installing the Toolbox and Downloading the Data
First let's take care of setting up the software. Make sure you have a version of [Anaconda](https://www.anaconda.com/) installed and your PC has a Nvidia GPU with working CUDA drivers installed.
After that there are only a few simple steps you need to take to install the toolbox:
- Download the python package. To do this open up a terminal and run:
```
git clone https://github.com/JARVIS-MoCap/JARVIS-HybridNet.git && cd JARVIS-HybridNet
```
Alternatively you download it directly by clicking [here](https://github.com/JARVIS-MoCap/JARVIS-HybridNet/archive/refs/heads/master.zip).

- Create the 'jarvis' Anaconda environment by running:
```
conda create -n jarvis python=3.9  pytorch=1.10.1 torchvision cudatoolkit=11.3 notebook  -c pytorch
```

- Activate the environment (you will need to do this every time you open a terminal to use JARVIS):
```
conda activate jarvis
```

- Install the required version of the setuptools package:
```
pip install -U setuptools==59.5.0
```

- Install JARVIS:
```
pip install -e .
```

- To test if the install was successful run:
```
jarvis hello
```

With that out of the way the only thing left to do is downloading the example recordings by clicking [here](). To make everything work right out of the box you should put the 'Example Recordings' folder into your main JARVIS-HybridNet directory.<br>
<br>
:tada: Congratulations, you are all set up now! To launch our handy streamlit GUI interface just open a terminal, activate the conda environment by running `conda activate jarvis` and type `jarvis launch`.


### 2. Visualizing the Example Trainingset
Before we dive into training JARVIS to track anything it is always a good idea to have a look at the trainingset your are using, both in 2D and in 3D.<br>
To do this first launch the JARVIS streamlit dashboard as described above. Once the GUI pops up in your browser you can select the Example_Project from the drop-down menu and then navigate to the visualization menu.

<img class="modalImg center" id="Dataset_Vis" src="docs/assets/gifs/dataset_vis.gif" alt="How to use the dataset visualization feature">
<script>create_modal("Dataset_Vis");</script>

As you can see there are a bunch of option for visualizing both your predictions and your trainingset. You can see how that looks like above, but feel free to play around with it a bit to familiarize yourself with the data you are working with. Once you start working with your own data, checking your trainingset before training is really important to ensure there was no problem when creating it and your network will get the input you expect it to get.


### 3. Training the Entire Network
Now that you know what our data looks like it is time to train the network stack. Thankfully this is really easy, all you need to do is to navigate to the <span style="color:#63a31f">Train Full</span> menu and press train as shown below. If everything works correctly you should see two progress bars as well as a plot showing the training progress appear. Depending on your GPU training might take anywhere between an hour and a day, so a bit of patience is required at this point. If you don't want to wait you can also continue with our pretrained weights of course.

<div class="wrap-collabsible">
  <input id="collapsible" class="toggle" type="checkbox">
  <label for="collapsible" class="lbl-toggle">More Info on Network Training</label>
  <div class="collapsible-content">
    <div class="content-inner">
      <p>
        If you want some more detail on what's happening behind the scenes when training a network this section is for you, otherwise feel free to skip it!<br>
        Our network stack is trained in four steps:
        <ol>
        <li><b>Training CenterDetect:</b> In this step a 2D-CNN is trained to detect the center of the entity you are tracking. This will be used to estimate the location of the entity in 3D, essentially telling the 3D-CNN where to look.</li>
        <li><b>Training KeypointDetect:</b> In this step another 2D-CNN is trained to detect all your annotated keypoints in a single image. The output of this network will subsequently be used to construct the 3D feature volume that is the input of our 3D-CNN. </li>
        <li><b>Training HybridNet:</b> In this step the 3D part of our full HybridNet architecture is trained. It's job is to use the 3D feature volumes created by the KeypointDetect stage to create the final 3D pose predictions.</li>
        <li><b>Finetuning HybridNet (Optional):</b>In this step the 2D and 3D blocks of the HybridNet architecture are trained jointly. This can give an additional boost in accuracy, but is not required.</li>
        </ol>
      </p>
    </div>
  </div>
</div>


### 4. Predicting Poses for the Example Recording
If you haven't already you should now download our [example recordings](). Once you have those saved on your computer all you need to do is launch the JARVIS GUI and navigate to the <span style="color:#63a31f">Predict3D</span> menu as shown below. Here you'll have to specify a couple of things:
1. **Path of recording directory** is the path of the example recording you just downloaded, it should include the 'Example_Recording' directory.
3. **Weights for CenterDetect / HybridNet** lets you specify which weights you want to use. If you have trained models yourself you can leave them at 'latest'. If you didn't train the network yourself you'll have to put the path of the pretrained weights here. They can be found in the 'pretrained' directory inside your 'JARVIS-Hybridnet' folder.
4. **SkeletonPreset** lets you select a skeleton from a number of presets. For the example you should select the 'Hand' preset. Leaving it at 'None' will use the default colorscheme, without connecting any joints.
5. **Start Frame & Number Frames** let you select on which part of the recording you want to run the prediction. For quick results set 'Number of Frames' to 1000, to predict until the end of the recording set it to -1.

<img class="modalImg center" id="Training_Screenshot" src="docs/assets/Training_Screenshot.png" alt="Loss and accuracy statistics during training">
<script>create_modal("Training_Screenshot");</script>


Once all those settings are correct, press the predict button and wait for the progress bar to fill up. Once the process is finished you will find 'Videos' folder containing your recordings overlaid with the predicted keypoints as well as a 'data3D.csv' file that contains the 3D coordinates for every point in time.

<hr style="border:2px solid gray">
## Creating Your Own Trainingset from the Example Recordings
Now that you know what a trainingset looks like and how you can use it to train the network we'll take a step back and cover the process of creating this trainingset from a multi-camera recording. Like before we'll split this task into smaller steps:
1. <span style="color:#63a31f">Installing</span> the AnnotationTool.
2. <span style="color:#63a31f">Extracting</span> a dataset from the Example Recording.
3. Creating a set of <span style="color:#63a31f">Calibration</span> Parameters.
4. <span style="color:#63a31f">Annotating</span> a set of Frames.
5. <span style="color:#63a31f">Exporting</span> the dataset as a trainingset.

If everything goes according to plan you'll end up with a trainingset very similar to the one you used in the previous part of the tutorial.

### 1. Installing the AnnotationTool
If you are using Windows, MacOS all you have to do is got to our [downloads page]() and grab the installer for your OS. If you are running a different Linux distribution you will have to build the AnnotationTool yourself. There is a guide on how to do that on its [GitHub page](https://github.com/JARVIS-MoCap/JARVIS-AnnotationTool).
Once you install the tool you will be greeted with a home screen that looks like this:

<img class="modalImg center" id="HomeScreenImg" src="docs/assets/AnnotationTool_HomeScreen.png" alt="AnnotationTool Homescreen">
<script>create_modal("HomeScreenImg");</script>


<!-- :tada: That's it! Now it's time to get started with training a model on your own data. If you want to learn more about our toolbox we strongly suggest you have a look at our [Manual](/jarvis-docs/2021-10-29-manual.html). There you will find detailed instructions on every step of building a 3D motion capture setup with JARVIS. -->
