---
title: "Compound Variational Auto-Encoder"
date: "2019-02-6T22:40:32.169Z"
layout: post
draft: false
path: "/publications/icassp2019-comvae/"
category: "DL"
conference: "ICASSP2019"
tags:
  - "VAE"
description: "Shang-Yu Su, Shan-Wei Lin, and Yun-Nung Chen"
---

<b>This paper is published in the in Proceedings of The 44th IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP 2019), Brighton, U.K., May 12-17, 2019. IEEE.</b>


Full paper:
<a href="./ICASSP_ComVAE.pdf" target="_blank">Here</a>


Amortized variational inference (AVI) enables efficient training of deep generative models to scale to large datasets. The quality of the approximate inference is determined by various reasons, such as the ability of producing proper variational parameters for each datapoint in the recognition network and whether the variational distribution matches the true posterior, etc.
This paper focuses on the inference sub-optimality of variational auto-encoders (VAE), where the goal is to reduce the difference caused by amortizing the variational distribution parameters over the entire training set instead of optimizing for each training example individually, which is also known as the amortization gap. 
This paper extends Bayesian inference in VAE from the latent level to both latent and weight levels by adopting Bayesian neural networks (BNN) in the encoder, so that each datapoint obtains its own distribution for better modeling.
The hybrid design in the proposed compound VAE is empirically demonstrated to be capable of mitigating the amortization gap.
