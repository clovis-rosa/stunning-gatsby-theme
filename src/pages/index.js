import React from "react"
// import Layout from "../components/layout"
import { Image } from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from "framer-motion"

// const transitionExit = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] }
const transitionUp = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
}
const item = {
  initial: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <section className="section">
        {/*  */}
        <article className="article">
          <motion.div className="wrapper" variants={transitionUp}>
            <motion.h3 variants={item}>
              Maecenas sagittis nibh vitae tortor blandit tellus.
            </motion.h3>
            <motion.p variants={item}>
              Sed mi nisi, tincidunt id turpis non, dapibus condimentum neque.
              Pellentesque pretium sollicitudin mauris, nec suscipit neque
              sollicitudin in. Vivamus augue lorem, porttitor eu massa eget,
              pretium volutpat mi.
            </motion.p>
            <motion.div className="anchor" variants={item}>
              <Link to="/product" className="link">
                View the product
              </Link>
            </motion.div>
          </motion.div>
          <Link to="/product">
            <div className="container-lg">
              <Image src={"tobias_keller"} alt="Tobias Keller Unsplash Image" />
            </div>
          </Link>
        </article>

        <article className="article">
          <motion.div className="wrapper" variants={transitionUp}>
            <motion.h3 variants={item}>
              Integer suscipit rhoncus orci, a pretium odio. Fusce nec tortor
              eget.
            </motion.h3>
            <motion.p variants={item}>
              Curabitur iaculis lectus blandit placerat euismod. Nam magna dui,
              malesuada vitae arcu tempus, consequat ultrices nibh. Aliquam
              convallis eros a accumsan fringilla. Mauris vel urna id nisi
              dapibus vehicula. Fusce turpis nisi, consectetur in mollis ac,
              sagittis sed odio.
            </motion.p>
            <motion.div className="anchor" variants={item}>
              <Link to="/product" className="link">
                View the product
              </Link>
            </motion.div>
          </motion.div>
          <div className="container-lg">
            <Image
              src={"maarten_deckers"}
              alt="Maarten Deckers Unsplash Image"
            />
          </div>
        </article>
        {/*  */}
        <article className="article">
          <motion.div className="wrapper">
            <motion.h3 variants={item}>
              Maecenas suscipit nunc eu nunc aliquam convallis eget ac enim.
            </motion.h3>
            <motion.p variants={item}>
              Maecenas eget massa nibh. Nullam ullamcorper aliquet consequat.
              Donec porttitor fermentum felis, at euismod turpis cursus eget.
              Vestibulum iaculis interdum diam, et euismod leo aliquet nec. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nam pellentesque metus arcu, non tempus risus
              fringilla at.
            </motion.p>
            <motion.div className="anchor" variants={item}>
              <Link to="/product" className="link">
                View the product
              </Link>
            </motion.div>
          </motion.div>
          <div className="container-lg">
            <Image
              src={"christian_holzinger_01"}
              alt="Christian Holzinger Unsplash Image"
            />
          </div>
        </article>
        {/*  */}
        <article className="article">
          <motion.div className="wrapper" variants={transitionUp}>
            <motion.h3 variants={item}>
              Quisque fringilla nulla et aliquam pretium. Fusce ultricies erat
              augue.
            </motion.h3>
            <motion.p variants={item}>
              Integer bibendum augue eget turpis interdum, quis vehicula turpis
              finibus. Nam in volutpat sapien. Cras quis arcu id erat sagittis
              iaculis vitae vitae felis. Nullam euismod sem neque. Nulla
              molestie lorem id sem rhoncus, vel ultricies lectus luctus.
            </motion.p>
            <motion.div className="anchor" variants={item}>
              <Link to="/product" className="link">
                View the product
              </Link>
            </motion.div>
          </motion.div>
          <div className="container-lg">
            <Image src={"kimon_maritz"} alt="Kimon Martiz Unsplash Image" />
          </div>
        </article>
      </section>
    </>
  )
}

export default IndexPage
