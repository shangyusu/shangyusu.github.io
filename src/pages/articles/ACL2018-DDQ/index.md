---
title: "Deep Dyna-Q: Integrating Planning for Task-Completion Dialogue Policy Learning"
date: "2018-02-10T22:40:32.169Z"
layout: post
draft: false
path: "/posts/acl2018-ddq/"
category: "RL"
conference: "ACL 2018"
tags:
  - "Dialogue"
  - "Dialogue Policy"
  - "Reinforcement Learning"
description: "Baolin Peng, Xiujun Li, Jianfeng Gao, Jingjing Liu, Kam-Fai Wong, and Shang-Yu Su"
---

<b>This paper is published in Proceedings of The 56th Annual Meeting of the Association for Computational Linguistics (ACL 2018).</b>

Full paper:
<a href="./acl-2018-deep.pdf" target="_blank">Here</a>,
<a href="https://arxiv.org/abs/1801.06176" target="_blank">arXiv</a>


Code: 
<a href="https://github.com/MiuLab/DDQ" target="_blank">GitHub</a>

Cite the paper:
```
@article{peng2018integrating,
  title={Integrating planning for task-completion dialogue policy learning},
  author={Peng, Baolin and Li, Xiujun and Gao, Jianfeng and Liu, Jingjing and Wong, Kam-Fai and Su, Shang-Yu},
  journal={arXiv preprint arXiv:1801.06176},
  year={2018}
}
```
Training a task-completion dialogue agent via reinforcement learning (RL) is costly because it requires many interactions with real users. One common alternative is to use a user simulator. However, a user simulator usually lacks the language complexity of human interlocutors and the biases in its design may tend to degrade the agent. To address these issues, we present Deep Dyna-Q, which to our knowledge is the first deep RL framework that integrates planning for task-completion dialogue policy learning. We incorporate into the dialogue agent a model of the environment, referred to as the world model, to mimic real user response and generate simulated experience. During dialogue policy learning, the world model is constantly updated with real user experience to approach real user behavior, and in turn, the dialogue agent is optimized using both real experience and simulated experience. The effectiveness of our approach is demonstrated on a movie-ticket booking task in both simulated and human-in-the-loop settings.
