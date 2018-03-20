import React from 'react';
import '../index.css';

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <div className="main-container mobile-responsive">
        <header role="banner">
          <div className="header-wrapper animation js_disabledflyout md-header-wrapper">
            <div className="header-content">
              <div className="logo-container">
                <div className="opener-container hidden-md">
                  <a
                    href="#"
                    className="dropdown-toggle panel-opener"
                    aria-haspopup="true"
                    aria-expanded="false"
                    role="button"
                  >
                    <span className="device-menu hidden-md">
                      <i className="icon-toggle" />Menu
                    </span>
                  </a>
                </div>
                <a
                  href="https://www.discover.com/?ICMPGN=PUB_HDR_HOME"
                  className="discover-logo"
                >
                  <img
                    id="flag"
                    src="//www.discover.com/global/images/discover-logo.png"
                    width="113"
                    height="18"
                    alt="discover logo"
                  />
                </a>
              </div>
              <div className="navbar-wrapper" role="navigation">
                <div className="opener-container hidden-sm hidden-xs">
                  <a
                    href="#"
                    className="dropdown-toggle panel-opener"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="desktop-menu ">
                      All Products<i className="icon-arrow" />
                    </span>
                  </a>
                </div>
                <ul className="right-nav nav navbar-nav" role="menubar">
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle mobile-accessibility preventDefaultBehaviour"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon-help" />
                      <span className="add-font">Help</span>
                    </a>
                  </li>
                  <li className="dropdown search-tab">
                    <a
                      href="#"
                      id="mobile-search-btn"
                      className="dropdown-toggle mobile-accessibility preventDefaultBehaviour"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      <i className="icon-search" />
                      <span className="add-font">Search</span>
                    </a>
                  </li>
                  <li className="desktop-extra-links">
                    <a
                      href="#"
                      className="log-in-link btn-primary"
                      role="button"
                      data-toggle="modal"
                      data-target=".login-modal"
                    >
                      Log In<span className="sr-only">Opens modal dialog</span>
                    </a>
                  </li>
                </ul>
              </div>
              <nav className="left-panel">
                <ul className="side-navigation" role="list">
                  <li className="dropdown search-tab">
                    <a href="#" className="search-link">
                      <i className="icon-search" />
                      <span>Search</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'none' }}
        >
          <defs>
            <symbol
              id="magnify-glass"
              className="magnify-glass"
              viewBox="0 0 103 103"
            >
              <circle className="circle" cx="38" cy="38" r="33.4" />
              <path className="handle" d="M60.5 60.5l39 39" />
            </symbol>
            <symbol id="arrow" className="arrow" viewBox="0 0 24 24">
              <path d="M24 11.79a1 1 0 0 0-.05-.16v-.05l-.07-.12-.05-.06-.08-.09-12-11a1 1 0 0 0-1.35 1.47L20.43 11H1a1 1 0 0 0 0 2h19.43l-10.1 9.26a1 1 0 0 0 1.35 1.47l12-11 .08-.09v-.06l.07-.12v-.05a1 1 0 0 0 .17-.17 1 1 0 0 0 0-.45z" />
            </symbol>
            <symbol id="triangle" viewBox="0 0 100 50">
              <polygon points="0,0 50,50 100,0" />
            </symbol>
            <symbol
              id="social-share"
              className="social-share"
              viewBox="0 0 55.7 61.3"
            >
              <path d="M11.3 30.7l33-19.4M44.3 50l-33-19.3" />
              <circle cx="11.3" cy="30.7" r="9.3" />
              <circle cx="44.3" cy="11.3" r="9.3" />
              <circle cx="44.3" cy="50" r="9.3" />
            </symbol>
            <symbol id="facebook" x="0px" y="0px" viewBox="0 0 20.2 35.8">
              <path d="M20.2,11l-0.7,5.5h-5.8c0,8.3,0,19.3,0,19.3H5.5c0,0,0-10.9,0-19.3H0V11h5.5V7.8c0-3,1-7.8,7.3-7.8l6.5,0v6.4c0,0-3.2,0-3.9,0c-0.7,0-1.6,0.3-1.6,1.8V11H20.2z" />
            </symbol>
            <symbol id="twitter" x="0px" y="0px" viewBox="0 0 32.1 26.3">
              <path d="M32.1,1.4c-0.9,1.3-1.8,4.2-3.1,5.1c0,0.3,0,0.6,0,0.9c0,8.8-6.7,18.9-18.9,18.9c-3.7,0-7.2-1.1-10.2-3 c3.5,0.4,7-0.5,9.8-2.7c-2.9-0.1-5.3-2-6.2-4.6c1,0.2,2,0.1,3-0.1c-3-0.6-5.3-3.3-5.3-6.5c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8 c-1.8-1.2-3-3.2-3-5.5c0-1.2,0.3-2.4,0.9-3.3c3.3,4,8.2,6.7,13.7,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.7,3-6.6,6.6-6.6 c1.9,0,3.6,0.8,4.8,2.1C28.7,1.8,32.1,1.4,32.1,1.4z" />
            </symbol>
            <symbol id="linkedin" x="0px" y="0px" viewBox="0 0 259.4 259">
              <path d="M4.2,86H58v173H4.2V86z M31.2,0c17.2,0,31.2,14,31.2,31.2s-14,31.2-31.2,31.2C13.9,62.4,0,48.4,0,31.2S13.9,0,31.2,0" />
              <path d="M91.8,86h51.5v23.7h0.7c7.2-13.6,24.7-27.9,50.9-27.9c54.4,0,64.5,35.8,64.5,82.4V259h-53.7v-84.1c0-20.1-0.3-45.9-27.9-45.9c-28,0-32.2,21.9-32.2,44.4V259H91.9L91.8,86L91.8,86z" />
            </symbol>
          </defs>
        </svg>
        <main
          id="main-content-rwd"
          role="main"
          tabIndex="-1"
          className="main-content article bg-grey content-container"
        >
          <article>
            <div className="nav-secondary ">
              <div
                className="nav-secondary__wrapper"
                data-sticky
                data-target=".nav-secondary"
              >
                <div className="container hidden-xs">
                  <div className="row">
                    <ul
                      id="nav-secondary__list"
                      className="nav-secondary__list"
                      aria-label="View Articles By Category"
                    >
                      <li className="nav-secondary__list-item">
                        <a
                          className="nav-secondary__link "
                          href="https://www.discover.com/credit-cards/resources/credit-card-tips"
                          aria-label="Credit Card Tips Category"
                        >
                          Credit Card Tips
                        </a>
                      </li>
                      <li className="nav-secondary__list-item">
                        <a
                          className="nav-secondary__link "
                          href="https://www.discover.com/credit-cards/resources/credit-scores"
                          aria-label="Credit Health Category"
                        >
                          Credit Health
                        </a>
                      </li>
                      <li className="nav-secondary__list-item">
                        <a
                          className="nav-secondary__link "
                          href="https://www.discover.com/credit-cards/resources/new-to-credit"
                          aria-label="New to Credit Category"
                        >
                          New to Credit
                        </a>
                      </li>
                      <li className="nav-secondary__list-item">
                        <a
                          className="nav-secondary__link "
                          href="https://www.discover.com/credit-cards/resources/lifestyle"
                          aria-label="Lifestyle Category"
                        >
                          Lifestyle
                        </a>
                      </li>
                      <li className="nav-secondary__list-item">
                        <a
                          className="nav-secondary__link "
                          href="https://www.discover.com/credit-cards/resources/from-discover"
                          aria-label="From Discover Category"
                        >
                          From Discover
                        </a>
                      </li>
                      <li className="nav-secondary__list-item apply__module">
                        <button
                          className="apply__link button"
                          aria-expanded="false"
                          aria-label="Apply Now. Use the up and down arrow keys to view Apply Now links. Tab or press escape to collapse list."
                        >
                          Apply Now
                          <svg
                            className="icon triangle"
                            viewBox="0 0 100 50"
                            focusable="false"
                          >
                            <use xlinkHref="#triangle" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <header
              className="marquee"
              style={{
                backgroundImage: `url(${frontmatter.image})`,
                minHeight: 400 + 'px'
              }}
            />
            <div
              id="article-content"
              className="article__container article__container--top"
              style={{ borderTopColor: 'transparent' }}
            >
              <aside id="social-share-links" className="article__social">
                <button
                  id="social-link-btn"
                  className="social__box social__box--share"
                  aria-pressed="false"
                  aria-label="Toggle Share Links"
                >
                  <svg className="icon social-share">
                    <use xlinkHref="#social-share" />
                  </svg>
                </button>
                <ul
                  id="social-links"
                  className="social__container"
                  aria-hidden="true"
                  aria-label="Links to share this article on social media."
                >
                  <li className="social__box social__box--facebook">
                    <a href="" className="facebook-link">
                      <span className="sr-only">
                        Share Article on Facebook. Opens in a new window.
                      </span>
                      <svg focusable="false" className="icon facebook">
                        <use xlinkHref="#facebook" />
                      </svg>
                    </a>
                  </li>
                  <li className="social__box social__box--twitter">
                    <a href="" className="twitter-link">
                      <span className="sr-only">
                        Share Article on Twitter. Opens in a new window.
                      </span>
                      <svg focusable="false" className="icon twitter">
                        <use xlinkHref="#twitter" />
                      </svg>
                    </a>
                  </li>
                  <li className="social__box social__box--linkedin">
                    <a href="" className="linkedin-link">
                      <span className="sr-only">
                        Share Article on LinkedIn. Opens in a new window.
                      </span>
                      <svg focusable="false" className="icon linkedin">
                        <use xlinkHref="#linkedin" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </aside>
              <div className="article__content">
                <div className="content">
                  <h1 className="article__header article__header--main text-center">
                    {frontmatter.title}
                  </h1>
                  <div
                    className="content-container"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </div>
              <footer className="article__disclaimer">
                <p>
                  <strong>Legal Disclaimer:</strong> This site is for
                  educational purposes and is not a substitute for professional
                  advice. The material on this site is not intended to provide
                  legal, investment, or financial advice and does not indicate
                  the availability of any Discover product or service. It does
                  not guarantee that Discover offers or endorses a product or
                  service. For specific advice about your unique circumstances,
                  you may wish to consult a qualified professional.
                </p>
              </footer>
            </div>
          </article>
        </main>
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
