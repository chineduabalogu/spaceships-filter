import { useEffect } from "react";
import { FilterContainerProps } from "../types/space-ship";

export default function FilterContainer({
  queryChangeHandler,
  query,
  colors,
}: FilterContainerProps) {
  const handleQueryChange = (
    forState: string,
    val: string | string[] | boolean | Date | number | null
  ) => {
    switch (forState) {
      case "name":
        return queryChangeHandler("name", val);
      case "colors":
        return queryChangeHandler("colors", val);
      case "pulseLaser":
        return queryChangeHandler("pulseLaser", val);
      case "beforeDate":
        return queryChangeHandler("beforeDate", val);
      case "exactDate":
        return queryChangeHandler("exactDate", val);
      case "afterDate":
        return queryChangeHandler("afterDate", val);
      case "speedGreaterThan":
        return queryChangeHandler("speedGreaterThan", val);
      case "speedLessThan":
        return queryChangeHandler("speedLessThan", val);
      case "speedEqualTo":
        return queryChangeHandler("speedEqualTo", val);
    }
  };

  return (
    <div className="filter-container">
      <input
        placeholder="Search Spaceships"
        value={query.name as string}
        onChange={(e) => handleQueryChange("name", e.target.value)}
      />
      <select
        multiple={true}
        value={query.colors as string[]}
        onChange={(e) => handleQueryChange("colors", e.target.value)}
      >
        {colors.map((color: string) => (
          <option key={color}>{color}</option>
        ))}
      </select>
      <label>Pulse Laser: </label>
      <input
        type="checkbox"
        value={`${query.pulseLaser}`}
        onChange={(e) => handleQueryChange("pulseLaser", e.target.checked)}
      />
      {(query.pulseLaser === true || query.pulseLaser === false) && (
        <span onClick={() => queryChangeHandler("pulseLaser", "")}>
          <u style={{ color: "red" }}>clear laser x</u>
        </span>
      )}
      <input
        type="number"
        placeholder="Speed less than"
        min="50"
        max="200"
        value={query.speedLessThan as string}
        onChange={(e) => handleQueryChange("speedLessThan", e.target.value)}
      />
      <input
        type="number"
        placeholder="Speed equal to"
        min="50"
        max="200"
        value={query.speedEqualTo as string}
        onChange={(e) => handleQueryChange("speedEqualTo", e.target.value)}
      />
      <input
        type="number"
        placeholder="Speed greater than"
        min="50"
        max="200"
        value={query.speedGreaterThan as string}
        onChange={(e) => handleQueryChange("speedGreaterThan", e.target.value)}
      />
      <label>Before DOM: </label>
      <input
        type="date"
        placeholder="Before DOM"
        min="1980-01-01"
        max="2020-01-01"
        value={query.beforeDate as string}
        onChange={(e) => handleQueryChange("beforeDate", e.target.value)}
      />
      <label>Exact DOM: </label>
      <input
        type="date"
        placeholder="Exact DOM"
        min="1980-01-01"
        max="2020-01-01"
        value={query.exactDate as string}
        onChange={(e) => handleQueryChange("exactDate", e.target.value)}
      />
      <label>After DOM: </label>
      <input
        type="date"
        placeholder="After DOM"
        min="1980-01-01"
        max="2020-01-01"
        value={query.afterDate as string}
        onChange={(e) => handleQueryChange("afterDate", e.target.value)}
      />
      <span>
        Query: <pre>{JSON.stringify(query)}</pre>
      </span>
    </div>
  );
}
