import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import { Launch, Launches, Cart, Profile } from '../../pages'
import { Footer, PageWrap } from '../../components';

export const PagesContainer = () => {
  return (
    <Fragment>
      <PageWrap>
        <Router primary={false} component={Fragment}>
          <Launches path="/" />
          <Launch path="launch/:launchId" />
          <Cart path="cart" />
          <Profile path="profile" />
        </Router>
      </PageWrap>
      <Footer />
    </Fragment>
  );
}
