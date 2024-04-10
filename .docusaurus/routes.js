import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a98'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '90e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '9fd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '043'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '5d5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a65'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '5a4'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '11d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '107'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'ea1'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '3cf'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'a42'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f1d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '25c'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '1d5'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '9a3'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'db2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd4f'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'ff5'),
    exact: true
  },
  {
    path: '/contact_code',
    component: ComponentCreator('/contact_code', '320'),
    exact: true
  },
  {
    path: '/Datasets/bloom',
    component: ComponentCreator('/Datasets/bloom', 'f00'),
    exact: true
  },
  {
    path: '/Datasets/ebible',
    component: ComponentCreator('/Datasets/ebible', '79c'),
    exact: true
  },
  {
    path: '/Ethics/ethics',
    component: ComponentCreator('/Ethics/ethics', '7b7'),
    exact: true
  },
  {
    path: '/mai24',
    component: ComponentCreator('/mai24', '05d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3c1'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', 'a55'),
    exact: true
  },
  {
    path: '/Projects/acts2',
    component: ComponentCreator('/Projects/acts2', 'ce2'),
    exact: true
  },
  {
    path: '/Projects/AQuA',
    component: ComponentCreator('/Projects/AQuA', '3af'),
    exact: true
  },
  {
    path: '/Projects/bible-tools',
    component: ComponentCreator('/Projects/bible-tools', '466'),
    exact: true
  },
  {
    path: '/Projects/chat',
    component: ComponentCreator('/Projects/chat', 'cd6'),
    exact: true
  },
  {
    path: '/Projects/serval',
    component: ComponentCreator('/Projects/serval', '658'),
    exact: true
  },
  {
    path: '/rail',
    component: ComponentCreator('/rail', '0de'),
    exact: true
  },
  {
    path: '/Research/multimodal',
    component: ComponentCreator('/Research/multimodal', '691'),
    exact: true
  },
  {
    path: '/Research/speech-synthesis',
    component: ComponentCreator('/Research/speech-synthesis', 'd17'),
    exact: true
  },
  {
    path: '/team',
    component: ComponentCreator('/team', '6dd'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '75a'),
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
    component: ComponentCreator('/', 'cd3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
