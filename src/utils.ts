import { toast } from "react-toastify";

export const getDistance = (
  setDistance: React.Dispatch<React.SetStateAction<number>>
) => {
  const ASSIGNED_LATITUDE = 6.4253;
  const ASSIGNED_LONGITUE = 3.4095;

  //Using HAVERSINE FORMULA
  //   https://www.movable-type.co.uk/scripts/latlong.html

  const calculateDistanceBetweenTwoPoints = (
    firstLatitude: number,
    firstLongitude: number
  ) => {
    return (secondLatitude: number, secondLongitude: number) => {
      if (
        firstLatitude == secondLatitude &&
        firstLongitude == secondLongitude
      ) {
        return 0;
      }

      const R = 6371; // km (change this constant to get miles)
      const dLat = ((secondLatitude - firstLatitude) * Math.PI) / 180;
      const dLon = ((secondLongitude - firstLongitude) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((firstLatitude * Math.PI) / 180) *
          Math.cos((secondLatitude * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      // distance returned in metres
      return Math.round(distance * 1000);
    };
  };

  const calculateDistance = calculateDistanceBetweenTwoPoints(
    ASSIGNED_LATITUDE,
    ASSIGNED_LONGITUE
  );

  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      const value = calculateDistance(
        position.coords.latitude,
        position.coords.longitude
      );

      setDistance(value);
    },
    () => {
      alert(
        "Position could not be determined. Please confirm you have granted your browser access to your Location"
      );
    }
  );
};

export const successMessage = (distance: number) => {
  toast.success(
    `Your order has been placed since you are ${distance} metres within the Defined Location.`,
    {
      position: toast.POSITION.TOP_RIGHT,
    }
  );
};

export const errorMessage = (distance: number) => {
  toast.error(
    `Your order could not be placed because you are ${distance} metres away from the Defined Location.`,
    {
      position: toast.POSITION.TOP_RIGHT,
    }
  );
};
