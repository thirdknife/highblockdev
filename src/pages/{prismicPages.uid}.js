import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Pages = (props) => {
  console.log(props)
  return (
    <Layout>
      <Seo title={props.data.prismicPages.data.title.text} />
      <h1>{props.data.prismicPages.data.title.text}</h1>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String){
    prismicPages(id: {eq: $id}){
        data {
          title{
            text
          }
        }
    }
  }
`

export default Pages
