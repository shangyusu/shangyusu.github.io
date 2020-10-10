---
title: "Towards Unsupervised Language Understanding and Generation by Joint Dual Learning"
date: "2020-04-03T22:40:32.169Z"
layout: post
draft: false
path: "/publications/acl2020-jdl/"
category: "NLU+NLG"
conference: "ACL2020"
tags:
  - "NLU"
  - "NLG"
  - "Dialogue"
description: "Shang-Yu Su, Chao-Wei Huang, and Yun-Nung Chen"
---

Full paper:
<a href="./acl2020.pdf" target="_blank">Here</a>,
<a href="https://arxiv.org/abs/2004.14710" target="_blank">arXiv</a>

<b>This paper is published in Proceedings of The 58th Annual Meeting of the Association for Computational Linguistics (ACL 2020).</b>

In modular dialogue systems, natural language understanding (NLU) and natural language generation (NLG) are two critical components, where NLU extracts the semantics from the given texts and NLG is to construct corresponding natural language sentences based on the input semantic representations.
However, the dual property between understanding and generation has been rarely explored.
The prior work is the first attempt that utilized the duality between NLU and NLG to improve the performance via a dual supervised learning framework.
However, the prior work still learned both components in *supervised* manner, instead, this paper introduces a general learning framework to effectively exploit such duality, providing flexibility of incorporating both *supervised* and *unsupervised* learning algorithms to train language understanding and generation models in a joint fashion. 
The benchmark experiments demonstrate that the proposed approach is capable of boosting the performance of both NLU and NLG.