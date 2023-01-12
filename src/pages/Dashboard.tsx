import { List } from "@/components/elements";
import { orderList } from "@/data";
import { useCallback, useEffect, useState } from "react";
import { getDistance, errorMessage, successMessage } from "@/utils";
const Dashboard = () => {
  const moviesList = orderList;

  const [distance, setDistance] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const distanceCached = useCallback(() => {
    getDistance(setDistance);
  }, [distance, navigator]);

  useEffect(() => {
    distanceCached();
  }, []);

  const validateDistanceFunction = () => {
    setLoading(true);
    const ASSIGNED_DISTANCE_METRES = 50000;

    if (distance && distance >= ASSIGNED_DISTANCE_METRES) {
      setLoading(false);
      errorMessage(distance);
    } else if (distance && distance < ASSIGNED_DISTANCE_METRES) {
      setLoading(false);
      successMessage(distance);
    }
  };

  return (
    <div className="w-full">
      <List
        title={"Movies for Sale"}
        moviesList={moviesList}
        validateFunc={validateDistanceFunction}
      />
    </div>
  );
};

export default Dashboard;
