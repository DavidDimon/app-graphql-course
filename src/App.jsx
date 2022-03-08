import React from "react";
import { useQuery } from "@apollo/client";

import { jobs } from "./graphql/query";

const jobsInput = { type: "", slug: "" };

const App = () => {
  const { data, loading } = useQuery(jobs, { variables: { jobsInput } });

  return (
    <div>
      {loading
        ? "loading"
        : data?.jobs?.map((item) => (
            <React.Fragment key={item?.id}>
              {item?.title} <br />
            </React.Fragment>
          ))}
    </div>
  );
};

export default App;
