import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Loader from "react-svg-spinner";

import List from "../List/List";
import Area from "../Area/Area";
import MapContainer from "../Map/Map";
import { LoaderContainer } from "../LoaderContainer/LoaderContainer";
import { ErrorBox } from "../ErrorBox/ErrorBox";

import {
  AppWrapper,
  ListWrapper,
  MapWrapper,
  LoaderWrapp,
  AreaWrapper
} from "./styledComponents";

import {
  getError,
  getFetching,
  isMapLoading,
  isGetRoute
} from "../../reducers";

export class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        {this.props.isMapLoading && <LoaderContainer text="Загрузка карты" />}
        <ListWrapper>
          <AreaWrapper>
            <Area />
            {this.props.isFetching && (
              <Loader
                data-name="listLoader"
                size="20px"
                gap={4}
                color="rgba(23, 29, 230, 0.8)"
                thickness={2}
              />
            )}
          </AreaWrapper>
          <List />
          {this.props.error.length > 0 && <ErrorBox error={this.props.error} />}
        </ListWrapper>
        <MapWrapper>
          {this.props.isGetRoute && (
            <LoaderContainer text="Получение маршрута" />
          )}
          <MapContainer />
        </MapWrapper>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getFetching(state),
  error: getError(state),
  isMapLoading: isMapLoading(state),
  isGetRoute: isGetRoute(state)
});
export default connect(
  mapStateToProps,
  null
)(App);
