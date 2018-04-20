import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import Link from 'gatsby-link';
import profilePic from './index_photo.jpg';
import resume from './resume.pdf';


class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    /*
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
          <div className="content__inner">
            {items}
          </div>
        </div>
      </div>
    );
    */
   
    const cvLink = "https://drive.google.com/open?id=1txJy3CpGJBuSMqwHNsUS8TXjU_KvZOi9";
    const vivianLink = "https://www.csie.ntu.edu.tw/~yvchen/index.html";

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner" style={{ overflow: "scroll", height: "90vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "60%" }}>
                <p>
                  Shang-Yu Su (蘇上育) was born in Kaohsiung, Taiwan. 
                  Su is a master's student in the department of electrical engineering in National Taiwan University, computer science track;
                  he received his bachelor degree from the same department as well.
                  <b> He is working with Prof.<a href={vivianLink} target="_blank">Yun-Nung (Vivian) Chen </a> on the research of Natural Language Processing,
                  Deep Learning, and dialogue systems. </b> <b> He is now on the internship at Microsoft, Redmond, as a research intern. </b> 
                  Before starting doing research, he also joined Yahoo! and Microsoft in Taiwan as a software engineering intern.
                </p> 
                <p>
                  For more details, check out my full <a href={resume} target="_blank">CV/resume </a>
                  and also feel free to contact me via email: <a href="mailto:shangyusu.tw@gmail.com">shangyusu.tw@gmail.com.</a> 
                </p>
              </div>
              <div style={{ width: "40%", padding: "3%"}} >
                <Link to="/">
                  <img src={profilePic} style={{ maxHeight: "100%" }} /> 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
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
          }
        }
      }
    }
  }
`;
