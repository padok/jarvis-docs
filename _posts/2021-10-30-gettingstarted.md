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

1. <span style="color:#63a31f"><b>Installing</b></span> our [Pytorch Toolbox](https://www.lensation.de/calculator.html) and downloading the example recordings.
2. <span style="color:#63a31f"><b>Visualizing</b></span> the provided annotations, both in 2D and 3D.
3. <span style="color:#63a31f"><b>Training</b></span> the entire network stack.
4. Usig your freshly trained network to <span style="color:#63a31f"><b>track</b></span> Ralph's hand in the example recording.
<br>


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
<br>


### 2. Visualizing the Example Trainingset
Before we dive into training JARVIS to track anything it is always a good idea to have a look at the trainingset your are using, both in 2D and in 3D.<br>
To do this first launch the JARVIS streamlit dashboard as described above. Once the GUI pops up in your browser you can select the Example_Project from the drop-down menu and then navigate to the visualization menu.

<img class="modalImg center" id="Dataset_Vis" src="docs/assets/gifs/dataset_vis.gif" alt="How to use the dataset visualization feature">
<script>create_modal("Dataset_Vis");</script>

As you can see there are a bunch of option for visualizing both your predictions and your trainingset. You can see how that looks like above, but feel free to play around with it a bit to familiarize yourself with the data you are working with. Once you start working with your own data, checking your trainingset before training is really important to ensure there was no problem when creating it and your network will get the input you expect it to get.
<br>


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
<br>


### 4. Predicting Poses for the Example Recording
If you haven't already you should now download our [example recordings](). Once you have those saved on your computer all you need to do is launch the JARVIS GUI and navigate to the <span style="color:#63a31f">Predict3D</span> menu as shown below. Here you'll have to specify a couple of things:
- **Path of recording directory** is the path of the example recording you just downloaded, it should include the 'Example_Recording' directory.
- **Weights for CenterDetect / HybridNet** lets you specify which weights you want to use. If you have trained models yourself you can leave them at 'latest'. If you didn't train the network yourself you'll have to put the path of the pretrained weights here. They can be found in the 'pretrained' directory inside your 'JARVIS-Hybridnet' folder.
- **SkeletonPreset** lets you select a skeleton from a number of presets. For the example you should select the 'Hand' preset. Leaving it at 'None' will use the default colorscheme, without connecting any joints.
- **Start Frame & Number Frames** let you select on which part of the recording you want to run the prediction. For quick results set 'Number of Frames' to 1000, to predict until the end of the recording set it to -1.

<img class="modalImg center" id="Training_Screenshot" src="docs/assets/Training_Screenshot.png" alt="Loss and accuracy statistics during training">
<script>create_modal("Training_Screenshot");</script>


Once all those settings are correct, press the predict button and wait for the progress bar to fill up. Once the process is finished you will find 'Videos' folder containing your recordings overlaid with the predicted keypoints as well as a 'data3D.csv' file that contains the 3D coordinates for every point in time.


<hr style="border:2px solid gray">
## Creating Your Own Trainingset from the Example Recordings
Now that you know what a trainingset looks like and how you can use it to train the network we'll take a step back and cover the process of creating this trainingset from a multi-camera recording. Like before we'll split this task into smaller steps:
1. <span style="color:#63a31f"><b>Installing</b></span> the AnnotationTool.
2. <span style="color:#63a31f"><b>Extracting</b></span> a dataset from the Example Recording.
3. Creating a set of <span style="color:#63a31f"><b>Calibration</b></span> Parameters.
4. <span style="color:#63a31f"><b>Annotating</b></span> a Frameset.
5. <span style="color:#63a31f"><b>Exporting</b></span> the dataset as a trainingset.

If everything goes according to plan you'll end up with a trainingset very similar to the one you used in the previous part of the tutorial.
<br>


### 1. Installing the AnnotationTool
If you are using Windows, MacOS all you have to do is got to our [downloads page]() and grab the installer for your OS. If you are running a different Linux distribution you will have to build the AnnotationTool yourself. There is a guide on how to do that on its [GitHub page](https://github.com/JARVIS-MoCap/JARVIS-AnnotationTool).
Once you install the tool you will be greeted with a home screen that looks like this:

<img class="modalImg center" id="HomeScreenImg" src="docs/assets/AnnotationTool_HomeScreen.png" alt="AnnotationTool Homescreen">
<script>create_modal("HomeScreenImg");</script>
<br>


### 2. Extracting a Dataset from the Example Recording
Clicking on the first item in the list on the homescreen will open up the dataset extraction menu. This will allow you to extract framesets from your recordings that you will subsequently annotate. For this tutorial we'll stick to the basics and use the fastest and quickest way of extracting a handful of framesets. Definitely check out the relevant [section]() in our Manual to learn all the details about how to create a dataset that is as representative of your entire recording as possible.
First let's go through the options in the <span style="color:#63a31f">Configuration</span> section.
- **New Dataset Name** is the name of the dataset you're going to create.
- **New Dataset Path** is the directory in which your new dataset will be saved.
- **Framesets to extract per Segment** is the number of framesets the tool will create, you can leave it at the default of 10 for this example.
- **Sampling Method** is the method the tool uses to decide which frames in your recording to use. <span style="color:#63a31f">kmeans</span> is the method you should use for your real datasets, but for this tutorial we'll use  <span style="color:#63a31f">uniform</span> to make the extraction process a bit quicker.

Next up is the <span style="color:#63a31f">Recordings</span> section. Just click <span style="color:#63a31f">Add Recording</span> and navigate to the 'Example_Recording' directory and click <span style="color:#63a31f">Open</span>.<br>
The last thing left to do is to tell the tool the names of all the <span style="color:#63a31f">Entities</span> and <span style="color:#63a31f">Keypoints</span> you want to annotate. Entities refers to the animal/object you are tracking. (Note: The AnnotationTool supports annotating multiple entities in one dataset, but the rest of our toolbox currently does not). For our example you can load the 'Hand' preset by clicking <span style="color:#63a31f">Load Preset</span>.

<img class="modalImg center" id="Dataset_Menu" src="docs/assets/Dataset_Menu.png" alt="Dataset extraction menu and settings to create example dataset">
<script>create_modal("Dataset_Menu");</script>

If your dataset menu looks like shown above you can click <span style="color:#63a31f">Create</span> to create a new dataset. A progress window should pop up and once it is finished you should find a dataset folder containing a '.yaml' config file as well as a directory containing extracted frames for each camera.
<br>


### 3. Creating a Set of Calibration Parameters
One of the most important steps in creating good 3D ground truth annotations is precise camera calibration. As always we have a comprehensive [section]() on how to record calibration recordings in our Manual. For this example we provide a set of example calibration recordings that you can download by clicking [here]().<br>
Go back to the homescreen of the AnnotationTool and select the <span style="color:#63a31f">Create new Calibration</span> menu item.
Like before let's first go through the options in the <span style="color:#63a31f">General</span> section.
- **Calibration Set Name** is the name of the set of calibration parameters you're going to create.
- **Calibration Set Savepath** is the directory in which your new calibration parameters will be saved.
- **Separate Recordings for Intrinsics** can be set to no if you want to use your extrinsic recordings for intrinsics calibration. This is not recommended, see the manual for details.
- **Intrinsics Folder Path** is the directory that contains all the recordings for intrinsic calibration (you'll find it inside the downloaded 'Calibration_Example' directory).  
- **Extrinsics Folder Path** is the directory that contains all the recordings for extrinsics calibration (you'll find it inside the downloaded 'Calibration_Example' directory).

Calibrating on your own data might require you to change some settings in the <span style="color:#63a31f">Calibration Settings</span> and the <span style="color:#63a31f">Checkerboard Layout</span> sections as well. For this example the defaults are already correct though, so you can leave all those settings untouched.

Once you have entered all those settings you can click the <span style="color:#63a31f">Update Cameras</span> button to add all cameras and pairs to the lists.<br>
After that you're almost ready to calibrate the cameras. The last thing you need to do is to delete the camera pair labeled 'Camera_LC --> Camera_B' and instead add the 3 camera pair 'Camera_T --> Camera_LC --> Camera_B'. The GIF below shows you how to do that in detail.

<img class="modalImg center" id="3_Cam_Pair" src="docs/assets/gifs/Add_3_Camera_Pair.gif" alt="How to add a 3-camera-pair">
<script>create_modal("3_Cam_Pair");</script>

You're now ready to click the <span style="color:#63a31f">Calibrate Button</span>. This will take a little bit, but once it is done a info window will pop up showing you the quality of all your calibrations. It should look similar to this:

<img class="modalImg center" id="Calib_Results" src="docs/assets/Calib_Results.png" alt="Statistics after camera calibration">
<script>create_modal("Calib_Results");</script>

You will now find a directory containing one '.yaml' calibration file per camera at the path that you specified.
<br>


### 4. Annotating a Frameset
Now that you have both a dataset and the calibrations that go along with it you can start annotating your framesets. First navigate back to the homescreen and select the <span style="color:#63a31f">Annotate Dataset</span> item. Navigate to the directory of the dataset you created earlier and select the '.yaml' config file as shown below. You will then get an overview over the different segments of your dataset (in the example case there is only one) and a list of all your cameras. Select the segment you want to annotate and click the <span style="color:#63a31f">Load Dataset</span> button.<br>

<img class="modalImg center" id="Load_Dataset" src="docs/assets/gifs/Load_Dataset.gif" alt="Statistics after camera calibration">
<script>create_modal("Load_Dataset");</script>

With the dataset loaded succesfully all that's left to do is to add the calibrations you created earlier to the dataset. To do this click on the big blue plus sign on the left side of the screen and select the directory that contains the '.yaml' calibration files.<br>
After that you can start annotating. The workflow is as following:<br>
1. <span style="color:#63a31f"><b>Annotate all the frames in one frameset.</b></span> You can switch between them either by clicking the <span style="color:#63a31f">Next >></span> and <span style="color:#63a31f"><< Previous</span> on the left or by double clicking one of the cameras in the list. As soon as you annotate a keypoint in two or more cameras you will see a error bar appear in the <span style="color:#63a31f">Reprojection Tool</span>. This is an indicator for the consistency of your annotations, the lower the better.
2. <span style="color:#63a31f"><b>Switch to the next frameset once all reprojection error bars are sufficiently low.</b></span> Once you annotated all joints for one frameset you can switch to the next one using the <span style="color:#63a31f">Next Set >></span> button. If you have a dataset consisting of more than one segment the dropdown in the top left corner will allow you to switch between segments.

<img class="modalImg center" id="Annotating" src="docs/assets/gifs/Annotating.gif" alt="Statistics after camera calibration">
<script>create_modal("Annotating");</script>

For a real dataset it is important that you annotate all framesets in a dataset before proceeding to the trainingset exporting step. Since this is only a tutorial we suggest you play around with the tool long enough to get familiar with and and get a feeling of how the Reprojection Tool works. Once you feel comfortable you can move on to the next step.


### 5. Exporting a Trainingset
Almost done! As always navigate back to the homescreen and select the last item in the list: <span style="color:#63a31f">Export Trainingset</span>. As before there are a handful of parameters you need to set:
- **Trainingset Name** is the name of the trainingset you will create.
- **Trainingset Savepath** is the directory the trainingset will be saved in.
- **TrainingSet Type** lets you select if you want to create a 2D or a 3D trainingset. 3D trainingsets include the calibration parameters and are what you almost always will be using. Only use the 2D option if you are working with single camera data or you are creating a pretraining trainingset.

The rest of the parameters are related to how the data is split into training and validation data. The defaults should be fine for almost all applications, so just leave them untouched for the example.<br>
After setting your parameters you can click the blue 'plus' button to add one or more dataset to the trainingset. For the example add only the dataset you did annotate earlier. Selection works just like in the annotation mode by selecting the '.yaml' dataset config file. After adding the dataset the pie chart in the bottom left corner should be show some statistics about your dataset. Since we did not annotate many frames the majority of keypoints will be unnanotated.
If everything looks like shown below you can click the <span style="color:#63a31f">Create Trainingset</span> button.

<img class="modalImg center" id="Trainingset_Exporter" src="docs/assets/Trainingset_Exporter.png" alt="Trainingset Export Menu">
<script>create_modal("Trainingset_Exporter");</script>

You should now have a trainingset that has the same structure as the one you used to train your first network.

:tada: That's it! Now it's time to get started with training a model on your own data. If you want to learn more about our toolbox we strongly suggest you have a look at our [Manual](/jarvis-docs/2021-10-29-manual.html). There you will find detailed instructions on every step of building a 3D motion capture setup with JARVIS.
