import type { PlanetInfo } from "../dal/api";
import { PlanetCard } from "./PlanetCard";

type PlanetListProps = {
  list: Array<PlanetInfo> | null;
  selectedId: number | null;
  setSelectedId: (selectedId: number | null) => void;
};

export const PlanetList = ({
  list,
  selectedId,
  setSelectedId
}: PlanetListProps) => {
  return (
    <div className="cards">
      {list ? (
        list.map((planet) => (
          <PlanetCard
            key={planet.name}
            planetId={Number(
              planet.url
                .split("/")
                .filter((part) => part !== "")
                .pop()
            )}
            planetName={planet.name}
            createdDate={new Date(planet.created).toLocaleDateString()}
            hasPopulation={Number(planet.population) > 0}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))
      ) : (
        <>
          <span>Loading...</span>
        </>
      )}
    </div>
  );
};
