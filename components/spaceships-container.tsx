import { useEffect, useState } from "react";
import {
  SpaceShip,
  SpaceshipsContainerProps,
  FilterQuery,
} from "../types/space-ship";
import Spaceship from "./spaceship";

export default function SpaceshipsContainer({
  spaceships,
  query,
  colors,
}: SpaceshipsContainerProps) {
  const [filteredShips, setFilteredShips] = useState<SpaceShip[]>([]);

  const queryFilterMethods = {
    name: (a: SpaceShip, b: FilterQuery) => filterByName(a, b),
    colors: (a: SpaceShip, b: FilterQuery) => filterByColors(a, b),
    pulseLaser: (a: SpaceShip, b: FilterQuery) => filterByPulseLaser(a, b),
    beforeDate: (a: SpaceShip, b: FilterQuery) => filterByBeforeDate(a, b),
    afterDate: (a: SpaceShip, b: FilterQuery) => filterByAfterDate(a, b),
    exactDate: (a: SpaceShip, b: FilterQuery) => filterByExactDate(a, b),
    speedGreaterThan: (a: SpaceShip, b: FilterQuery) =>
      filterBySpeedGreaterThan(a, b),
    speedLessThan: (a: SpaceShip, b: FilterQuery) =>
      filterBySpeedLessThan(a, b),
    speedEqualTo: (a: SpaceShip, b: FilterQuery) => filterBySpeedEqualTo(a, b),
  };

  const queryObjectInvalid = (query: FilterQuery) => {
    const cond =
      query.name === "" &&
      query.colors.length === 0 &&
      query.pulseLaser === "" &&
      query.beforeDate === "" &&
      query.afterDate === "" &&
      query.exactDate === "" &&
      query.speedGreaterThan === "" &&
      query.speedLessThan === "" &&
      query.speedEqualTo === "";

    return cond;
  };

  const filterByName = (spaceship: SpaceShip, query: FilterQuery) => {
    return spaceship.name.toLowerCase().includes(query.name.toLowerCase());
  };

  const filterByColors = (spaceship: SpaceShip, query: FilterQuery) => {
    return query.colors.includes(spaceship.color);
  };

  const filterBySpeedLessThan = (spaceship: SpaceShip, query: FilterQuery) => {
    return query.speedLessThan > spaceship.speed;
  };

  const filterBySpeedEqualTo = (spaceship: SpaceShip, query: FilterQuery) => {
    return query.speedEqualTo == spaceship.speed;
  };

  const filterBySpeedGreaterThan = (
    spaceship: SpaceShip,
    query: FilterQuery
  ) => {
    return query.speedGreaterThan < spaceship.speed;
  };

  const filterByPulseLaser = (spaceship: SpaceShip, query: FilterQuery) => {
    return query.pulseLaser === spaceship.laserBeam;
  };

  const filterByBeforeDate = (spaceship: SpaceShip, query: FilterQuery) => {
    return query.beforeDate > spaceship.dom;
  };

  const filterByExactDate = (spaceship: SpaceShip, query: FilterQuery) => {
    // @ts-ignore: Unreachable code error
    return query.exactDate == spaceship.dom.substring(0, 10);
  };

  const filterByAfterDate = (spaceship: SpaceShip, query: FilterQuery) => {
    return query.afterDate < spaceship.dom;
  };

  const buildConditions = (query: FilterQuery) => {
    let arr: string[] = [];

    for (let [key, value] of Object.entries(query)) {
      if (value !== "" && key !== "colors") {
        arr.push(key);
      } else if (key === "colors" && value.length > 0) {
        arr.push(key);
      }
    }

    return arr;
  };

  useEffect(() => {
    if (!queryObjectInvalid(query)) {
      let conditions = buildConditions(query);

      const filteredSpaceships = spaceships.filter((spaceship) => {
        return conditions.every((f: string) =>
          // @ts-ignore: Unreachable code error
          queryFilterMethods[f](spaceship, query)
        );
      });
      setFilteredShips(filteredSpaceships);
    } else {
      setFilteredShips(spaceships);
    }
  }, [query, spaceships]);

  return (
    <div className="spaceships-container">
      {filteredShips.map((spaceship: SpaceShip) => (
        <Spaceship key={spaceship.name} spaceship={spaceship} />
      ))}
    </div>
  );
}
