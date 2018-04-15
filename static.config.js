// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
import React, { Component } from 'react';

export default {
    Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="./favicon-32-32.svg" />
        </Head>
        <Body>{children}</Body>
      </Html>
    ),


  getRoutes: async () => {
    return [
      {
        path: '/',
      },
      {
        path: '/roadmap',
      },
      {
        path:  '/blog-1'
      },
      {
        path: '/team'
      },
      {
        path: '/news'
      },
    ]
  },
}
