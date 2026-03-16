import { useEffect, useState } from "react";
import { getPlanet, type PlanetData } from "../dal/api";

export function useDetails(selectedId: number | null) {
  const [planetInfo, setPlanetInfo] = useState<PlanetData>({
    data: null,
    isLoading: false
  });

  useEffect(() => {
    if (selectedId === null) return;
    getPlanet(selectedId).then((json) =>
      setPlanetInfo({ data: json, isLoading: false })
    );
  }, [selectedId, setPlanetInfo]);

  return { planetInfo };
}
