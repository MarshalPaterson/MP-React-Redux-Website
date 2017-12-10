import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <footer>
        <span id="footer-text-wrap">
        Built by <a href="https://github.com/MarshalPaterson/MP-React-Redux-Website" target="_blank"><u>{personalInfo.name}</u></a>.
        </span>
        <br /><br/>
      </footer>
    );
  }
}
