import { gql } from '@apollo/client';

export const LANGUAGES = gql`
  query {
    languages {
      code
      name
      native
      rtl
    }
  }
`;

export const COUNTRIES = gql`
  query {
    countries {
      code
      name
      native
      phone
      continent {
        name
      }
      capital
      currency
      languages {
        code
        name
        native
        rtl
      }
      emoji
      states {
        code
        name
      }
    }
  }
`;

// export const CONTINENTS = gql``;
