import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GraditudePage = () => (
  <Layout>
    <SEO title="Growth Hacks" />
    <div class="container-small">
      <h1>Evan Farrell</h1>
      <p class="topol subtitle">Here are some growth hacks I love. Some I've done, some are from friends, some are just ideas</p>
      <p class="topol">
        Form a 501(c)(3) for 10k in free monthly adwords credits
      </p>
      <p class="topol">Pay micro-influencers to simultaneously retweet a marketing tweet the second it went out, and have a prompt for other users to RT to get access to the product</p>
      <p class="topol">FOIA Request public colleges for all their current enrolled students' emails</p>
      <p class="topol">Scrape campuslabs to get emails of all club-members and club captains of every college club in the country</p>
      <p class="topol">Build an online defensive driving course to enable graduates to get insurance deductions. Use that to lead gen your insurance product.</p>
      <p class="topol">Use tinder bots to promote your chat app. "Not on here often, dm me on CoolChatApp, I'm @evan97"</p>
      <p class="topol">Zoom bomb college classes by getting students who use your product to give you an invite. Promote your product. Bonus points for requesting to ask a question then just plugging and leaving lmao</p>
      <p class="topol">Fintech: Send people a dollar on cashapp with message: "Want some more $? Check out mycoolapp.com" Then it'll make noise in the public feed</p>
      <p class="topol">Start fake beef on clubhouse where you/yourCo is the good guy</p>
      <p class="topol">Fashion: Hype up a drop you're gonna do, then pretend that your inventory was robbed. Bonus-points for pictures of the break-in. Post your now blackmarket merch on grailed etc for crazy prices.</p>
      <p class="topol">D2C/CPG: Pay onlyfans models to put your item on their amazon wishlist to get simps to buy them</p>
      <br />
      <p class="topol">email me your company and I'll come up with some ideas for you, for free!</p>
      <div class="links topol">
        <Link class="link" to="/">
          back to home
        </Link>
      </div>
    </div>
  </Layout>
)

export default GraditudePage
