// @flow
import * as React from 'react';

type Props = {};

export default function UseGeolocation({}: Props) {
  const [geoLocation, setGeoLocation] = React.useState<GeolocationCoordinates>({
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 0,
    longitude: 0,
    speed: 0
  });
  const success = (position: GeolocationPosition) => {
    setGeoLocation(position.coords);
  };
  const error = (error: GeolocationPositionError) => {
    console.warn(`ERROR(${error.code}): ${error.message}`);
  };

  React.useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  return {
    geoLocation
  };
}
