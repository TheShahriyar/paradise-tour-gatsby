import React from "react"
import Title from "../Title"
import "../../css/about.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className="about">
      <Title title="About" subtitle="Us"></Title>
      <div className="about-center">
        <div className="about-img">
          <div className="img-container">
            {/* <img src={img} alt="About-company" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt="About-company" />
          </div>
        </div>
        <div className="about-info">
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, esse
            deserunt provident ratione voluptatum obcaecati aliquid magnam amet
            cumque culpa dolorem? Totam sapiente ipsa fuga vero culpa dolor
            maxime temporibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, esse
            deserunt provident ratione voluptatum obcaecati aliquid magnam amet
            cumque culpa dolorem? Totam sapiente ipsa fuga vero culpa dolor
            maxime temporibus.
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
