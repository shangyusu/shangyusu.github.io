---
title: "RAP-Net: Recurrent Attention Pooling Networks for Dialogue Response Selection"
date: "2018-12-4T22:40:32.169Z"
layout: post
draft: false
path: "/posts/aaai2019-dstc7-rapnet/"
category: "Dialogue"
conference: "DSTC7/Computer Speech and Language 2020"
tags:
  - "Dialogue"
  - "Response Selection"
description: "Chao-Wei Huang, Ting-Rui Chiang, Shang-Yu Su, and Yun-Nung Chen"
---

<b>This paper is published in the 7th Dialog System Technology Challenge (DSTC7) in the Proceedings of Thirty-Third AAAI Conference on Artificial Intelligence (AAAI 2019 - DSTC7).</b>

<b>NOTE: Also published in Computer Speech and Language (Journal, 2020)</b>

Full paper:
<a href="./AAAI_2019___DSTC_Track_1.pdf" target="_blank">Here</a>


The response selection has been an emerging research topic due to the growing interest in dialogue modeling, where the goal of the task is to select an appropriate response for continuing dialogues.
To further push the end-to-end dialogue model toward real-world scenarios, the seventh Dialog System Technology Challenge (DSTC7) proposed a challenge track based on real chatlog datasets.
The competition focuses on dialogue modeling with several advanced characteristics: (1) natural language diversity, (2) capability of precisely selecting a proper response from a large set of candidates or the scenario without any correct answer, and (3) knowledge grounding.
This paper introduces recurrent attention pooling networks (RAP-Net), a novel framework for response selection, which can well estimate the relevance between the dialogue contexts and the candidates.
The proposed RAP-Net is shown to be effective and can be generalize across different datasets and settings in the DSTC7 experiments.
In the future, the proposed model can be evaluated on other retrieval-based tasks to test the model capability of generalization.
