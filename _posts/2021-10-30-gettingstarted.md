---
title: Getting started with JARVIS
author: Timo Hueser
date: 2021-10-28
layout: post
---

<style>
input[type='checkbox'] {
  display: none;
}

.wrap-collabsible {
  margin: 1.2rem 0;
}

.lbl-toggle {
  display: block;
  font-weight: bold;
  font-family: monospace;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem;
  color: #DDD;
  background: #2064a4ff;
  cursor: pointer;
  border-radius: 7px;
  transition: all 0.25s ease-out;
}

.lbl-toggle:hover {
  color: #FFF;
}
.lbl-toggle::before {
  content: ' ';
  display: inline-block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);
  transition: transform .2s ease-out;
}

.toggle:checked+.lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.collapsible-content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 350px;
}

.toggle:checked+.lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.collapsible-content .content-inner {
  background: #2064a450;
  border-bottom: 1px solid #2064a450;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: .5rem 1rem;
}

.collapsible-content p {
  margin-bottom: 0;
}

</style>

<center>
<span style="color:#63a31f;font-size:18px"><b>This Guide is very much work in progress!</b></span><br>
</center>

<!-- <center>
<span style="color:#63a31f;font-size:18px"><b>This Guide is also available as a series of videos on Youtube!</b></span><br>
<iframe width="336" height="189" src="https://www.youtube.com/embed/videoseries?list=PLHRdrn7aySLfxchhU8X_aTkcDVRMlwvPP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center> -->

Welcome to our Getting Started Guide! This guide will teach you how to set up the three different parts of our toolbox and how to work with our example data. This will help you get an idea of all the steps required to build and use a 3D markerless motion capture setup. After working through this guide you will be ready to work through our [Manual](/jarvis-docs/2021-10-29-manual.html) and learn all the things neccessary to build you own motion capture system from scratch.\
Note that this Guide is somewhat back to front. You will learn how to work with annotated data before we show you how to actually annotate it. We are not doing that to confuse you but because it helps to get a feel for what you are trying to achieve before you spend hours annotating images.

<hr style="border:2px solid gray">
## Exploring the Provided Examples
Let's start by playing around with our provided example so you can familiarize with our software and get a better feel for the task and the workflow.\
The example data we're working with in this tutorial are recordings of one of our monkeys - his name is Ralph - performing a simple grasping task in our 12 camera setup. Your task is to track his hand while he is enjoying a variety of fruits we hand him.
This tutorial has 4 steps:
1. Installing our [Pytorch Toolbox](https://www.lensation.de/calculator.html) and downloading the example recordings.
2. Visualizing the provided annotations, both in 2D and 3D.
3. Training the entire network stack.
4. Using your freshly trained network to track Ralph's hand in the example recording.

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

With that out of the way the only thing left to do is downloading the example recordings by clicking [here](). To make everything work right out of the box you should put the 'Example Recordings' folder into your main JARVIS-HybridNet directory.\
\
:tada: Congratulations, you are all set up now! To launch our handy streamlit GUI interface just open a terminal, activate the conda environment by running `conda activate jarvis` and type `jarvis launch`.


### 2. Visualizing the Example Dataset
Before we dive into training JARVIS to track anything it is always a good idea to have a look at the dataset your are using, both in 2D and in 3D.\
To do this first launch the JARVIS streamlit dashboard as described above. Once the GUI pops up in your browser you can select the Example_Project from the drop-down menu and then navigate to the visualization menu.

<img width="100%" src="docs/assets/gifs/dataset_vis.gif">

As you can see there are a bunch of option for visualizing both your predictions and your datasets. You can see how that looks like above, but feel free to play around with it a bit to familiarize yourself with the data we are working with. Once you start working with your own data, checking your dataset before training is really important to ensure there was no problem when creating it and your network will get the input you expect it to get.


### 3. Training the Entire Network
Now that you know what our data looks like it is time to train the network stack. Thankfully this is really easy, all you need to do is to navigate to the *Train Full* menu and press train as shown below. If everything works correctly you should see two progress bars as well as a plot showing the training progress appear. Depending on your GPU training might take anywhere between an hour and a day, so a bit of patience is required at this point. If you don't want to wait you can also continue with our pretrained weights of course.\

<div class="wrap-collabsible">
  <input id="collapsible" class="toggle" type="checkbox">
  <label for="collapsible" class="lbl-toggle">More Info on Network Training</label>
  <div class="collapsible-content">
    <div class="content-inner">
      <p>
        QUnit is by calling one of the object that are embedded in JavaScript, and faster JavaScript program could also used with
        its elegant, well documented, and functional programming using JS, HTML pages Modernizr is a popular browsers without
        plug-ins. Test-Driven Development.
      </p>
    </div>
  </div>
</div>
