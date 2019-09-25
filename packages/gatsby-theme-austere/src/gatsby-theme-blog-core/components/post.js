import React from "react"
import {Styled} from 'theme-ui'
import {MDXRenderer} from "gatsby-plugin-mdx"
import {Helmet} from 'react-helmet'

import Layout from '../../components/layout'

export default ({ data: { blogPost } })=> (
  <Layout>
    <Helmet title={blogPost.title} />
    <Styled.h1>{blogPost.title}</Styled.h1>
    <MDXRenderer>{blogPost.body}</MDXRenderer>
  </Layout>
)