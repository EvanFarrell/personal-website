import React from "react";
import { Link } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div class="container">
      <h1>Evan Farrell</h1>
      <p class="topol subtitle">{post.frontmatter.title} - {post.frontmatter.date}</p>
      <p class="topol">
      </p>
      <div dangerouslySetInnerHTML = {{ __html: post.html }}/>

      <br />
      <div class="links topol">
        <Link class="link" to="/essays/">
          back to essays
        </Link>
      </div>
    </div>
  );
};

export const query = graphql`query PostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      author
      date
    }
  }
}`;

{/* <h4 style={{color: 'rgb(165, 164, 164)'}}>{post.frontmatter.author} <span style={{fontSize: '0.8em'}}> -{post.frontmatter.date}</span></h4> */}
