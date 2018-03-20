import React from 'react';
import Link from 'gatsby-link';
// import '../sass/main.scss';

export default class IndexPage extends React.Component {
  renderLinks() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return posts.map(({ node }) => {
      return (
        <div key={node.id} className="links-container">
          <Link className="links" to={`/discover${node.fields.slug}`}>
            {node.frontmatter.title}
          </Link>
          <a href="#">Export files</a>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <h1 className="heading-primary">Discover Editor</h1>
          <div data-netlify-identity-button />
        </div>
        {this.renderLinks()}
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
