/**
 *
 * Relationships
 *
 */

import React from 'react'

import CssIcon from 'assets/img/css.webp'
import HtmlIcon from 'assets/img/html.webp'
import JavascriptIcon from 'assets/img/javascript.webp'

import './style.css'

const Relationships = () => {
  return (
    <section className="my-relationships container" id="relationships">
      <h2 className="my-relationships__title">
        About my relationships with web-development
      </h2>

      <div className="my-relationships__content">
        <div className="my-relationships__lang">
          <img
            className="my-relationships__lang-img-top"
            src={HtmlIcon}
            alt="html-img"
          />

          <div className="my-relationships__lang-body">
            <h3 className="my-relationships__lang-title">
              I&apos;m in love with HTML
            </h3>

            <p className="my-relationships__lang-text my-relationships__html-text">
              Hypertext Markup Language (HTML) is the standard markup language
              for creating web pages and web applications.
            </p>
          </div>
        </div>

        <div className="my-relationships__lang">
          <img
            src={CssIcon}
            className="my-relationships__lang-img-top"
            alt="css-img"
          />

          <div className="my-relationships__lang-body">
            <h3 className="my-relationships__lang-title">
              CSS is my best friend
            </h3>

            <p className="my-relationships__lang-text my-relationships__css-text">
              Cascading Style Sheets (CSS)is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML.
            </p>
          </div>
        </div>

        <div className="my-relationships__lang">
          <img
            className="my-relationships__lang-img-top"
            src={JavascriptIcon}
            alt="javascript-img"
          />

          <div className="my-relationships__lang-body">
            <h3 className="my-relationships__lang-title">
              JavaScript is my passion
            </h3>

            <p className="my-relationships__lang-text my-relationships__javascript-text">
              JavaScript is a high-level, interpreted programming language. It
              is a language which is also characterized as dynamic, weakly
              typed, prototype-based and multi-&nbsp;paradigm.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Relationships
