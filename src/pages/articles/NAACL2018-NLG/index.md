---
title: "Natural Language Generation by Hierarchical Decoding with Linguistic Patterns"
date: "2018-02-02T22:40:32.169Z"
layout: post
draft: false
path: "/publications/naacl2018-nlg/"
category: "NLG"
conference: "NAACL 2018"
tags:
  - "NLG"
  - "Hierarchical Decoding"
  - "Seq2Seq"
description: "Shang-Yu Su*, Kai-Ling Lo*, Yi-Ting Yeh, and Yun-Nung Chen (co-first author)"
---

<b>This paper is published in Proceedings of The 16th Annual Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (NAACL-HLT 2018).</b>


Full paper:
<a href="./naacl-hlt-2018-nlg.pdf" target="_blank">Here</a>,
<a href="https://arxiv.org/abs/1808.02747" target="_blank">arXiv</a>

Code: 
<a href="https://github.com/MiuLab/HNLG" target="_blank">GitHub</a>

Cite the paper:
```
@inproceedings{su2018natural,
  title={Natural Language Generation by Hierarchical Decoding with Linguistic Patterns},
    author={Shang-Yu Su, Kai-Ling Lo, Yi-Ting Yeh, and Yun-Nung Chen},
    booktitle={Proceedings of The 16th Annual Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies},
    year={2018}
}
```
Natural language generation (NLG) is a critical component in spoken dialogue systems. 
Classic NLG can be divided into two phases: 
* sentence planning: deciding on the overall sentence structure, 
* surface realization: determining specific word forms and flattening the sentence structure into a string. 

Many simple NLG models are based on recurrent neural networks (RNN) and sequence-to-sequence (seq2seq) model, which basically contains a encoder-decoder structure; these NLG models generate sentences from scratch by jointly optimizing sentence planning and surface realization using a simple cross entropy loss training criterion.

However, the simple encoder-decoder architecture usually suffers from generating complex and long sentences, because the decoder has to learn all grammar and diction knowledge.

This paper introduces a hierarchical decoding NLG model based on linguistic patterns in different levels, and shows that the proposed method outperforms the traditional one with a smaller model size.
Furthermore, the design of the hierarchical decoding is flexible and easily-extendible in various NLG systems (The source code is available at https://github.com/MiuLab/HNLG).

