import { useEffect, useState } from "react";
import { getPlanets, type PlanetInfo } from "../dal/api";

export function usePlanets() {
  const [swapi, setSwapi] = useState<Array<PlanetInfo> | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    getPlanets().then((json) => setSwapi(json.results));
  }, []);
  return { swapi, selectedId, setSelectedId };
}
