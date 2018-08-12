---
title: "Discriminative Deep Dyna-Q: Robust Planning for Dialogue Policy Learning"
date: "2018-08-13T22:40:32.169Z"
layout: post
draft: false
path: "/posts/emnlp2018-d3q/"
category: "RL"
conference: "EMNLP 2018"
tags:
  - "Dialogue"
  - "Dialogue Policy"
  - "Reinforcement Learning"
description: "Shang-Yu Su, Xiujun Li, Jianfeng Gao, Jingjing Liu and Yun-Nung Chen"
---


This paper presents a Discriminative Deep Dyna-Q (D3Q) approach to improving the effectiveness and robustness of DDQ, a recently proposed framework that extends the Dyna-Q algorithm to integrate planning for task-completion dialogue policy learning. To obviate DDQ's high dependency on the quality of simulated experiences, we incorporate an RNN-based discriminator in D3Q to differentiate simulated experience from real user experience in order to control the quality of training data. Experiments show that D3Q significantly outperforms DDQ by controlling the quality of simulated experience used for planning. The effectiveness and robustness of D3Q is further demonstrated in a domain extension setting, where the agent's capability of adapting to a changing environment is tested.
