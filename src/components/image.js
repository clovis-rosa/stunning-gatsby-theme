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
      g_email: file(relativePath: { eq: "g_email.png" }) {
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
      ) : (
        <Img fluid={data.g_email.childImageSharp.fluid} />
      )}
    </>
  )
}
