import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      tobias_keller_01: file(relativePath: { eq: "tobias_keller_01.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      maarten_deckers_01: file(relativePath: { eq: "maarten_deckers_01.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      kimon_maritz_01: file(relativePath: { eq: "kimon_maritz_01.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      christian_holzinger_01: file(
        relativePath: { eq: "christian_holzinger_01.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      clovis_rosa_01: file(relativePath: { eq: "clovis_rosa_01.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rayanair: file(relativePath: { eq: "rayanair.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      google: file(relativePath: { eq: "google.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      amazon: file(relativePath: { eq: "amazon.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nytimes: file(relativePath: { eq: "nytimes.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      {src === `tobias_keller` ? (
        <Img fluid={data.tobias_keller_01.childImageSharp.fluid} />
      ) : src === `maarten_deckers` ? (
        <Img fluid={data.maarten_deckers_01.childImageSharp.fluid} />
      ) : src === `kimon_maritz` ? (
        <Img fluid={data.kimon_maritz_01.childImageSharp.fluid} />
      ) : src === `christian_holzinger_01` ? (
        <Img fluid={data.christian_holzinger_01.childImageSharp.fluid} />
      ) : src === `clovis_rosa_01` ? (
        <Img fluid={data.clovis_rosa_01.childImageSharp.fluid} />
      ) : src === `nytimes` ? (
        <Img fluid={data.nytimes.childImageSharp.fluid} />
      ) : src === `rayanair` ? (
        <Img fluid={data.rayanair.childImageSharp.fluid} />
      ) : src === `google` ? (
        <Img fluid={data.google.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.amazon.childImageSharp.fluid} />
      )}
    </>
  )
}
