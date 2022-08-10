import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Pages = (props) => {
  console.log(props)
  return (
    <Layout>
      <Seo title="Page two" />
      <h1>{props.data.prismicPages.data.title.text}</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
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
