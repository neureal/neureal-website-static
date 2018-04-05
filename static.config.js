// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
import React, { Component } from 'react';

export default {

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
  Html: class CustomHtml extends Component {
    render() {
      const {Html, Head, Body, children } = this.this.props
  
      // const sheet = new ServerStyleShoot()
      // const newChildren = sheet.collectStyles(children)
      // const styleTags = sheet.getStyleElement()
  
      return (
        <Html>
          <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
              {/* {styleTags}  */}
          </Head>
          <Body>
            {children}
          </Body>
        </Html>
      )
    }
  },
  
}
