import React from "react"
import services from "../../constant/services"
import Title from "../Title"
import "../../css/services.css"

const Service = () => {
  return (
    <section className="services">
      <Title title="Our" subtitle="Services" />
      <div className="center">
        {services.map((item, index) => {
          return (
            <div key={index} className="service">
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Service
