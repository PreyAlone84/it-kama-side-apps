export type PlanetInfo = {
  url: string;
  name: string;
  climate: string;
  diameter: string;
  terrain: string;
  gravity: string;
  orbital_period: string;
  rotation_period: string;
  population: string;
  created: string;
};

export type PlanetsInfoResults = {
  results: Array<PlanetInfo>;
};

export const getPlanets = () => {
  const promise: Promise<PlanetsInfoResults> = fetch(
    "https://swapi.dev/api/planets",
    { headers: { Accept: "application/json" } }
  ).then((res) => res.json());
  return promise;
};

export type PlanetData = {
  data: PlanetInfo | null;
  isLoading: boolean;
};

export const getPlanet = (selectedId: number) => {
  const promise: Promise<PlanetInfo> = fetch(
    `https://swapi.dev/api/planets/${selectedId}`,
    { headers: { Accept: "application/json" } }
  ).then((res) => res.json());

  return promise;
};

