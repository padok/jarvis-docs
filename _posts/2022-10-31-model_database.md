---
title: Model Database
author: Timo Hueser
date: 2021-10-29
layout: post
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

.button {
  border: none;
  color: #fffffa;
  padding: 5px 10px 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  display: inline-block;
  width: auto;
  float: center;
  width:100%;
  background-color: #63a31f;
  align: center;
}

.button_green {
  background-color: #63a31f;
}

.button_blue {
  background-color: #2064a4ff;
}

</style>

Welcome to our Model Database! Here you will find all of the pretrained HybridNet Models currently available for download.\
All the models here are officially supported and we only list models that achieve a level of accuracy comparable to the one we achieve in our paper here.
Please note that these models are to be used for **pretraining only** and you still need to train the network on a dataset created for your specific setup.

<div class="flex_align">
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
      <tr>
        <th>Dataset Size</th>
        <th>1.5 GB</th>
      </tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_green">Download Models</button>
    </form>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_blue">Download Dataset</button>
    </form>
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
      <tr>
        <th>Dataset Size</th>
        <th>1.5 GB</th>
      </tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_green">Download Models</button>
    </form>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_blue">Download Dataset</button>
    </form>
    </div>
</div>

<br>

<div class="flex_align">
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Rat Pose</b></span><br>
    <img width="100%" src="docs/assets/gifs/Rat.gif">
    <table>
      <tr>
        <th>Annotated Frames</th>
        <th>2000</th>
      </tr>
      <tr>
        <th>Number of subjects</th>
        <th>1</th>
      </tr>
      <tr>
        <th>Dataset Size</th>
        <th>1.5 GB</th>
      </tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button">Download Models</button>
    </form>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_blue">Download Dataset</button>
    </form>
    </div>
		<br>
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Human Pose</b></span><br>
    <img width="100%" src="docs/assets/gifs/Dancer.gif">
    <table>
      <tr>
        <th>Annotated Frames</th>
        <th>1500</th>
      </tr>
      <tr>
        <th>Number of subjects</th>
        <th>1</th>
      </tr>
      <tr>
        <th>Dataset Size</th>
        <th>1.5 GB</th>
      </tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button">Download Models</button>
    </form>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_blue">Download Dataset</button>
    </form>
    </div>
</div>

<br>


Additionally we provide models pretrained on the 1.5M image image-classification dataset EcoSet as well as the MPII human pose dataset. Those can be used as a starting point when training on a task different to those listed above.

<div class="flex_align">
    <div class="frame" align="center">
    <span style="font-size:18px"><b>EcoSet Image Classification</b></span><br>
    <img width="100%" src="docs/assets/gifs/Rat.gif">
    <table>
      <tr>
        <th>Number Images</th>
        <th>1.5M</th>
      </tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button">Download Models</button>
    </form>
    </div>
		<br>
    <div class="frame" align="center">
    <span style="font-size:18px"><b>MPII Human Pose</b></span><br>
    <img width="100%" src="docs/assets/mpii.png">
    <table>
      <tr>
        <th>Number Images</th>
        <th>18000</th>
      </tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button">Download Models</button>
    </form>
    </div>
</div>
