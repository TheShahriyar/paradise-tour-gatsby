import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/section/About"
import Service from "../components/section/Service"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Paradise Tour Agency"
        info="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
      >
        <Link to="/tours" className="btn-white">
          Explore Tour
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Service />
  </Layout>
)
