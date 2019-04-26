import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import { queries } from '../../store'

import { Loading, Header, LaunchTile } from '../../components';

const { GET_MY_TRIPS } =  queries

export const Profile = () => {
  return (
    <Query query={GET_MY_TRIPS} fetchPolicy="network-only">
      {({ data, loading, error }) => {
        if (loading) return <Loading />;
        if (error) return <p>ERROR: {error.message}</p>;

        return (
          <Fragment>
            <Header>My Trips</Header>
            {data.me && data.me.trips.length ? (
              data.me.trips.map(launch => (
                <LaunchTile key={launch.id} launch={launch} />
              ))
            ) : (
              <p>You haven't booked any trips</p>
            )}
          </Fragment>
        );
      }}
    </Query>
  );
}
