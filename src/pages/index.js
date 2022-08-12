import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { PrismicRichText } from "@prismicio/react"

const IndexPage = (props) => 
{
  return (
    <Layout>
      <Seo title="High Block Futbol Homepage" />
      <PrismicRichText field={props.data.prismicHome.data.content.richText}>

      </PrismicRichText>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    prismicHome {
      data {
        content {
          richText
        }
      }
    }
  }
`

export default IndexPage
