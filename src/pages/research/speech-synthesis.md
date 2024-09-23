---
title: Speech Synthesis
---

# Speech Synthesis/ Text-to-Speech Research

The SIL AI team is creating scalable and reproducible data pipelines in AWS that take (as input) audio and text data and output trained and evaluated speech synthesis models. The team is working towards using this pipeline to create speech synthesis models in 100's of new languages.

## Background/ Impact

**FACT #1** - Speech synthesis functionality is currently deployed in the following widely used products/systems (among a variety of other products/systems):
- Virtual assistant products like Alexa, Siri, etc.,
- Call center systems, and
- Accessibility and dictation products like Dragon.

**FACT #2** - Large western companies and rapidly growing majority world companies are increasingly interested in operating in emerging markets (like India, Africa, South East Asia), but, when entering or operating in these markets, companies are challenged to deal with linguistic diversity (i.e., many languages) and the language support of the systems they rely on (e.g., for speech synthesis). For example, companies operating in Indonesia are faced with the reality that the population of Indonesia speaks 700+ languages.

**FACT #3** - Current available speech synthesis offerings (e.g., from GCP or AWS) support a negligible number of the world's 7100+ languages. Thus, the majority of language communities around the world are marginalized when it comes to being supported and flourishing in the digital sphere with their languages. 

**FACT #4** - SIL Global and its partners have recorded and curated high quality audio in 3600+ languages in the form of stories, audio books, audio Bibles, and language documentation. This audio is more linguistically diverse than any other audio datasets in the world, and a good bit of it can be used to train new speech synthesis models.

**CONCLUSIONS**: 
- There is an opportunity for SIL to expand speech synthesis functionality to a large number of new languages, 
- Expanded language support in speech synthesis will help language communities around the world flourish in the digital sphere and prevent them from being further marginalized,
- SIL is uniquely positioned to create speech synthesis models in 100's of new languages to meet this challenge and expand possibilities for digital flourishing.

## BibleTTS

SIL AI worked with researchers from [Masakhane](https://www.masakhane.io/) and [Coqui](https://coqui.ai/) to create [BibleTTS](https://masakhane-io.github.io/bibleTTS/). This corpus is a large high-quality open Text-to-Speech dataset with up to 80 hours of single speaker, studio quality 48kHz recordings for each language. We release aligned speech and text for six languages spoken in Sub-Saharan Africa, with unaligned data available for four additional languages, derived from the Biblica [open.bible](https://open.bible/) project. The data is released under a commercial-friendly CC-BY-SA license.

## Publications

- Meyer, J., Adelani, D., Casanova, E., Öktem, A., Whitenack, D., Weber, J., KABONGO KABENAMUALU, S., Salesky, E., Orife, I., Leong, C., Ogayo, P., Chinenye Emezue, C., Mukiibi, J., Osei, S., AGBOLO, A., Akinode, V., Opoku, B., Samuel, O., Alabi, J., Muhammad, S.H. (2022) **BibleTTS: a large, high-fidelity, multilingual, and uniquely African speech corpus.** Proc. Interspeech 2022, 2383-2387, doi: 10.21437/Interspeech.2022-10850 [link](https://www.isca-speech.org/archive/pdfs/interspeech_2022/meyer22c_interspeech.pdf)
- Colin Leong, Joshua Nemecek, Jacob Mansdorfer, Anna Filighera, Abraham Owodunni, and Daniel Whitenack. 2022. **Bloom Library: Multimodal Datasets in 300+ Languages for a Variety of Downstream Tasks.** In Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pages 8608–8621, Abu Dhabi, United Arab Emirates. Association for Computational Linguistics. [link](https://aclanthology.org/2022.emnlp-main.590/)