import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import { queries } from '../../store'

import { Loading, Header, LaunchDetail } from '../../components';
import { ActionButton } from '../../containers';

const { GET_LAUNCH_DETAILS } = queries

export const Launch = ({ launchId }) => {
  return (
    <Query query={GET_LAUNCH_DETAILS} variables={{ launchId }}>
      {({ data, loading, error }) => {
        if (loading) return <Loading />;
        if (error) return <p>ERROR: {error.message}</p>;

        return (
          <Fragment>
            <Header image={data.launch.mission.missionPatch}>
              {data.launch.mission.name}
            </Header>
            <LaunchDetail {...data.launch} />
            <ActionButton {...data.launch} />
          </Fragment>
        );
      }}
    </Query>
  );
}
