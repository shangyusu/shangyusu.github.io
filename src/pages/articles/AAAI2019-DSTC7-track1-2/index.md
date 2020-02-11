---
title: "Learning Multi-Level Information for Dialogue Response Selection by Highway Recurrent Transformer"
date: "2018-12-5T22:40:32.169Z"
layout: post
draft: false
path: "/posts/aaai2019-dstc7-hrt/"
category: "Dialogue"
conference: "DSTC7/Computer Speech and Language 2020"
tags:
  - "Dialogue"
  - "Response Selection"
description: "Ting-Rui Chiang, Chao-Wei Huang, Shang-Yu Su, and Yun-Nung Chen"
---

<b>This paper is published in the 7th Dialog System Technology Challenge (DSTC7) in the Proceedings of Thirty-Third AAAI Conference on Artificial Intelligence (AAAI 2019 - DSTC7).</b>

<b>NOTE: Also published in Computer Speech and Language (Journal, 2020)</b>

Full paper:
<a href="./AAAI_2019___DSTC_Track_1_2.pdf" target="_blank">Here</a>


With the increasing research interest in dialogue response generation, there is an emerging branch formulating this task as selecting next sentences, where given the partial dialogue contexts, the goal is to determine the most probable next sentence.
Following the recent success of the Transformer model, this paper proposes (1) a new variant of attention mechanism based on multi-head attention, called highway attention, and (2) a recurrent model based on transformer and the proposed highway attention, so-called Highway Recurrent Transformer.
Experiments on the response selection task in the seventh Dialog System Technology Challenge (DSTC7) show the capability of the proposed model of modeling both utterance-level and dialogue-level information; the effectiveness of each module is further analyzed as well.