---
title: Model Database
author: Timo Hueser
date: 2021-10-29
layout: post
---

<style>
.frame {
  border: 4px solid #63a31f;
  padding: 10px 10px;
  border-radius: 10px;
  width = 40%;
  margin-right: 2.5%;
  margin-left: 2.5%;

}

.horizontal-center {
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
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

<figure class="half" style="display:flex">
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Human Hand</b></span><br>
    <img width="100%" src="docs/assets/monkey_hand.gif">
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
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Monkey Hand</b></span><br>
    <img width="100%" src="docs/assets/monkey_hand.gif">
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
</figure>

<br>

<figure class="half" style="display:flex">
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Human Pose</b></span><br>
    <img width="100%" src="docs/assets/monkey_hand.gif">
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
    <button class="button">Download Models</button>
    </form>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_blue">Download Dataset</button>
    </form>
    </div>
    <div class="frame" align="center">
    <span style="font-size:18px"><b>Mouse Pose</b></span><br>
    <img width="100%" src="docs/assets/monkey_hand.gif">
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
    <button class="button">Download Models</button>
    </form>
    <form method="get" action="docs/assets/Vortex-d_5.pth">
    <button class="button button_blue">Download Dataset</button>
    </form>
    </div>
</figure>
