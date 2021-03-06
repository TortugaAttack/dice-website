import React from 'react';
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const links = [
  {
    url: 'https://www.facebook.com/DiceUPB',
    text: 'Facebook',
    icon: FaFacebookF,
  },
  { url: 'https://twitter.com/DiceResearch', text: 'Twitter', icon: FaTwitter },
  { url: 'https://github.com/dice-group', text: 'GitHub', icon: FaGithub },
  {
    url: 'https://www.youtube.com/channel/UCDshdIaiXqwZsQ4Gl_70OMA',
    text: 'YouTube',
    icon: FaYoutube,
  },
];

const Social = ({ style, className, hiddenMobile = true }) => (
  <div
    className={`column is-flex social ${
      hiddenMobile ? 'is-hidden-mobile is-hidden-tablet-only' : ''
    }`}
    style={{
      position: 'fixed',
      left: 0,
      top: 96,
      height: 'calc(60% - 96px)',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      maxWidth: 50,
      margin: '0.5em',
      ...style,
    }}
  >
    {links.map(l => (
      <a key={l.url} href={l.url} title={l.text}>
        <span className="icon is-large">
          <l.icon size={25} />
        </span>
      </a>
    ))}
  </div>
);

export default Social;
