import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

class Publications extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;

    const posts = this.props.data.allMarkdownRemark.edges;
    
    posts.forEach((post) => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });
  
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner" style={{ overflow: "scroll", height: "85vh" }}>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default Publications;

export const pageQuery = graphql`
  query PublicationsQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            conference
          }
        }
      }
    }
  }
`;
