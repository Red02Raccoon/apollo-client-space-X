import React from 'react';
import styled from 'react-emotion';

import { LogoutButton } from '../containers';
import MenuItem from './menu-item';

import { colors, unit } from '../styles/global';

import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';

const menu = [{
    title: 'Home',
    path: '/',
    icon: <HomeIcon/>,
  },
  {
    title: 'Cart',
    path: '/cart',
    icon: <CartIcon/>,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <ProfileIcon/>,
  }
]

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        {menu.map((item, index) =>  <MenuItem to={item.path} key={index}>{item.icon}{item.title}</MenuItem>)}
        <LogoutButton />
      </InnerContainer>
    </Container>
  );
}

const Container = styled('footer')({
  flexShrink: 0,
  marginTop: 'auto',
  backgroundColor: 'white',
  color: colors.textSecondary,
  position: 'sticky',
  bottom: 0,
});

const InnerContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  maxWidth: 460,
  padding: unit * 2.5,
  margin: '0 auto',
});
