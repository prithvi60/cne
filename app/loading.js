import React from "react";
import { Spinner } from "@nextui-org/spinner";

const loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <Spinner
        label="Loading... Please Wait A Moment"
        size="lg"
        color="primary"
        labelColor="primary"
      />
      {/* Loading... Please Wait A Moment */}
    </div>
  );
};

export default loading;
