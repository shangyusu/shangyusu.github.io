webpackJsonp([0x71d33ca8efbd],{474:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Shang-Yu Su",subtitle:"Researcher of Natural Language Processing.",copyright:"© All rights reserved.",author:{name:"Shang-Yu Su",twitter:"#"},disqusShortname:"",url:"https://www.shangyusu.com"}},markdownRemark:{id:"/Users/ShangYu/Desktop/github/shangyusu.github.io/src/pages/articles/NAACL2018-NLG/index.md absPath of file >>> MarkdownRemark",html:'<p><b>This paper is published in Proceedings of The 16th Annual Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (NAACL-HLT 2018).</b></p>\n<p>Full paper:\n<a href="/naacl-hlt-2018-nlg-1a01ffc4d8392caed4366ed051fc5565.pdf" target="_blank">Here</a>,\n<a href="https://arxiv.org/abs/1808.02747" target="_blank">arXiv</a></p>\n<p>Code:\n<a href="https://github.com/MiuLab/HNLG" target="_blank">GitHub</a></p>\n<p>Cite the paper:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">@inproceedings{su2018natural,\n  title={Natural Language Generation by Hierarchical Decoding with Linguistic Patterns},\n    author={Shang-Yu Su, Kai-Ling Lo, Yi-Ting Yeh, and Yun-Nung Chen},\n    booktitle={Proceedings of The 16th Annual Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies},\n    year={2018}\n}</code></pre>\n      </div>\n<p>Natural language generation (NLG) is a critical component in spoken dialogue systems.\nClassic NLG can be divided into two phases: </p>\n<ul>\n<li>sentence planning: deciding on the overall sentence structure, </li>\n<li>surface realization: determining specific word forms and flattening the sentence structure into a string. </li>\n</ul>\n<p>Many simple NLG models are based on recurrent neural networks (RNN) and sequence-to-sequence (seq2seq) model, which basically contains a encoder-decoder structure; these NLG models generate sentences from scratch by jointly optimizing sentence planning and surface realization using a simple cross entropy loss training criterion.</p>\n<p>However, the simple encoder-decoder architecture usually suffers from generating complex and long sentences, because the decoder has to learn all grammar and diction knowledge.</p>\n<p>This paper introduces a hierarchical decoding NLG model based on linguistic patterns in different levels, and shows that the proposed method outperforms the traditional one with a smaller model size.\nFurthermore, the design of the hierarchical decoding is flexible and easily-extendible in various NLG systems (The source code is available at <a href="https://github.com/MiuLab/HNLG">https://github.com/MiuLab/HNLG</a>).</p>',fields:{tagSlugs:["/tags/nlg/","/tags/hierarchical-decoding/","/tags/seq-2-seq/"]},frontmatter:{title:"Natural Language Generation by Hierarchical Decoding with Linguistic Patterns",tags:["NLG","Hierarchical Decoding","Seq2Seq"],date:"2018-02-02T22:40:32.169Z",description:"Shang-Yu Su*, Kai-Ling Lo*, Yi-Ting Yeh, and Yun-Nung Chen (co-first author)",conference:"NAACL 2018"}}},pathContext:{slug:"/publications/naacl2018-nlg/"}}}});
//# sourceMappingURL=path---publications-naacl-2018-nlg-d8b153c36740929d2910.js.map