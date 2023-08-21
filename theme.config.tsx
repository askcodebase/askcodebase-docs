import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className='text-lg font-bold'>AskCodebase Docs</span>,
  project: {
    link: 'https://github.com/jipitiai/askcodebase-docs'
  },
  docsRepositoryBase: 'https://github.com/jipitiai/askcodebase-docs',
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='AskCodebase Docs' />
      <meta
        property='og:description'
        content='Your AI programming autopilot.'
      />
      <title>AskCodebase Docs</title>
      <script type='application/ld+json'>
          {`{
            "@context": "https://schema.org",
            "@type" : "WebSite",
            "name" : "AskCodebase Docs",
            "url" : "https://docs.askcodebase.com"
          }`}
      </script>
      <link rel='icon' type='image/png' href='/favicon.svg' />
    </>
  ),
  footer: {
    component: null
  },
  editLink: {
    text: 'https://github.com/jipitiai/askcodebase-docs',
    component({ children: _children, className, filePath }) {
      return (
        <a
          className='nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50'
          href={`https://github.com/jipitiai/askcodebase-docs/edit/main/${filePath}`}
          target='_blank'
        >
          Edit this page
        </a>
      )
    }
  }
}

export default config
