import React from 'react';
import { Mutation } from 'react-apollo';

import { mutations, queries } from '../../store'

import Button from '../../components/button';

const { TOGGLE_CART, CANCEL_TRIP } = mutations
const { GET_LAUNCH_DETAILS } = queries

export const ActionButton = ({ isBooked, id, isInCart }) => {
  return (
    <Mutation
      mutation={isBooked ? CANCEL_TRIP : TOGGLE_CART}
      variables={{ launchId: id }}
      refetchQueries={[
        {
          query: GET_LAUNCH_DETAILS,
          variables: { launchId: id },
        },
      ]}
    >
      {(mutate, { loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>An error occurred</p>;

        return (
          <div>
            <Button
              onClick={mutate}
              isBooked={isBooked}
              data-testid={'action-button'}
            >
              {isBooked
                ? 'Cancel This Trip'
                : isInCart
                  ? 'Remove from Cart'
                  : 'Add to Cart'}
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
}
