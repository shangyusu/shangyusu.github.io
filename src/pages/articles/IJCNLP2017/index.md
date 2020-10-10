---
title: Speaker Role Contextual Modeling for Language Understanding and Dialogue Policy Learning
date: "2017-08-19T22:40:32.169Z"
layout: post
draft: false
path: "/publications/humane-typography-in-the-digital-age/"
category: "NLU"
conference: "IJCNLP 2017"
tags:
  - "Dialogue"
  - "NLU"
description: "Shang-Yu Su*, Ta-Chung Chi*, Po-Chun Chen*, and Yun-Nung Chen (co-first author)"
---

<b>This paper is published in Proceedings of The 8th International Joint Conference on Natural Language Processing (IJCNLP 2017).</b>

Full paper:
<a href="https://arxiv.org/abs/1710.00164" target="_blank">arXiv</a>,
<a href="https://aclweb.org/anthology/I17-2028" target="_blank">ACL</a>

Code: 
<a href="https://github.com/MiuLab/Spk-Dialogue" target="_blank">GitHub</a>

Cite the paper:
```
@inproceedings{chi2017speaker,
  author    = {Ta-Chung Chi and Po-Chun Chen and Shang-Yu Su and Yun-Nung Chen},
  title	    = {Speaker Role Contextual Modeling for Language Understanding and Dialogue Policy Learning},
  booktitle = {Proceedings of IJCNLP},
  year	    = {2017}
}
```

Language understanding (LU) and dialogue policy learning are two essential components in conversational systems.
Human-human dialogues are not well-controlled and often random and unpredictable due to their own goals and speaking habits.

This paper proposes a role-based contextual model to consider different speaker roles independently based on the various speaking patterns in the multi-turn dialogues.
The experiments on the benchmark dataset show that the proposed role-based model successfully learns role-specific behavioral patterns for contextual encoding and then significantly improves language understanding and dialogue policy learning tasks (The source code is available at: https://github.com/MiuLab/Spk-Dialogue).
