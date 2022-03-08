import { gql } from "@apollo/client";

export const jobs = gql`
  query jobs($jobsInput: JobsInput) {
    jobs(input: $jobsInput) {
      id
      title
    }
  }
`;
