import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Evan Farrell</h1>
    <p class="blurb">This is my blurb</p>
    <div class="links">
      <a href="http://blog.evanf.io">blog</a>
      <a href="https://www.twitter.com/@__evanf__">twitter</a>
      <a href="https://www.scholarme.com">scholarme</a>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
