import { mapContext } from "./components/Map/Map";

export const getGeoCode = coords =>
  mapContext.geocode(coords).then(
    res => {
      let firstGeoObject = res.geoObjects.get(0);
      console.log("firstGeoObjects = ", firstGeoObject.properties.get("text"));

      if (firstGeoObject) {
        //return firstGeoObject.geometry.getCoordinates();
        return firstGeoObject.properties.get("text");
      }

      return null;
    },
    err => {
      console.log("Ошибка в api", err);
    }
  );
