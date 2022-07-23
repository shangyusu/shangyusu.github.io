import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';
import '../../assets/fonts/fontello-e52a555f/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      vk: author.vk,
      rss: author.rss,
      email: author.email
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={'https://www.github.com/shangyusu'} target="_blank" >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={'https://www.linkedin.com/in/shangyusu/'} target="_blank" >
              <i className="icon-linkedin" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={'https://scholar.google.com.tw/citations?user=5aGJKn4AAAAJ'} target="_blank" >
              <i className="icon-graduation-cap" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={'https://www.facebook.com/shangyusu.tw'} target="_blank" >
              <i className="icon-facebook" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={'https://www.instagram.com/shangyusu/'} target="_blank" >
              <i className="icon-instagram" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={'https://twitter.com/ShangYuSu'} target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
