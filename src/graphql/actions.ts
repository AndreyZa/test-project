import { gql } from '@apollo/client';

export const LANGUAGES = gql`
  query {
    languages {
      code
      name
      native
    }
  }
`;

export const COUNTRIES = gql`
  query {
    countries {
      name
      continent {
        name
      }
      capital
      currency
      languages {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;

export const CONTINENTS = gql`
  query {
    continents {
      name
      countries {
        name
        emoji
        states {
          name
        }
      }
    }
  }
`;
