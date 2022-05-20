import { gql } from '@apollo/client';

const GET_DATA = gql`
query{
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
      name
    }
    emoji
    emojiU
  }
  languages {
		name
		code
	}
	continents {
		name
		code
	}
}
`;

export default GET_DATA;