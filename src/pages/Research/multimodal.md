---
title: Multimodal Language Models
---

# Multimodal Language Models

Pre-trained language models are increasingly applied in ways that are agnostic to targeted downstream tasks. This usage has
led to a proliferation of large language models trained on enormous amounts of data. For example, the recent Megatron-Turing NLG 530B model was trained on the Pile, which includes 800GB+ of text, and other large language models utilize large portions of the 200TB+ common crawl data. These large data sets include impressive amounts of text, but all languages are
not represented equally (or at all) in that text. The reality is that only a negligible fraction of the 7000+
currently spoken languages and hundreds of signed languages have sufficient text corpora to train state-of-the-art language models. This data scarcity results in systematic inequalities in the performance of NLP tasks across the world’s languages.

Local language communities that are working to develop and preserve their languages are producing diverse sets of data beyond pure text. The Bloom Library project, for example, is being used by local language communities to create and translate
"shell" or "template" books into many languages. However, Bloom allows users to do more than just translate text. Users are also recording audio tracks and sign language videos, which has resulted in 1600+ oral translations. 

Diverse data sources (like Bloom) are effectively unusable by traditional text-based NLP techniques. In the light of data scarcity on these languages, they offer significant untapped potential to unlock improved NLP technology, if text data can be leveraged along with audio, image and video data. Furthermore, flexible multi-modal technology such as this will make it easier to include diverse people and communities such as those described above within the NLP technology development process - audio-based technology reducing the need for literacy, for example.

SIL is working with the University of Dayton and others on multi-modal approaches to train both language models and models for downstream NLP tasks using whatever text and/or audio data might be available in a language (or even in a related language).

## Publications

- Colin Leong and Daniel Whitenack. 2022. **Phone-ing it in: Towards Flexible Multi-Modal Language Model Training by Phonetic Representations of Data.** In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 5306–5315, Dublin, Ireland. Association for Computational Linguistics. [link](https://aclanthology.org/2022.acl-long.364/)
- Colin Leong, Joshua Nemecek, Jacob Mansdorfer, Anna Filighera, Abraham Owodunni, and Daniel Whitenack. 2022. **Bloom Library: Multimodal Datasets in 300+ Languages for a Variety of Downstream Tasks.** In Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pages 8608–8621, Abu Dhabi, United Arab Emirates. Association for Computational Linguistics. [link](https://aclanthology.org/2022.emnlp-main.590/)