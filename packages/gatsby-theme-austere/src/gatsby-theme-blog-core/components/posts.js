/** @jsx jsx */
import {Link} from "gatsby"
import {Styled, jsx} from 'theme-ui'
import {Helmet} from 'react-helmet'

import Layout from '../../components/layout'

export default ({ data }) => (
  <Layout title="Posts" titleTagName="h1">
    <Helmet title="Posts" />
    <Styled.ul
      sx={{
        variant: 'styles.postlist'
      }}
    >
      {data.allBlogPost.edges.map(({ node: post }) => (
        <Styled.li>
          <Styled.a
            as={Link}
            to={post.slug}
          >
            {post.title}
          </Styled.a>
        </Styled.li>
      ))}
    </Styled.ul>
  </Layout>
)
