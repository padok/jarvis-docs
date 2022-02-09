---
title: Getting started with JARVIS
author: Timo Hueser
date: 2021-10-28
layout: post
---

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
## Exploring the provided Examples
Let's start by playing around with our provided example so you can familiarize with our software and get a better feel for the task and the workflow.\
The example data we're working with in this tutorial are recordings of one of our monkeys - his name is Ralph - performing a simple grasping task in our 12 camera setup. Your task is to track his hand while he is enjoying a variety of fruits we handed him.
This tutorial has 4 steps:
1. Installing our [Pytorch Toolbox](https://www.lensation.de/calculator.html) and downloading the example recordings.
2. Visualizing the provided Annotations, both in 2D and 3D.
3. Training the entire Network stack.
4. Using our freshly trained network to track Ralph's hand in the example recording.

#### Installing the Toolbox and downloading the data
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


#### Visualizing the example dataset
Before we dive into training JARVIS to track anything it is always a good idea to have a look at the dataset, both in 2D and in 3D. To do this first launch the JARVIS streamlit dashboard as described above. Once the GUI pops up in your browser you can select the Example_Project from the dropdown menu and then navigate to the visualization menu.\
As you can see there are a bunch of option for visualizing both you predictions and your datasets. For now we only care about the dataset visualization tab. If everything is working correctly you should now be able to visualize all the samples in the dataset. You can see how that looks like below, but feel free to play around with it a bit to familiarize yourself with the data we are working with. Once you start working with your own data, checking your dataset before training is really important to ensure there was no problem when creating it and your network will get the input you expect it to get.
