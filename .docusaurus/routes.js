import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3fe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e00'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '876'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '4bd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '34c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '47a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b99'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a64'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '09b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'ffc'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'ffc'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'fc0'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '250'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '2e9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b2a'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'a34'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '889'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '638'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'da2'),
    exact: true
  },
  {
    path: '/contact_code',
    component: ComponentCreator('/contact_code', '044'),
    exact: true
  },
  {
    path: '/datasets/bloom',
    component: ComponentCreator('/datasets/bloom', '6df'),
    exact: true
  },
  {
    path: '/datasets/ebible',
    component: ComponentCreator('/datasets/ebible', 'b3a'),
    exact: true
  },
  {
    path: '/ethics',
    component: ComponentCreator('/ethics', '0e5'),
    exact: true
  },
  {
    path: '/mai24',
    component: ComponentCreator('/mai24', 'df7'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', '0c5'),
    exact: true
  },
  {
    path: '/projects/acts2',
    component: ComponentCreator('/projects/acts2', '6e3'),
    exact: true
  },
  {
    path: '/projects/AERO',
    component: ComponentCreator('/projects/AERO', 'd8a'),
    exact: true
  },
  {
    path: '/projects/AQuA',
    component: ComponentCreator('/projects/AQuA', '768'),
    exact: true
  },
  {
    path: '/projects/bible-tools',
    component: ComponentCreator('/projects/bible-tools', 'fee'),
    exact: true
  },
  {
    path: '/projects/chat',
    component: ComponentCreator('/projects/chat', '3b2'),
    exact: true
  },
  {
    path: '/projects/lynx',
    component: ComponentCreator('/projects/lynx', 'b47'),
    exact: true
  },
  {
    path: '/projects/scriptureforge',
    component: ComponentCreator('/projects/scriptureforge', 'ea6'),
    exact: true
  },
  {
    path: '/projects/serval',
    component: ComponentCreator('/projects/serval', '0b8'),
    exact: true
  },
  {
    path: '/rail',
    component: ComponentCreator('/rail', 'b72'),
    exact: true
  },
  {
    path: '/research/multimodal',
    component: ComponentCreator('/research/multimodal', '4fe'),
    exact: true
  },
  {
    path: '/research/speech-synthesis',
    component: ComponentCreator('/research/speech-synthesis', 'a9d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '22f'),
    routes: [
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '5fc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
