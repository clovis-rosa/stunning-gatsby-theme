import React from "react"
// import Layout from "../components/layout"
import { Image } from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Work = () => {
  return (
    <>
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
                    <Image src={"rayanair"} alt="Ryanair Unsplash Image" />
                  </div>
                </div>
                <h6 className="feature__title">Rayanair</h6>
                <p className="small">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque expedita, deleniti adipisci quasi ea in dolorum nisi
                  molestias eum repellat ad nihil, minus optio error cumque!
                </p>
              </div>
              {/*  */}
              <div className="feature__item">
                <div className="box-shadow">
                  <div className="img-wrapper">
                    <Image src={"google"} alt="Google Unsplash Image" />
                  </div>
                </div>
                <h6 className="feature__title">Google</h6>
                <p className="small">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque expedita, deleniti adipisci quasi ea in dolorum nisi
                  molestias eum repellat ad nihil, minus optio error cumque!
                </p>
              </div>
              {/*  */}
              <div className="feature__item">
                <div className="box-shadow">
                  <div className="img-wrapper">
                    <Image src={"amazon"} alt="Amazon Unsplash Image" />
                  </div>
                </div>
                <h6 className="feature__title">Amazon</h6>
                <p className="small">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque expedita, deleniti adipisci quasi ea in dolorum nisi
                  molestias eum repellat ad nihil, minus optio error cumque!
                </p>
              </div>
              {/*  */}
              <div className="feature__item">
                <div className="box-shadow">
                  <div className="img-wrapper">
                    <Image
                      src={"nytimes"}
                      alt="New Yourk Times Unsplash Image"
                    />
                  </div>
                </div>
                <h6 className="feature__title">New Yourk Times</h6>
                <p className="small">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque expedita, deleniti adipisci quasi ea in dolorum nisi
                  molestias eum repellat ad nihil, minus optio error cumque!
                </p>
              </div>
            </div>

            <h6 className="page-title">Work Highlights</h6>
            <h3 style={{ marginLeft: "-3px" }}>
              Diam volutpat commodo sed egestas egestas fringilla phasellus.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ut
              unde ad assumenda quae, nulla culpa omnis sit esse aliquam?
            </p>

            <div className="highlight">
              {/*  */}
              <div className="highlight__item">
                <h6 className="highlight__title">Lorem, ipsum dolor.</h6>
                <p className="highlight__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae aspernatur veritatis distinctio!
                </p>
              </div>
              {/*  */}
              <div className="highlight__item">
                <h6 className="highlight__title">Lorem, ipsum dolor.</h6>
                <p className="highlight__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae aspernatur veritatis distinctio!
                </p>
              </div>
              {/*  */}
              <div className="highlight__item">
                <h6 className="highlight__title">Lorem, ipsum dolor.</h6>
                <p className="highlight__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae aspernatur veritatis distinctio!
                </p>
              </div>
              {/*  */}
              <div className="highlight__item">
                <h6 className="highlight__title">Lorem, ipsum dolor.</h6>
                <p className="highlight__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae aspernatur veritatis distinctio!
                </p>
              </div>
              {/*  */}
              <div className="highlight__item">
                <h6 className="highlight__title">Lorem, ipsum dolor.</h6>
                <p className="highlight__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae aspernatur veritatis distinctio!
                </p>
              </div>
              {/*  */}
              <div className="highlight__item">
                <h6 className="highlight__title">Lorem, ipsum dolor.</h6>
                <p className="highlight__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae aspernatur veritatis distinctio!
                </p>
              </div>
              {/*  */}
              <div className="highlight__item">
                <h6 className="highlight__title">Lorem, ipsum dolor.</h6>
                <p className="highlight__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae aspernatur veritatis distinctio!
                </p>
              </div>
              {/*  */}
              <div className="highlight__item">
                <h6 className="highlight__title">Lorem, ipsum dolor.</h6>
                <p className="highlight__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae aspernatur veritatis distinctio!
                </p>
              </div>
              {/*  */}
              <div className="highlight__item">
                <h6 className="highlight__title">Lorem, ipsum dolor.</h6>
                <p className="highlight__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae aspernatur veritatis distinctio!
                </p>
              </div>
            </div>

            <div className="anchor__back">
              <Link to="/" className="link">
                Back to Home Page
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Work
