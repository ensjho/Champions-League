import React from 'react';
import { FormattedMessage } from 'react-intl';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <Img
        src="https://d107a8nc3g2c4h.cloudfront.net/blog/wp-content/uploads/2018/02/UEFA_Champions_League_banner.jpg"
        alt="react-boilerplate - championsleague"
      />
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/register">
          <FormattedMessage {...messages.newTeam} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
