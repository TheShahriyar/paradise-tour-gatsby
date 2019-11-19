import React from "react"
import Layout from "../components/Layout"
import "../css/error.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"

export default function error() {
  return (
    <Layout>
      <header className="error">
        <Banner title="404! Page not found">
          <Link to="/" className="btn-white">
            Back to homepage
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
