---
layout: home
---


<style>

.flex_align {
	display: flex;
	flex-flow: no wrap;
	flex-direction: row;
}

@media all and (max-width: 500px) {
	.flex_align {
		display: flex;
		flex-flow: wrap;
		flex-direction: column;
	}
}

.frame {
  border: 4px solid #63a31f;
  padding: 10px 10px;
  border-radius: 10px;
  margin-right: 2.5%;
  margin-left: 2.5%;
	width = 30%;
}
</style>


![Alt Text](docs/assets/overview.svg)


JARVIS makes highly precise markerless 3D motion capture easy. All you need to get started is a multi camera recording setup and an idea of what you want to track.
Our Toolbox will assist you on every step along the way, from recording synchronised videos, to quickly and consistently annotating your data,
all the way to the final 3D pose predictions.\
If you are interested in setting up a 3D Motion Capture System or just want to learn more about our toolbox we strongly recommend having a look at our
[Getting Started Guide](/jarvis-docs/2021-10-28-gettingstarted.html) and our [Manual](/jarvis-docs/2021-10-29-manual.html). Here you'll find an overview of our workflow as well as tutorials to help you build a successful 3D tracking pipeline with JARVIS.

## Why JARVIS?
Markerlerss motion capture has become an essential data analysis tool in many fields of research, pioneered largely by [DeepLabCut](https://github.com/DeepLabCut/DeepLabCut) several years ago.
While there have been significant improvements to those methods both in terms of capabilities and usability, those advances mainly tackle single image based
2D tracking. Setting up a system for multi camera 3D motion capture on the other hand still remains very challenging and time consuming.\
JARVIS tries to change that by introducing an easy to use toolchain that was developed with highly precise 3D Tracking as the primary goal, not just an afterthought.\
Our System consists of three parts:
- The <span style="color:#63a31f">**Acquisition Tool**</span> allows you to record synchronized high resolution videos from multiple cameras at high frame rates thanks to GPU accelerated online compression. If you use one of the recommended cameras you can get your system setup and running with just a handful of clicks.
- The <span style="color:#63a31f">**Annotation Tool**</span> leverages the multi camera recordings by projecting your manual annotations on a subset of those cameras to the remaining ones, significantly reducing the amount of tedious manual annotations needed. It also provides easy-to-use interfaces for calibrating your cameras
  and creating datasets.
- The <span style="color:#63a31f">**HybridNet Pytorch Library**</span> is our state of the art 3D pose estimation architecture. The hybrid 2D/3D CNN architecture is faster to train and more precise than pure 3D CNNs and most importantly it can run on siginficantly smaller dataset sizes, saving you countless hours of mind numbing annotations while still achieving highly precise markerless motion capture - even in scenarios with heavy occlusion.

## Pretrained Models and Datasets
We offer pretrained models and datasets for a variety of different scenarios. Click here to see what's currently available. Please contact us if you want to contribute your own pretrained model for others to use!\
Below you can see the performance of our network trained on the available datasets:

<div class = "flex_align">
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Human Hand</b></span><br>
    <img width="100%" src="docs/assets/gifs/Human.gif">
    <table>
      <tr>
        <th>Annotated Frames</th>
        <th>10000</th>
      </tr>
      <tr>
        <th>Number of subjects</th>
        <th>4</th>
      </tr>
    </table>
    </div>
		<br>
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Monkey Hand</b></span><br>
    <img width="100%" src="docs/assets/gifs/Monkey.gif">
    <table>
      <tr>
        <th>Annotated Frames</th>
        <th>3000</th>
      </tr>
      <tr>
        <th>Number of subjects</th>
        <th>1</th>
      </tr>
    </table>
    </div>
</div>
<br>
<div class="flex_align">
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Rat Pose</b></span><br>
    <img width="100%" src="docs/assets//gifs/Rat.gif">
    <table>
      <tr>
        <th>Annotated Frames</th>
        <th>2000</th>
      </tr>
      <tr>
        <th>Number of subjects</th>
        <th>1</th>
      </tr>
    </table>
    </div>
		<br>
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Mouse Pose</b></span><br>
    <img width="100%" src="docs/assets/gifs/Mouse.gif">
    <table>
      <tr>
        <th>Annotated Frames</th>
        <th>3000</th>
      </tr>
      <tr>
        <th>Number of subjects</th>
        <th>3</th>
      </tr>
    </table>
    </div>
</div>

<br>

Our model outperforms the other currently available methods when trained on our human hand tracking dataset. Below you can see the performance of our toolbox compared to the well established markerless tracking toolbox [DeepLabCut](https://github.com/DeepLabCut/DeepLabCut) (DLC) and the recently released [Dannce](https://github.com/spoonsso/dannce) 3D tracking toolbox:  

![Alt Text](docs/assets/total_error.png)


## Supported Cameras

As mentioned before to be able to take full advantage of our Acquisition Tool without any modifications you'll have to use one of our supported cameras. The table below shows all currently supported camera models, we'll try to expand this list in the near future!

<table id="supported_cameras">
  <tr>
    <th>Company</th>
    <th>Model Name</th>
  </tr>
  <tr>
    <td>FLIR</td>
    <td>Chameleon</td>
  </tr>
  <tr>
    <td>FLIR</td>
    <td>Blackfly S</td>
  </tr>  <tr>
      <td>FLIR</td>
      <td>Grasshopper</td>
    </tr>
</table>

## News
* News about the project go here.
