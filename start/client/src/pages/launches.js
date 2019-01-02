import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LaunchTile from '../components/launch-tile';
import Header from '../components/header';
import Button from '../components/button';
import Loading from '../components/loading';

const GET_LAUNCHES = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        id
        isBooked
        rocket {
          id
          name
        }
        mission {
          name
          missionPatch
        }
      }
    }
  }
`;

export default function Launches() {
  return (
    <Query query={GET_LAUNCHES}>
      {({ data, loading, error, fetchMore }) => {
        // same as above
      }}
    </Query>
  );
}
