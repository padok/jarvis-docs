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
<script src="{{site.baseurl}}/docs/assets/js/tab.js"> </script>


![Alt Text](docs/assets/overview.svg)

<!-- <center>
<span style="color:#63a31f;font-size:18px"><b>This Guide is also available as a series of videos on Youtube!</b></span><br>
<iframe width="336" height="189" src="https://www.youtube.com/embed/videoseries?list=PLHRdrn7aySLfxchhU8X_aTkcDVRMlwvPP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center> -->

Welcome to our Getting Started Guide! This guide will teach you how to set up the three different parts of our toolbox and how to work with our example data. This will help you get an idea of all the steps required to build and use a 3D markerless motion capture setup. After working through this guide you will be ready to have a look at our [Manual](/jarvis-docs/2021-10-29-manual.html) and learn all the things necessary to build you own motion capture system from scratch.\
Note that this Guide is somewhat back to front. You will learn how to work with annotated data before we show you how to actually annotate it.<br>
One additional note, JARVIS uses two different formats for the annotated data. The one you will work with first is called the <span style="color:#63a31f">trainingset</span>. A trainingset is a finished set of annotations in the right format to be used by the JARVIS Pytorch module. The second one is called a <span style="color:#63a31f">dataset</span>, this is the format that is used by the AnnotationTool. We know this can be a bit confusing, but the two different formats are neccessary to make some features of JARVIS work.

<hr style="border:2px solid gray">
## Exploring the Provided Example Trainingset
Let's start by playing around with our provided example so you can familiarize with our software and get a better feel for the task and the workflow.<br>
The example data we're working with in this tutorial are recordings of one of our monkeys - his name is Ralph - performing a simple grasping task in our 12 camera setup. Your task is to track his hand while he is enjoying a variety of fruits we hand him.
we will split the task into four steps:

1. <span style="color:#63a31f"><b>Installing</b></span> our **Pytorch Toolbox** and downloading the example recordings.
2. <span style="color:#63a31f"><b>Visualizing</b></span> the provided annotations, both in 2D and 3D.
3. <span style="color:#63a31f"><b>Training</b></span> the entire network stack.
4. Usig your freshly trained network to <span style="color:#63a31f"><b>track</b></span> Ralph's hand in the example recording.
<br>


### 1. Installing the Toolbox and Downloading the Data
First let's take care of setting up the software. Make sure you have a version of [Anaconda](https://www.anaconda.com/) installed. If you want to train networks also make sure that your PC has a Nvidia GPU with working CUDA drivers installed.<br>
There are only a few simple steps you need to take to install the toolbox:
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

With that out of the way the only thing left to do is downloading the example recordings by clicking [here](https://zenodo.org/record/6515085/files/Example_Recording.zip?download=1).<br>
<br>
:tada: Congratulations, you are all set up now! To launch our handy streamlit GUI interface just open a terminal, activate the conda environment by running `conda activate jarvis` and type `jarvis launch`.<br> Alternatively you can also interact with jarvis through the command line. To do this activate the conda environment and then run `jarvis launch-cli`. The following sections give you the option to switch between instructions for both methods by selecting the respective tabs.
<br>



### 2. Visualizing the Example Trainingset
Before we dive into training JARVIS to track anything it is always a good idea to have a look at the trainingset your are using, both in 2D and in 3D.<br>

<div class="tab">
<button class="tablinks" onclick="openTab(event, 'GUI1')" id="GUIButton1">Graphical Interface</button>
  <button class="tablinks" onclick="openTab(event, 'CLI1')">Command-Line Interface</button>
</div>

<div id="GUI1" class="tabcontent">
To do this using the streamlit dashboard first launch the JARVIS streamlit dashboard as described above by running `jarvis launch`. Once the GUI pops up in your browser you can select the Example_Project from the drop-down menu and then navigate to the visualization menu.<br><br>

<img class="modalImg center" id="Dataset_Vis" src="docs/assets/gifs/dataset_vis_gui.gif" alt="How to use the dataset visualization feature">
<script>create_modal("Dataset_Vis");</script>

<br>
As you can see there are a bunch of option for visualizing both your predictions and your trainingset. You can see how that looks like above, but feel free to play around with it a bit to familiarize yourself with the data you are working with. <br>
<br>
</div>

<div id="CLI1" class="tabcontent">
To do this using the command line interface first launch it by running <span style="color:#63a31f">'jarvis launch-cli'</span>. You will see a menu appear in your terminal that you can navigate using your arrow keys. To visualize your dataset select the <span style="color:#63a31f">Visualize</span> menu and then pick either the <span style="color:#63a31f">Dataset2D</span> or the <span style="color:#63a31f">Dataset2D</span> option.<br><br>

<img class="modalImg center" id="cli_vis" src="docs/assets/gifs/cli_vis_dataset.gif" alt="Using the command line interface to visualize the trainingset">
<script>create_modal("cli_vis");</script>

<br>
To visualize the example trainingset select the 'Example_Project' and the 'Hand' skeleton preset. Other than that feel free to play around with the different options.You can cycle through all the available frames by pressing any key. Pressing 'q' or 'esc' will take you back to the Visualize menu. <br>
<br>
</div>

Once you start working with your own data, checking your trainingset before training is really important to ensure there was no problem when creating it and your network will get the input you expect it to get.

<script>
document.getElementById("GUIButton1").click();
</script>



### 3. Training the Entire Network
Now that you know what our data looks like it is time to train the network stack.

<div class="tab">
<button class="tablinks2" onclick="openTab2(event, 'GUI2')" id="GUIButton2">Graphical Interface</button>
  <button class="tablinks2" onclick="openTab2(event, 'CLI2')" id="CLIButton2">Command-Line Interface</button>
</div>

<div id="GUI2" class="tabcontent2">
Using our GUI this is really easy, all you need to do is to navigate to the <span style="color:#63a31f">Train Full</span> menu and press train as shown below. If everything works correctly you should see two progress bars as well as a plot showing the training progress appear. Depending on your GPU training might take up to a few hours, so a bit of patience is required at this point. If you don't want to wait you can also continue with our pretrained weights of course. <br>
<br>

<img class="modalImg center" id="Training_Screenshot" src="docs/assets/Training_Screenshot.png" alt="Loss and accuracy statistics during training">
<script>create_modal("Training_Screenshot");</script>
</div>

<div id="CLI2" class="tabcontent2">
 The CLI makes this very easy. All you need to do is launch the interface by running <span style="color:#63a31f">'jarvis launch-cli'</span>, select the <span style="color:#63a31f">Train</span> menu and then run <span style="color:#63a31f">Train</span> as shown below. If everything works correctly you should see a progress bar appearing. Depending on your GPU training might take up to a few hours, so a bit of patience is required at this point. If you don't want to wait you can also continue with our pretrained weights of course. <br>
<br>

<img class="modalImg center" id="Training_CLI" src="docs/assets/gifs/cli_train.gif" alt="Training all networks using the CLI">
<script>create_modal("Training_CLI");</script>
</div>

<script>
document.getElementById("GUIButton2").click();
</script>

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
If you haven't already you should now download our **[example recording](https://zenodo.org/record/6515085/files/Example_Recording.zip?download=1)**.

<div class="tab">
<button class="tablinks3" onclick="openTab3(event, 'GUI3')" id="GUIButton3">Graphical Interface</button>
  <button class="tablinks3" onclick="openTab3(event, 'CLI3')" id="CLIButton3">Command-Line Interface</button>
</div>

<div id="GUI3" class="tabcontent3">
Once you have the example recording saved on your computer all you need to do is launch the JARVIS GUI and navigate to the <span style="color:#63a31f">Predict3D</span> menu as shown below. Here you will have to specify a couple of things:
<ul>
<li><b>Path of recording directory</b> is the path of the example recording you just downloaded, it should include the 'Example_Recording' directory.</li>
<li><b>Weights for CenterDetect / HybridNet</b> lets you specify which weights you want to use. If you have trained models yourself you can leave them at 'latest'. If you didn't train the network yourself you will have to put the path of the pretrained weights here. They can be found in the 'pretrained' directory inside your 'JARVIS-Hybridnet' folder.</li>
<li><b>Start Frame & Number Frames</b> let you select on which part of the recording you want to run the prediction. For quick results set 'Number of Frames' to 1000. To predict until the end of the recording set it to -1.</li>
</ul>

Once all those settings are correct, press the  <span style="color:#63a31f">Predict</span> button and wait for the progress bar to fill up as shown below.<br>
<br>
<img class="modalImg center" id="GUI_Predict" src="docs/assets/gifs/gui_pred.gif" alt="Predicting on Recording using the GUI">
<script>create_modal("GUI_Predict");</script>
</div>

<div id="CLI3" class="tabcontent3">
Once you have the example recording saved on your computer all you need to do is launch the JARVIS CLI and select <span style="color:#63a31f">Predict3D</span> in the <span style="color:#63a31f">Predict</span> menu as shown below. Here you will have to specify a couple of things:
<ul>
<li>The <b>Recordings Path</b> is the path of the example recording you just downloaded, it should include the 'Example_Recording' directory.</li>
<li>Select <span style="color:#63a31f">No</span> for using <b>TensorRT acceleration</b> for now. If you installed the optional TensorRT packages this lets speed up predictions using NVIDIAs <a href="https://developer.nvidia.com/tensorrt">TensorRT</a> library. Compiling the TRT models takes quite some time though.</li>
<li>If you have trained models yourself you can use the most recently saved weights. Otherwise you will have to specify the path of the pretrained weights for the CenterDetect and the HybridNet networks here. They can be found in the 'pretrained' directory inside your 'JARVIS-Hybridnet' folder.</li>
<li> Select <span style="color:#63a31f">No</span> when asked if you want to use a <b>calibration that is not in the trainingset</b>.</li>
<li> To quickly get some results also select <span style="color:#63a31f">No</span> when asked wether you want to <b>predict for the whole video</b></li>
<li><b>Start Frame & Number of Frames</b> let you select on which part of the recording you want to run the prediction. For quick results set 'Number of Frames' to 1000, to predict until the end of the recording set it to -1.</li>
</ul>

After answering all the prompts you should see a progress bar filling up as shown below.<br>
<br>
<img class="modalImg center" id="CLI_Predict" src="docs/assets/gifs/cli_pred.gif" alt="Predicting on Recording using the CLI">
<script>create_modal("CLI_Predict");</script>
</div>

Once the process is finished you will find a directory with a current timestamp in the projects folder under <span style="color:#63a31f">predictions</span>. That folder contains a 'data3D.csv' file that contains the 3D coordinates and their corresponding confidences for every point in time. The directory also contains a '.yaml' file that holds some information necessary for creating videos from your predictions.

<script>
document.getElementById("GUIButton3").click();
</script>

### 5. Creating Annotated Videos from Your Predictions
The easiest way to check the quality of the predictions you just created is looking at annotated videos. For the 3D predictions those videos are created by projecting the 3D coordinates of the keypoints back into all available camera perspectives.  

<div class="tab">
<button class="tablinks4" onclick="openTab4(event, 'GUI4')" id="GUIButton4">Graphical Interface</button>
<button class="tablinks4" onclick="openTab4(event, 'CLI4')" id="CLIButton4">Command-Line Interface</button>
</div>

<div id="GUI4" class="tabcontent4">
In the GUI navigate to the <span style="color:#63a31f">Visualization</span> menu as shown below. Here the right prediction directory should already be selected. If you want you can remove or add cameras from the list of cameras for which you want to create annotated videos. You can now click <span style="color:#63a31f">Create Video</span> as shown below. <br>
If everything is set correctly you should find a directory containing your freshly labeled videos in the project directory after the progress bar is filled up.<br>
<br>
<img class="modalImg center" id="GUI_Video" src="docs/assets/gifs/gui_vid.gif" alt="Creating annotated videos from predictions using the GUI">
<script>create_modal("GUI_Video");</script>  
</div>

<div id="CLI4" class="tabcontent4">
Navigate to the <span style="color:#63a31f">Visualize Menu</span> after launching the JARVIS CLI. After selecting <span style="color:#63a31f">Create Videos 3D</span> and the Example_Project you should be able to select the Predictions_3D directory that you created in the last step. If you want you can now select and deselect all the cameras that will be used to create your annotated videos. <br>
If everything is set correctly you should find a directory containing your freshly labeled videos in the project directory after the progress bar is filled up.<br>
<br>
<img class="modalImg center" id="CLI_Video" src="docs/assets/gifs/cli_vid.gif" alt="Creating annotated videos from predictions using the CLI">
<script>create_modal("CLI_Video");</script>  
</div>


<script>
document.getElementById("GUIButton4").click();
</script>

<hr style="border:2px solid gray">
## Creating Your Own Trainingset from the Example Recordings
Now that you know what a trainingset looks like and how you can use it to train the network we will take a step back and cover the process of creating this trainingset from a multi-camera recording. Like before we will split this task into smaller steps:
1. <span style="color:#63a31f"><b>Installing</b></span> the AnnotationTool.
2. <span style="color:#63a31f"><b>Extracting</b></span> a dataset from the Example Recording.
3. Creating a set of <span style="color:#63a31f"><b>Calibration</b></span> Parameters.
4. <span style="color:#63a31f"><b>Annotating</b></span> a Frameset.
5. <span style="color:#63a31f"><b>Exporting</b></span> the dataset as a trainingset.

If everything goes according to plan you will end up with a trainingset very similar to the one you used in the previous part of the tutorial.
<br>


### 1. Installing the AnnotationTool
If you are using Windows, MacOS all you have to do is got to our [downloads page]() and grab the installer for your OS. If you are running a different Linux distribution you will have to build the AnnotationTool yourself. There is a guide on how to do that on its [GitHub page](https://github.com/JARVIS-MoCap/JARVIS-AnnotationTool).
Once you install the tool you will be greeted with a home screen that looks like this:

<img class="modalImg center" id="HomeScreenImg" src="docs/assets/AnnotationTool_HomeScreen.png" alt="AnnotationTool Homescreen">
<script>create_modal("HomeScreenImg");</script>
<br>


### 2. Extracting a Dataset from the Example Recording
Clicking on the first item in the list on the homescreen will open up the dataset extraction menu. This will allow you to extract framesets from your recordings that you will subsequently annotate. For this tutorial we will stick to the basics and use the fastest and quickest way of extracting a handful of framesets. Definitely check out the relevant [section]() in our Manual to learn all the details about how to create a dataset that is as representative of your entire recording as possible.
First let's go through the options in the <span style="color:#63a31f">Configuration</span> section.
- **New Dataset Name** is the name of the dataset you're going to create.
- **New Dataset Path** is the directory in which your new dataset will be saved.
- **Framesets to extract per Segment** is the number of framesets the tool will create, you can leave it at the default of 10 for this example.
- **Sampling Method** is the method the tool uses to decide which frames in your recording to use. <span style="color:#63a31f">kmeans</span> is the method you should use for your real datasets, but for this tutorial we will use <span style="color:#63a31f">uniform</span> to make the extraction process a bit quicker.

Next up is the <span style="color:#63a31f">Recordings</span> section. Just click <span style="color:#63a31f">Add Recording</span> and navigate to the 'Example_Recording' directory and click <span style="color:#63a31f">Open</span>.<br>
The last thing left to do is to tell the tool the names of all the <span style="color:#63a31f">Entities</span> and <span style="color:#63a31f">Keypoints</span> you want to annotate. Entities refers to the animal/object you are tracking. (Note: The AnnotationTool supports annotating multiple entities in one dataset, but the rest of our toolbox currently does not). For our example you can load the 'Hand' preset by clicking <span style="color:#63a31f">Load Preset</span>.

<img class="modalImg center" id="Dataset_Menu" src="docs/assets/Dataset_Menu.png" alt="Dataset extraction menu and settings to create example dataset">
<script>create_modal("Dataset_Menu");</script>

If your dataset menu looks like shown above you can click <span style="color:#63a31f">Create</span> to create a new dataset. A progress window should pop up and once it is finished you should find a dataset folder containing a '.yaml' config file as well as a directory containing extracted frames for each camera.
<br>


### 3. Creating a Set of Calibration Parameters
One of the most important steps in creating good 3D ground truth annotations is precise camera calibration. As always we have a comprehensive [section]() on how to record calibration recordings in our Manual. For this example we provide a set of example calibration recordings that you can download by clicking **[here](https://zenodo.org/record/6515182/files/Calibration_Example.zip?download=1)**.<br>
Go back to the homescreen of the AnnotationTool and select the <span style="color:#63a31f">Create new Calibration</span> menu item.
Like before let's first go through the options in the <span style="color:#63a31f">General</span> section.
- **Calibration Set Name** is the name of the set of calibration parameters you're going to create.
- **Calibration Set Savepath** is the directory in which your new calibration parameters will be saved.
- **Separate Recordings for Intrinsics** can be set to no if you want to use your extrinsic recordings for intrinsics calibration. This is not recommended, see the manual for details.
- **Intrinsics Folder Path** is the directory that contains all the recordings for intrinsic calibration (you will find it inside the downloaded 'Calibration_Example' directory).  
- **Extrinsics Folder Path** is the directory that contains all the recordings for extrinsics calibration (you will find it inside the downloaded 'Calibration_Example' directory).

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
