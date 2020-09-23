import React from "react"
// import Layout from "../components/layout"
import { Image } from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const transitionImg = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }
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

const Product = () => {
  return (
    <>
      <SEO title="Product" />
      <section className="section">
        {/*  */}
        <article className="product">
          <motion.div variants={transitionUp} className="wrapper">
            <motion.h3 variants={item}>
              Maecenas sagittis nibh vitae tortor blandit tellus.
            </motion.h3>
          </motion.div>
          {/*  */}
          <motion.div
            className="container-wide"
            initial={{ y: "30%", width: "80%", maxWidth: "1125px" }}
            animate={{
              y: 0,
              width: "100%",
              maxWidth: "100%",
              // height: window.innerWidth > 1440 ? 500 : 700,
              overflow: "hidden",
              transition: { delay: 0.2, ...transitionImg },
            }}
            id="container-wide"
          >
            <Image src={"tobias_keller"} alt="Tobias Keller Unsplash Image" />
          </motion.div>
          {/*  */}
          <div className="product-post wrapper">
            <h5 className="product-post__title">
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading.
            </h5>
            <i>
              Welcome to your blog post. Use this space to connect with your
              readers and potential customers in a way that’s current and
              interesting. Think of it as an ongoing conversation where you can
              share updates about business, trends, news, and more.
            </i>
            <p>
              You’ll be posting loads of engaging content, so be sure to keep
              your blog organized with Categories that also allow visitors to
              explore more of what interests them.
            </p>
            <h6>Create Relevant Content</h6>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you. ​
            </p>
            <p>
              You can also add hashtags <mark>(#vacation #dream #summer)</mark>{" "}
              throughout your posts to reach more people, and help visitors
              search for relevant content. Blogging gives your site a voice, so
              let your business’ personality shine through. Choose a great image
              to feature in your post or add a video for extra engagement. Are
              you ready to get started? Simply create a new post now.
            </p>
            <blockquote>
              Do you have a design in mind for your blog? Whether you prefer a
              trendy postcard look or you’re going for a more editorial style
              blog - there’s a stunning layout for everyone.
            </blockquote>
            <p>
              Writing a blog is a great way to position yourself as an authority
              in your field and captivate your readers’ attention. Do you want
              to improve your site’s SEO ranking? Consider topics that focus on
              relevant keywords and relate back to your{" "}
              <a className="external-link" href="https://google.com">
                website or business
              </a>
              .
            </p>
            <p>
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide.
            </p>
            <p>
              Tell your visitors the story of how you came up with the idea for
              your business and what makes you different from your competitors.
              Make your company stand out and show your visitors who you are.
            </p>
            <div className="anchor">
              <Link to="/" className="link">
                Back to Home Page
              </Link>
            </div>
          </div>
        </article>
        {/*  */}
      </section>
    </>
  )
}

export default Product
