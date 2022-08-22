import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = (props) => 
{
  return (
    <Layout>
      <Seo title="High Block Futbol Homepage" />
      <ul>
        {
          props.data.allPrismicPages.nodes.map(element => (
            <li><Link key={element.id} to={element.uid}>{element.data.title.text}</Link> - <span>Published: {element.first_publication_date}</span></li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allPrismicPages {
      nodes {
        uid
        id
        last_publication_date
        first_publication_date
        lang
        data {
          title {
            text
          }
        }
      }
    }
  }
`

export default IndexPage
