import React, { PureComponent } from "react";
import Loader from "react-svg-spinner";
import { LoaderWrapp } from "./styledComponents";

export const LoaderContainer = props => (
  <LoaderWrapp>
    <div className="loader">
      <Loader
        size="70px"
        gap={4}
        color="rgba(23, 29, 230, 0.4)"
        thickness={2}
      />
      <div className="loading-title">{props.text}</div>
    </div>
  </LoaderWrapp>
);
