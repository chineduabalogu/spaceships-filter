export interface SpaceShip {
  name: string;
  speed: string | number;
  color: string;
  dom: Date;
  laserBeam: boolean;
}

export interface SpaceshipProps {
  spaceship: SpaceShip;
}

export interface SpaceshipAppProps {
  spaceships: SpaceShip[];
}

export interface FilterQuery {
  name: string;
  colors: string[];
  speedLessThan: number | string;
  speedGreaterThan: number | string;
  speedEqualTo: number | string;
  pulseLaser: boolean | string;
  beforeDate: Date | string;
  afterDate: Date | string;
  exactDate: Date | string;
}

export interface FilterContainerProps {
  queryChangeHandler: (
    f: string,
    q: string | string[] | boolean | Date | number | null
  ) => void;
  query: FilterQuery;
  colors: string[];
}

export interface SpaceshipsContainerProps {
  spaceships: SpaceShip[];
  query: FilterQuery;
  colors: string[];
}
