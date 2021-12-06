import { gql } from "@apollo/client";

export const demo = gql`
  query getCompanyAbout {
    page: Page(where: { id: "6112210aa5cb562704f92ecc" }) {
      name
      url
      layouts {
        name
        property {
          name
          value
          key
          image {
            original: publicUrl
            thumbnail: publicUrlTransformed(transformation: { width: "64" })
          }
          content {
            name
            key
            value
            image {
              original: publicUrl
              thumbnail: publicUrlTransformed(transformation: { width: "64" })
            }
            content {
              name
              key
              value
            }
          }
        }
      }
    }
  }
`;
