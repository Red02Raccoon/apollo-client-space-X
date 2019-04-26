import React from 'react';
import { Query } from 'react-apollo';

import { queries } from '../../store'

import LaunchTile from '../../components/launch-tile';

const { GET_LAUNCH } = queries

export const CartItem = ({ launchId }) => {
  return (
    <Query query={GET_LAUNCH} variables={{ launchId }}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>ERROR: {error.message}</p>;
        return data && <LaunchTile launch={data.launch} />;
      }}
    </Query>
  );
}
