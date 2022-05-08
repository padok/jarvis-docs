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

.button_gray {
  background-color: #8f8f8f;
}

.button_blue {
  background-color: #2064a4ff;
}

.button_purple {
  background-color: #6420a4;
}

</style>

Welcome to our Model Database! Here you will find all of the pretrained HybridNet Models currently available for download.\
All the models here are officially supported and we only list models that achieve a high level of accuracy.
Please note that these models should be used for **pretraining only** and you still need to train the network on a dataset created for your specific setup.<br>
Along with each set of models we provide the trainingset that the model was trained with as well as set of recordings for you to validate the models performance with.

<div class="flex_align">
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
        <th>0.7 GB</th>
      </tr>
			<tr>
				<th>Recordings Size</th>
				<th>1.3 GB</th>
			</tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_green">Download Models</button>
    </form>
    <form method="get" action="https://zenodo.org/record/6515085/files/Example_Dataset.zip?download=1">
    <button class="button button_blue">Download Trainingset</button>
    </form>
		<form method="get" action="https://zenodo.org/record/6515085/files/Example_Recording.zip?download=1">
		<button class="button button_purple">Download Recording</button>
		</form>
    </div>
		<br>
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
			<tr>
				<th>Recordings Size</th>
				<th>1.3 GB</th>
			</tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_green">Download Models</button>
    </form>
    <button class="button button_gray">Coming Soon</button>
		<button class="button button_gray">Coming Soon</button>
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
			<tr>
				<th>Recordings Size</th>
				<th>1.3 GB</th>
			</tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button">Download Models</button>
    </form>
    <button class="button button_gray">Coming Soon</button>
		<button class="button button_gray">Coming Soon</button>
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
      <tr>
        <th>Dataset Size</th>
        <th>1.5 GB</th>
      </tr>
			<tr>
				<th>Recordings Size</th>
				<th>1.3 GB</th>
			</tr>
    </table>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button">Download Models</button>
    </form>
    <button class="button button_gray">Coming Soon</button>
		<button class="button button_gray">Coming Soon</button>
    </div>
</div>

<br>
