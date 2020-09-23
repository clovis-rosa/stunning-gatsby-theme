import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Image } from "../components/image"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About us" />
    <div className="container">
      <h2>
        Hello world!{" "}
        <span role="img" aria-label="Hello">
          👋{" "}
        </span>{" "}
      </h2>

      {/*  */}
      <article className="article">
        <div className="about__grid">
          {/*  */}
          <div className="about__grid--left">
            <h5>
              My name is <i>Clovis Rosa</i> and I am a new Front-End Developer
              on the block!
            </h5>
            <h6>
              <i>
                Looking for my next opportunity to make a change. The digital
                way.
              </i>
            </h6>
            <p>
              Just click “Edit Text” or double click me to add your own content
              and make changes to the font.
            </p>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy.
            </p>
            <p>
              Feel free to drag and drop me anywhere you like on your page. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>

            <div className="contact">
              <ul>
                <li className="contact__item">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 23C127.4 23 23 127.4 23 256s104.4 233 233 233 233-104.4 233-233S384.6 23 256 23zm-33.7 20.63C190 66.85 163.6 92.25 143.2 119H90.26C122.9 79.54 169.4 51.95 222.3 43.63zm67.4 0c52.9 8.32 99.4 35.91 132 75.37h-52.9c-20.4-26.75-46.8-52.15-79.1-75.37zm-60.2 16.98C219 80.42 210 99.85 202.5 119h-36.3c17.1-20.39 38.2-40 63.3-58.39zm53 0c25.1 18.39 46.2 38 63.3 58.39h-36.3c-7.5-19.15-16.5-38.58-27-58.39zM247 65.99V119h-25.1c7-17.3 15.4-34.95 25.1-53.01zm18 0c9.7 18.06 18.1 35.71 25.1 53.01H265V65.99zM76.89 137h53.51c-9.8 15-17.8 30.4-23.9 46H53.71c5.89-16.3 13.71-31.8 23.18-46zm75.21 0h43.8c-5.4 15.5-9.6 30.8-12.9 46h-57.1c6.7-15.6 15.5-30.9 26.2-46zm62.8 0H247v46h-45.6c3.4-15.2 7.9-30.5 13.5-46zm50.1 0h32.1c5.6 15.5 10.1 30.8 13.5 46H265v-46zm51.1 0h43.8c10.7 15.1 19.5 30.4 26.2 46H329c-3.3-15.2-7.5-30.5-12.9-46zm65.5 0h53.5c9.5 14.2 17.3 29.7 23.2 46h-52.8c-6.1-15.6-14.1-31-23.9-46zM48.1 201h52.1c-4.63 15.2-7.5 30.6-8.64 46H41.2c.65-15.8 3.01-31.2 6.9-46zm70.9 0h60.5c-2.5 15.4-3.9 30.7-4.4 46h-65.5c1.2-15.3 4.4-30.7 9.4-46zm78.8 0H247v46h-53.9c.5-15.3 2-30.6 4.7-46zm67.2 0h49.2c2.7 15.4 4.2 30.7 4.7 46H265v-46zm67.5 0H393c5 15.3 8.2 30.7 9.4 46h-65.5c-.5-15.3-1.9-30.6-4.4-46zm79.3 0h52.1c3.9 14.8 6.2 30.2 6.9 46h-50.4c-1.1-15.4-4-30.8-8.6-46zM41.2 265h49.83c.23 15.5 2.24 30.9 6.02 46H48.1c-3.89-14.8-6.25-30.2-6.9-46zm67.8 0h66.1c.5 15.3 1.9 30.6 4.4 46h-63.9c-4.1-15.2-6.3-30.6-6.6-46zm84.1 0H247v46h-49.2c-2.7-15.4-4.2-30.7-4.7-46zm71.9 0h53.9c-.5 15.3-2 30.6-4.7 46H265v-46zm71.9 0H403c-.3 15.4-2.5 30.8-6.6 46h-63.9c2.5-15.4 3.9-30.7 4.4-46zm84.1 0h49.8c-.7 15.8-3 31.2-6.9 46H415c3.7-15.1 5.7-30.5 6-46zM53.71 329h48.69c5.4 15.7 12.8 31.1 22.1 46H76.89c-9.47-14.2-17.29-29.7-23.18-46zm67.69 0H183c3.3 15.2 7.5 30.5 12.9 46h-50c-10.4-14.9-18.5-30.3-24.5-46zm80 0H247v46h-32.1c-5.6-15.5-10.1-30.8-13.5-46zm63.6 0h45.6c-3.4 15.2-7.9 30.5-13.5 46H265v-46zm64 0h61.6c-6 15.7-14.1 31.1-24.5 46h-50c5.4-15.5 9.6-30.8 12.9-46zm80.6 0h48.7c-5.9 16.3-13.7 31.8-23.2 46h-47.6c9.3-14.9 16.7-30.3 22.1-46zM90.26 393h46.64c20.3 27.1 47.3 52.3 80.9 74.6-51-9.1-95.8-36.3-127.54-74.6zm69.34 0h42.9c7.9 20.4 17.6 41 29 62.1-29.3-18.9-53.2-39.8-71.9-62.1zm62.3 0H247v53c-9.7-18-18.1-35.7-25.1-53zm43.1 0h25.1c-7 17.3-15.4 35-25.1 53v-53zm44.5 0h42.9c-18.7 22.3-42.6 43.2-71.9 62.1 11.4-21.1 21.1-41.7 29-62.1zm65.6 0h46.6c-31.7 38.3-76.5 65.5-127.5 74.6 33.6-22.3 60.6-47.5 80.9-74.6z"></path>
                  </svg>
                  <Link to="/about">https://clovisrosa.dev</Link>
                </li>
                <li className="contact__item">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                  </svg>
                  <a href="mailto:clovis.souzarosa@gmail.com">
                    clovis.souzarosa@gmail.com
                  </a>
                </li>
                <li className="contact__item">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                  <a href="https://github.com/clovis-rosa">
                    Clovis Rosa Github
                  </a>
                </li>
                <li className="contact__item">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                  </svg>
                  <a href="https://twitter.com/rosaclovis">
                    Twitter @rosaclovis
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="about__grid--right">
            <Image src={"clovis_rosa_01"} alt="Clovis Rosa photo" />
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default About
