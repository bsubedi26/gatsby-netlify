import React from "react";
import '../sass/main.scss';
import netlifyIdentity from 'netlify-identity-widget';

window.netlifyIdentity = netlifyIdentity
// You must run this once before trying to interact with the widget
netlifyIdentity.init()

export default () => (
  <div>
    <h1 className="heading-primary">Discover Editor</h1>
      <div data-netlify-identity-menu></div>
      <div data-netlify-identity-button>Login with Netlify Identity</div>
  </div>
)
