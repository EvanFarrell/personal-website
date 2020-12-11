import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const items = [
    "Did you call me from a séance?",
    "And to you it's just a late night out",
    "The only way out is through",
    "Greatness, at any cost",
    "Less morose and more present",
    "Remember, you did this to yourself",
    "Gerrard: “But it doesn't do anything!” Hanna: “No—it does nothing.”",
    "Always carry two spears.",
  ]
  const quote = items[Math.floor(Math.random() * items.length)]


  return (
  <Layout>
    <SEO title="Home" />
    <div class="page-wrapper">
      <div class="container">
        <h1>Evan Farrell</h1>
        <p class="blurb topol subtitle">Entrepreneur & college dropout</p>
        <p class="blurb topol">
          Cofounded Scholarly, then ScholarMe (naming was a total coincidence,
          believe it or not). I love vintage tech t-shirts, strategy card games,
          and obsessing over how to maximize deep work.
        </p>
        <p class="blurb topol">
          I believe it's important to work on a few, long, important projects,
          so I hope this page never gets too big.
        </p>

        <p class="blurb topol">Hit me up at firstname at scholarme dot co</p>

        <div class="links topol">
          <a class="link" href="http://blog.evanf.io">
            blog
          </a>
          <a class="link link-center" href="https://www.scholarme.com">
            scholarme
          </a>
          <a class="link" href="https://www.twitter.com/@__evanf__">
            twitter
          </a>
          <Link class="final-link link" to="/growth-hacks/">
            growth hacks
          </Link>
          <Link class="final-link link" to="/graditude/">
            graditude
          </Link>
        </div>
      </div>
      <div class="footer">
      <p class="blurb topol"><i>{quote}</i></p>
      </div>
    </div>
  </Layout>
)}

export default IndexPage
