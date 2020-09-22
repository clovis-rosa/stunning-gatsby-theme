import React from "react"
import Layout from "../components/layout"
import { Image } from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Work = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <section className="section">
        <article className="article">
          <div className="wrapper">
            <h6 className="page-title">Work</h6>
            <h3 style={{ marginLeft: "-3px" }}>
              Ultrices in iaculis nunc sed augue.
            </h3>
            <p>
              Sed risus pretium quam vulputate dignissim suspendisse in est
              ante. Odio aenean sed adipiscing diam donec adipiscing tristique.
              Diam volutpat commodo sed egestas egestas fringilla phasellus
              faucibus scelerisque.
            </p>

            <div className="feature">
              {/*  */}
              <div className="feature__item">
                <div className="box-shadow">
                  <div className="img-wrapper">
                    <Image src={"g_email"} alt="Gmail" />
                  </div>
                </div>

                <h6>Slack</h6>
                <p className="small">
                  Slack messages are a great way to inform the entire team of
                  downtime and performance degradation.
                </p>
              </div>
              {/*  */}
              <div className="feature__item">
                <div className="box-shadow">
                  <div className="img-wrapper">
                    <Image src={"g_email"} alt="Gmail" />
                  </div>
                </div>

                <h6>Slack</h6>
                <p className="small">
                  Slack messages are a great way to inform the entire team of
                  downtime and performance degradation.
                </p>
              </div>
              {/*  */}
              <div className="feature__item">
                <div className="box-shadow">
                  <div className="img-wrapper">
                    <Image src={"g_email"} alt="Gmail" />
                  </div>
                </div>

                <h6>Slack</h6>
                <p className="small">
                  Slack messages are a great way to inform the entire team of
                  downtime and performance degradation.
                </p>
              </div>
              {/*  */}
              <div className="feature__item">
                <div className="box-shadow">
                  <div className="img-wrapper">
                    <Image src={"g_email"} alt="Gmail" />
                  </div>
                </div>

                <h6>Slack</h6>
                <p className="small">
                  Slack messages are a great way to inform the entire team of
                  downtime and performance degradation.
                </p>
              </div>
            </div>

            <div className="anchor">
              <Link to="/" className="link">
                Back to Home Page
              </Link>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default Work
