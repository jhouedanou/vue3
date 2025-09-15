import gql from 'graphql-tag';
export const QUERY_LAUNCHES = gql`
query Launches {
    launches {
        details
        launch_date_utc
        launch_year
        }
    }
        