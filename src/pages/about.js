import React from "react"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react";

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data }) => 
{
    return (
        <Layout>
            <Seo title={data.prismicAbout.data.title.text} />
            <PrismicRichText field={data.prismicAbout.data.title.richText}></PrismicRichText>
            <PrismicRichText field={data.prismicAbout.data.details.richText}></PrismicRichText>
        </Layout>
    )
}

export const query = graphql`
  query {
    prismicAbout {
      data {
        details {
          richText
        }
        title {
          text
          richText
        }
      }
    }
  }
`

export default AboutPage
