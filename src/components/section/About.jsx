import React from "react"
import Title from "../Title"
import "../../css/about.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className="about">
      <Title title="About" subtitle="Us"></Title>
      <div className="about-center">
        <artitle className="about-img">
          <div className="img-container">
            <img src={img} alt="About image" />
          </div>
        </artitle>
        <article className="about-info">
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
        </article>
      </div>
    </section>
  )
}

export default About
