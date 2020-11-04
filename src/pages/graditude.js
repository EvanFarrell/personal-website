import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GraditudePage = () => (
  <Layout>
    <SEO title="Graditude" />
    <div class="container">
      <h1>Evan Farrell</h1>
      <p class="blurb topol subtitle">People and things I'm grateful for.</p>
      <p class="blurb topol">
        I'll fill this out soon! I need to get permission from those I'm grateful for to post about them here...
      </p>
      <div class="links topol">
        <Link class="link" to="/">back to home</Link>
      </div>
    </div>
  </Layout>
)

export default GraditudePage
