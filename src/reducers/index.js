import { handleActions } from "redux-actions";

import {
  setPlace,
  receivedData,
  receivedError,
  sortData,
  mapLoaded,
  getRoute,
  setCenter
} from "../actions";

const initialState = {
  mapItems: [],
  fetchItem: false,
  error: "",
  mapLoading: true,
  getRoute: false,
  center: []
};

export default handleActions(
  {
    [mapLoaded]: (state, action) => ({
      ...state,
      mapLoading: false,
      center: action.payload
    }),
    [getRoute]: (state, action) => ({
      ...state,
      getRoute: action.payload
    }),
    [setPlace]: (state, action) => ({
      ...state,
      fetchItem: true,
      error: "",
      getRoute: false
    }),
    [receivedData]: (state, action) => ({
      ...state,
      fetchItem: false,
      error: "",
      getRoute: false,
      mapItems: [...state.mapItems, action.payload]
    }),
    [receivedError]: (state, action) => ({
      ...state,
      fetchItem: false,
      getRoute: false,
      error: action.payload
    }),
    [sortData]: (state, action) => ({
      ...state,
      error: "",
      getRoute: false,
      mapItems: action.payload
    }),
    [setCenter]: (state, action) => ({
      ...state,
      center: action.payload
    })
  },
  initialState
);

// Selectors
export const getFetching = state => state.fetchItem;
export const getError = state => state.error;
export const getItems = state => state.mapItems;
export const isMapLoading = state => state.mapLoading;
export const isGetRoute = state => state.getRoute;
export const getCenter = state => state.center;
