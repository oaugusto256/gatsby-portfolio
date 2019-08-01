import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header/"

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </>
      )}
    />
  )
};
