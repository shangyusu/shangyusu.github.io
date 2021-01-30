import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import Link from 'gatsby-link';
import profilePic from './index_photo.png';
import testPic from './japan.png';
import resume from './shang-yu_resume_20210130.pdf';


class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    /*
    const posts = this.props.data.allMarkdownRemark.edges;
    
    posts.forEach((post) => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

                <Link to="/">
                  <img src={testPic} style={{ maxHeight: "30%" }} /> 
                </Link>

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
   
    // const cvLink = "https://drive.google.com/open?id=1txJy3CpGJBuSMqwHNsUS8TXjU_KvZOi9";
    const vivianLink = "https://www.csie.ntu.edu.tw/~yvchen/index.html";
    const googleFellowshipBlog = "https://ai.googleblog.com/2020/10/announcing-2020-google-phd-fellows.html?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed:+blogspot/gJZg+(Google+AI+Blog)&m=1";

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner" style={{ overflow: "scroll", height: "90vh" }}>
            <h4 style={{ marginTop: "1.0rem" }}>News:</h4>
            <span><b>(09/16/20) two papers were accepted by EMNLP2020 (1 conference + 1 finding).</b></span><br/>
            <span><b>(10/01/20) I am fortunate to receive 2020 Google PhD Fellowship. (<a href={googleFellowshipBlog} target="_blank">link</a>)</b></span><br/>
            <span><b>(10/12/20) internship at Google Research started.</b></span><br/>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "60%" }}>
                <p>
                  I am Shang-Yu Su (蘇上育) from Taiwan, a PhD candidate in the department of Computer Science and Information Engineering at National Taiwan University.
                  <b> Now I am working with Prof.<a href={vivianLink} target="_blank">Yun-Nung (Vivian) Chen </a> on various research topics about Natural Language Processing with
                  Deep Learning and Dialogue Systems. </b>
                  I received my bachelor's degree from the department of Electrical Engineering.
                 
                  Previously, I was a research intern at Amazon (Alexa AI) and  Microsoft.
                  <br/>
                  Before starting doing research, I also joined Yahoo! and Microsoft as a software engineering intern.
                  <br/>
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
