---
title: "How Time Matters: Learning Time-Decay Attention for Contextual Spoken Language Understanding in Dialogues"
date: "2018-02-03T22:40:32.169Z"
layout: post
draft: false
path: "/posts/naacl2018-nlu/"
category: "NLU"
conference: "NAACL 2018"
tags:
  - "Dialogue"
  - "NLU"
  - "Attention"
description: "Shang-Yu Su, Pei-Chieh Yuan, and Yun-Nung Chen"
---

Full paper:
<a href="./naacl-hlt-2018-nlu-camera-ready.pdf" target="_blank">Here</a>

Code: 
<a href="https://github.com/MiuLab/Time-Decay-SLU" target="_blank">GitHub</a>

Cite the paper:
```
@inproceedings{su2018how,
  title={How time matters: Learning Time-Decay Attention for Contextual Spoken Language Understanding in Dialogues},
    author={Shang-Yu Su, Pei-Chieh Yuan, and Yun-Nung Chen},
    booktitle={Proceedings of The 16th Annual Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies},
    year={2018}
}
```
Spoken language understanding (SLU) is an essential component in conversational systems. Most SLU components treats each utterance independently, and then the following components aggregate the multi-turn information in the separate phases.
In order to avoid error propagation and effectively utilize contexts, prior work leveraged history for contextual SLU.

However, most previous models only paid attention to the related content in history utterances, ignoring their temporal information.
In the dialogues, it is intuitive that the most recent utterances are more important than the least recent ones, in other words, time-aware attention should be in a decaying manner.

Therefore, this paper designs and investigates various types of time-decay attention on the sentence-level and speaker-level, and further proposes a flexible universal time-decay attention mechanism. 
The experiments on the benchmark Dialogue State Tracking Challenge (DSTC4) dataset show that the proposed time-decay attention mechanisms significantly improve the state-of-the-art model for contextual understanding performance (The source code is at: https://github.com/MiuLab/Time-Decay-SLU).
