import React from 'react';
import { Mutation } from 'react-apollo';

import { mutations, queries } from '../../store'

import Button from '../../components/button';

const { BOOK_TRIPS } = mutations
const { GET_LAUNCH } = queries

export const BookTrips = ({ cartItems }) => {
  return (
    <Mutation
      mutation={BOOK_TRIPS}
      variables={{ launchIds: cartItems }}
      refetchQueries={cartItems.map(launchId => ({
        query: GET_LAUNCH,
        variables: { launchId },
      }))}
      update={cache => {
        cache.writeData({ data: { cartItems: [] } });
      }}
    >
      {(bookTrips, { data, loading, error }) =>
        data && data.bookTrips && !data.bookTrips.success ? (
          <p data-testid="message">{data.bookTrips.message}</p>
        ) : (
          <Button onClick={bookTrips} data-testid="book-button">
            Book All
          </Button>
        )
      }
    </Mutation>
  );
}
