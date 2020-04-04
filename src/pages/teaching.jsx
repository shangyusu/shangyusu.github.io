import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
// slides
import slides1 from './teaching_slides/200310_optimization.pdf';
import slides2 from './teaching_slides/200317_practical_tips.pdf';
import slides3 from './teaching_slides/200331_more_on_embeddings.pdf';

class Publications extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;

    const posts = this.props.data.allMarkdownRemark.edges;
    
    // posts.forEach((post, i) => {
    //  items.push(<Post data={post} key={post.node.fields.slug} index={i} />);
    // });
    
    const adl = (
      <div>Applied Deep Learning</div>
    );

    const vivianLink = "https://www.csie.ntu.edu.tw/~yvchen/index.html";
    const websiteLink = "https://www.csie.ntu.edu.tw/~miulab/s108-adl/syllabus.html";

    const video1 = "https://www.youtube.com/watch?v=ewNb46KswNo&feature=youtu.be";
    const video2 = "https://www.youtube.com/watch?v=nXRsd9DTSwA&feature=youtu.be";
    const video3 = "";


    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner" style={{ overflow: "scroll", height: "85vh" }}>
            <h3>Applied Deep Learning</h3>
            <p style={{color: "grey"}}>
              Course Website: <span> </span>
              <a href={websiteLink} target="_blank">(Spring, 2020)</a>
              <br/>
              Lectured supplementary courses with <a href={vivianLink} target="_blank">Yun-Nung (Vivian) Chen</a>
              <br/>
              Department of Computer Science and Information Engineering, 
              <br/>
              National Taiwan University
              <br/>
              <em>Note: the courses are taught in Mandarin, the materials are in Engish</em>
            </p>
            <div>
              <ul style={{listStyleType: "square" }}>
                <li>Optimization: <a href={slides1} target="_blank">slides</a>, <a href={video1} target="_blank">YouTube</a></li>
                <li>Practical Tips: <a href={slides2} target="_blank">slides</a>, <a href={video2} target="_blank">YouTube</a></li>
                <li>More on Embeddings: <a href={slides3} target="_blank">slides</a> </li>
              </ul> 
            </div>
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
