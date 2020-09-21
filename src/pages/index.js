import React from "react"
import Layout from "../components/layout"
import { Image } from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="section">
        <article className="article">
          <div className="wrapper">
            <h2>Building beautiful solutions.</h2>
            <p>
              Our goal is to provide simple, beautiful, and effective software
              solutions your team will enjoy using. From performance and uptime
              monitoring to large scale log management, we have a variety of
              solutions to help make your products the best they can be.
            </p>
          </div>

          <div className="container-lg">
            <Image src={"tobias_keller"} alt="Galery" />
          </div>
        </article>

        <article className="article">
          <div className="wrapper">
            <h3>
              Serverless applications in seconds, in your own AWS account.
            </h3>
            <p>
              Deploy infinitely scalable serverless applications, APIs, and
              sites in seconds with a single command. Bring a Heroku-style user
              experience to your own AWS account, save time, money, and get back
              to work on what makes your product unique.
            </p>
            <div className="anchor">
              <Link to="/severless-applications" className="link">
                View the product
              </Link>
            </div>
          </div>
          <div className="container-lg">
            <Image src={"maarten_deckers"} alt="Galery" />
          </div>
        </article>

        <article className="article">
          <div className="wrapper">
            <h3>
              Serverless applications in seconds, in your own AWS account.
            </h3>
            <p>
              Deploy infinitely scalable serverless applications, APIs, and
              sites in seconds with a single command. Bring a Heroku-style user
              experience to your own AWS account, save time, money, and get back
              to work on what makes your product unique.
            </p>
            <div className="anchor">
              <Link to="/severless-applications" className="link">
                View the product
              </Link>
            </div>
          </div>
          <div className="container-lg">
            <Image src={"kimon_maritz"} alt="Galery" />
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
