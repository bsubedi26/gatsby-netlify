import React from 'react';

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div className="blog-post__container">
        <img className="blog-post__header" src={frontmatter.image} alt="Header image"/>
        <div className="blog-post">
          <div
            className="blog-post__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        image
      }
    }
  }
`;
