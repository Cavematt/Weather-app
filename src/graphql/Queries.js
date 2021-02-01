import { gql } from "@apollo/client";

//write your query inbetween backticks `
//basically query getcitybyname first time sets first name of response then type of response
//second calls the above function then with the dynamic name

export const GET_WEATHER_QUERY = gql`
  query getCityByName($name: String!) { 
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

