import * as React from "react"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react";

import Layout from "../components/layout"
import Seo from "../components/seo"

const Pages = (props) => {
  return (
    <Layout>
      <Seo title={props.data.prismicPages.data.title.text} />
      <PrismicRichText field={props.data.prismicPages.data.title.richText}></PrismicRichText>
      <PrismicRichText field={props.data.prismicPages.data.body.richText}></PrismicRichText>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String){
    prismicPages(id: {eq: $id}){
      data {
        title {
          richText
        }
        body {
          richText
        }
      }
    }
  }
`

export default Pages
