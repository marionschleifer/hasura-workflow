import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_PROFILES = gql`
  query getProfiles {
    profiles {
      id
      name
    }
  }
`;

function Profiles() {
  const { loading, error, data } = useQuery(GET_PROFILES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
        {data.profiles.map(profile => (
            <li key={profile.id}>
                {profile.name}
            </li>
        ))}
    </ul>
  );
}

export default Profiles;