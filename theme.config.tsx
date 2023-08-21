import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (<span className='text-lg font-bold flex align-center items-center'>
    <img src="/favicon.svg" className='w-8 mr-1' />
    AskCodebase Docs
  </span>),
  chat: {
    link: 'https://discord.com/invite/5Ny6UuNKVD',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 127.14 96.36">
        <g id="Discord_Logos" data-name="Discord Logos">
          <g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo">
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" fill="currentColor" />
          </g>
        </g>
      </svg>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | AskCodebase Docs',
      }
    }
    return {titleTemplate: 'AskCodebase Docs'}
  },
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
      text: (
        <span>
          {new Date().getFullYear()} ©{' '}
          <a href="https://www.linkedin.com/company/jipitiai" target="_blank">
            <b>Jipiti AI</b>
          </a> - <a href="https://askcodebase.com" target="_blank">Creator of <b>AskCodebase</b></a>
        </span>
      )
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
