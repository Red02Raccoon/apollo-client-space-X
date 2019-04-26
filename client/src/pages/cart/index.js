import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import { queries } from '../../store'

import { Header, Loading } from '../../components';
import { CartItem, BookTrips } from '../../containers';

const { GET_CART_ITEMS } = queries

export const Cart = () => {
  return (
    <Query query={GET_CART_ITEMS}>
      {({ data, loading, error }) => {
        if (loading) return <Loading />;
        if (error) return <p>ERROR: {error.message}</p>;
        return (
          <Fragment>
            <Header>My Cart</Header>
            {!data.cartItems || !data.cartItems.length ? (
              <p data-testid="empty-message">No items in your cart</p>
            ) : (
              <Fragment>
                {data.cartItems.map(launchId => (
                  <CartItem key={launchId} launchId={launchId} />
                ))}
                <BookTrips cartItems={data.cartItems} />
              </Fragment>
            )}
          </Fragment>
        );
      }}
    </Query>
  );
}
