---
title: Serval
---

# Serval / Scripture Forge

The next stage of Bible Translation needs to be dramatically deprofessionalized if the remaining Scriptures are to be translated. The challenge is in determining how we might involve many more passionate people in the work while still providing technical and subject matter expert support to a broadening base of workers engaged in translation. To do this, an integrated, AI-enabled platform is needed where they can do their work, utilize the latest technology and get access to the support needed. Serval will meet translation workers at their point of need and equip developers with a common framework to provide needed expertise and help.

Serval makes the jump from a collection of disparate AI and Natural Language Processing (NLP) tools to an integrated platform, where the platform consists of components along with reference UI integrations in [Scripture Forge](https://scriptureforge.org/). More specifically, the solution proposed brings together multiple AI and NLP technologies developed at SIL into a common API that enables incremental and batch machine translation (MT) and AI-enabled quality estimation (QE) for Bible content. 

## Components

The main Serval components/features are:
1. An open source REST API that enables the incremental machine translation, batch translation, and quality estimation functionality
2. Open source engines powering the REST API to enable incremental machine translation, batch translation, and quality estimation functionality for Bible translators
3. Integrations of the REST API functionality in the Scripture Forge offering/application such that incremental machine translation, batch translation, and quality estimation is surfaced in at least one place/way in the Scripture Forge user interface
4. Tutorials or other training materials that will help new users adopt an augmented translation process via the Scripture Forge integrations
5. Material on the tools.bible website pointing to and explaining the Scripture Forge integrations 
Initial hosting/deployment of the REST API (and initial engines) along with the enhanced/upgraded Scripture Forge UI

## Details

Details of each of the initial incremental machine translation, batch translation, and quality estimation functionalities is included below:
- **Incremental/ Online Machine Translation (MT)**: This functionality will allow an initial machine translation model to be updated incrementally (or “online”) as a translator draft, which is a form of “active” learning. Suggestions from this kind of machine translation can be used for granular translation suggestions within the drafting process. This functionality will initially use Statistical Machine Translation (SMT) technology, with particular relevance to related language adaptation projects. Later on in 2023 Neural Machine Translation (NMT) technology will come online as an option to power incremental MT. The incremental MT implementation will be relevant to forward translation.
- **Batch Machine Translation (MT)** - This functionality will allow users to translate large “batches” of draft material. Initially, the engine will use Neural Machine Translation (NMT) technology suited to generate whole back translation drafts. Currently, these batch processes are rather manual, but this project will operationalize them and introduce automation to make the process accessible to non-technical users.
- **Translation Quality Estimation (QE)** - This functionality will allow users to provide a draft translation as input and get various indications of the quality of the translation as output. Initially, the engine powering this functionality will use the techniques developed in the [Augmented Quality Assessment (AQuA) project](AQuA), which can provide numerical scores, flags, or notes to translators indicative of accuracy, naturalness, and clarity. 
