import { useState } from "react";
import { SpaceshipAppProps, FilterQuery } from "../types/space-ship";
import FilterContainer from "./filter-container";
import SpaceshipsContainer from "./spaceships-container";

const defaultQuery = {
  name: "",
  colors: [],
  pulseLaser: "",
  beforeDate: "",
  afterDate: "",
  exactDate: "",
  speedGreaterThan: "",
  speedLessThan: "",
  speedEqualTo: "",
};

export default function SpaceshipApp({ spaceships }: SpaceshipAppProps) {
  const [query, setQuery] = useState<FilterQuery>(defaultQuery);

  const colors = (): string[] => {
    const colorsArr = spaceships.map((spaceship) => spaceship.color);
    const arrSet = Array.from(new Set(colorsArr));

    arrSet.push("none");
    return arrSet;
  };

  const handeQueryUpdate = (
    forState: string,
    val: string | string[] | boolean | Date | number | null
  ) => {
    switch (forState) {
      case "name":
        return setQuery((prevQuery) => ({ ...prevQuery, name: val as string }));
      case "colors":
        if (val === "none") {
          return setQuery((prevQuery) => ({
            ...prevQuery,
            colors: [],
          }));
        }

        if (query.colors.includes(val as string)) {
          query.colors.splice(query.colors.indexOf(val as string), 1);

          return setQuery((prevQuery) => ({
            ...prevQuery,
            colors: [...query.colors] as string[],
          }));
        }

        return setQuery((prevQuery) => ({
          ...prevQuery,
          colors: [...prevQuery.colors, val] as string[],
        }));
      case "pulseLaser":
        return setQuery((prevQuery) => ({
          ...prevQuery,
          pulseLaser: val as boolean | string,
        }));
      case "beforeDate":
        return setQuery((prevQuery) => ({
          ...prevQuery,
          beforeDate: val as Date,
        }));
      case "exactDate":
        return setQuery((prevQuery) => ({
          ...prevQuery,
          exactDate: val as Date,
        }));
      case "afterDate":
        return setQuery((prevQuery) => ({
          ...prevQuery,
          afterDate: val as Date,
        }));
      case "speedGreaterThan":
        return setQuery((prevQuery) => ({
          ...prevQuery,
          speedGreaterThan: val as number,
        }));
      case "speedLessThan":
        return setQuery((prevQuery) => ({
          ...prevQuery,
          speedLessThan: val as number,
        }));
      case "speedEqualTo":
        return setQuery((prevQuery) => ({
          ...prevQuery,
          speedEqualTo: val as number,
        }));
    }
  };

  return (
    <>
      <FilterContainer
        queryChangeHandler={handeQueryUpdate}
        query={query}
        colors={colors()}
      />
      <SpaceshipsContainer
        spaceships={spaceships}
        query={query}
        colors={colors()}
      />
    </>
  );
}
