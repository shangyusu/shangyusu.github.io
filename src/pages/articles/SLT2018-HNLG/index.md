---
title: "Investigating Linguistic Pattern Ordering in Hierarchical Natural Language Generation"
date: "2018-09-4T22:40:32.169Z"
layout: post
draft: false
path: "/publications/slt2018-hnlg/"
category: "NLG"
conference: "SLT 2018"
tags:
  - "NLG"
  - "Hierarchical Decoding"
  - "Seq2Seq"
description: "Shang-Yu Su, and Yun-Nung Chen"
---

<b>This paper is published in Proceedings of 7th IEEE Workshop on Spoken Language Technology (SLT 2018).</b>

Full paper:
<a href="./slt-2018-hnlg.pdf" target="_blank">Here</a>,
<a href="https://arxiv.org/abs/1809.07629" target="_blank">arXiv</a>

Code: 
<a href="https://github.com/MiuLab/HNLG" target="_blank">GitHub</a>

Natural language generation (NLG) is a critical component in spoken dialogue system, which can be divided into two phases: (1) sentence planning: deciding the overall sentence structure, (2) surface realization: determining specific word forms and flattening the sentence structure into a string. 
With the rise of deep learning, most modern NLG models are based on a sequence-to-sequence (seq2seq) model, which basically contains an encoder-decoder structure; these NLG models generate sentences from scratch by jointly optimizing sentence planning and surface realization.
However, such simple encoder-decoder architecture usually fail to generate complex and long sentences, because the decoder has difficulty learning all grammar and diction knowledge well.
This paper introduces an NLG model with a hierarchical attentional decoder, where the hierarchy focuses on leveraging linguistic knowledge in a specific order. The experiments show that the proposed method significantly outperforms the traditional seq2seq model with a smaller model size, and the design of the hierarchical attentional decoder can be applied to various NLG systems.
Furthermore, different generation strategies based on linguistic patterns are investigated and analyzed in order to guide future NLG research work.
