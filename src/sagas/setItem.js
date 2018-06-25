import { takeLatest, put, call } from "redux-saga/effects";
import { setPlace, receivedData, receivedError } from "../actions";

import { getGeoCode } from "../api";

function* setItemFlow(action) {
  try {
    // Get coords for geoobject
    const response = yield call(getGeoCode, action.payload.coords);

    if (response === null) {
      // Dispath Error
      yield put(receivedError("Объект не найден"));
    } else {
      // Dispath action with data
      yield put(
        receivedData({
          name: action.payload.name,
          coords: action.payload.coords,
          place: response
        })
      );
    }
  } catch (error) {
    // Dispatch error
    yield put(receivedError("Ошибка при выполнении запроса"));
  }
}

export function* setItemWatch() {
  yield takeLatest(setPlace, setItemFlow);
}
