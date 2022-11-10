---
title: "Exploiting the Duality between Language Understanding and Generation and Beyond"
date: "2021-10-19T22:40:32.169Z"
layout: post
draft: false
path: "/publications/phd-thesis/"
category: ""
conference: "PhD Thesis"
tags:
  - "Dialogue Systems"
  - "Natural Language Understanding"
  - "Natural Language Generation"
  - "Dual Learning"
description: "Shang-Yu Su"
---

<b>This thesis was recognized by <a href="https://www.aclclp.org.tw/grants_c.php" target="_blank">ACLCLP Best Thesis Award (2022)</a>.</b>

Resources:
<a href="./PhD_Thesis_Shang_Yu_Su_cover.pdf" target="_blank">full thesis</a>,
<a href="https://etds.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/ccd=6nzfZD/record?r1=1&h1=1" target="_blank">NDLTD</a>,
<a href="./defense_v1.0.pdf" target="_blank">slides</a>.


Many real­world artificial intelligence tasks come with a dual form; that is, we could
directly swap the input and the target of a task to formulate another task. Machine translation is a classic example, for example, translating from English to Chinese has a dual task
of translating from Chinese to English. Automatic speech recognition (ASR) and text­-to-speech (TTS) also have structural duality. Given a piece of informative context, question
answering and question generation are in dual form. The recent studies magnified the importance of the duality by boosting the performance of both tasks with the exploitation of the duality.

Natural language understanding (NLU) and natural language generation (NLG) are
both critical research topics in the NLP and dialogue fields. The goal of natural language understanding is to extract the core semantic meaning from the given utterances, while
natural language generation is opposite, of which the goal is to construct corresponding
sentences based on the given semantics. However, the dual property between understanding and generation has been rarely explored.

This main goal of this dissertation is to investigate the structural duality between NLU
and NLG. In this thesis, we present five consecutive studies, each focuses on different
aspects of learning and data settings. First, we exploits the duality between NLU and
NLG and introduces it into the learning objective as the regularization term. Moreover,
expert knowledge is incorporated to design suitable approaches for estimating data distribution. Second, we further propose a joint learning framework, which provides flexibility of incorporating not only supervised but also unsupervised learning algorithms and enables the gradient to propagate through two modules seamlessly. Third, we study how to
enhance the joint framework by mutual information maximization. Fourth, since above
works exploit the duality in the training stage, hence we make a step forward to leverage
the duality in the inference stage. Lastly, we finetune the pretrained language models on
the two dual tasks and achieve the goal of solving two dual tasks in a single model. Each
work presents a new model and learning framework exploiting the duality in different
manners. Together, this dissertation explores a new research direction of exploiting the
duality between language understanding and generation.


