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
            <h3 style={{ marginLeft: "-3px" }}>
              Maecenas sagittis nibh vitae tortor blandit tellus.
            </h3>
            <p>
              Sed mi nisi, tincidunt id turpis non, dapibus condimentum neque.
              Pellentesque pretium sollicitudin mauris, nec suscipit neque
              sollicitudin in. Vivamus augue lorem, porttitor eu massa eget,
              pretium volutpat mi. Donec id metus quis turpis tempor convallis
              non eget risus. Ut eu feugiat lorem. Nullam eget cursus tellus.
            </p>
            <div className="anchor">
              <Link to="/severless-applications" className="link">
                View the product
              </Link>
            </div>
          </div>
          <div className="container-lg">
            <Image src={"tobias_keller"} alt="Tobias Keller Unsplash Image" />
          </div>
        </article>

        <article className="article">
          <div className="wrapper">
            <h3>
              Integer suscipit rhoncus orci, a pretium odio. Fusce nec tortor
              eget.
            </h3>
            <p>
              Curabitur iaculis lectus blandit placerat euismod. Nam magna dui,
              malesuada vitae arcu tempus, consequat ultrices nibh. Aliquam
              convallis eros a accumsan fringilla. Mauris vel urna id nisi
              dapibus vehicula. Fusce turpis nisi, consectetur in mollis ac,
              sagittis sed odio. Ut consectetur ante metus, sit amet eleifend
              neque iaculis vitae. Phasellus id est ac mi ornare mattis eu sit
              amet augue. Vestibulum pharetra a ex in interdum. Nulla facilisi.
              Curabitur vel arcu et felis tristique semper.
            </p>
            <div className="anchor">
              <Link to="/severless-applications" className="link">
                View the product
              </Link>
            </div>
          </div>
          <div className="container-lg">
            <Image
              src={"maarten_deckers"}
              alt="Maarten Deckers Unsplash Image"
            />
          </div>
        </article>
        {/*  */}
        <article className="article">
          <div className="wrapper">
            <h3>
              Maecenas suscipit nunc eu nunc aliquam convallis eget ac enim.
            </h3>
            <p>
              Maecenas eget massa nibh. Nullam ullamcorper aliquet consequat.
              Donec porttitor fermentum felis, at euismod turpis cursus eget.
              Vestibulum iaculis interdum diam, et euismod leo aliquet nec. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nam pellentesque metus arcu, non tempus risus
              fringilla at.
            </p>
            <div className="anchor">
              <Link to="/severless-applications" className="link">
                View the product
              </Link>
            </div>
          </div>
          <div className="container-lg">
            <Image
              src={"christian_holzinger_01"}
              alt="Christian Holzinger Unsplash Image"
            />
          </div>
        </article>
        {/*  */}
        <article className="article">
          <div className="wrapper">
            <h3>
              Quisque fringilla nulla et aliquam pretium. Fusce ultricies erat
              augue.
            </h3>
            <p>
              Integer bibendum augue eget turpis interdum, quis vehicula turpis
              finibus. Nam in volutpat sapien. Cras quis arcu id erat sagittis
              iaculis vitae vitae felis. Nullam euismod sem neque. Nulla
              molestie lorem id sem rhoncus, vel ultricies lectus luctus. Proin
              blandit eros in lectus ultricies, non laoreet dolor aliquet.
              Aenean finibus, purus aliquet sagittis facilisis, erat velit
              lobortis ex, nec cursus turpis metus tristique justo.
            </p>
            <div className="anchor">
              <Link to="/severless-applications" className="link">
                View the product
              </Link>
            </div>
          </div>
          <div className="container-lg">
            <Image src={"kimon_maritz"} alt="Kimon Martiz Unsplash Image" />
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
