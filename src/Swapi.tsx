import "./styles.css";
import { PlanetList } from "./ui/PlanetList";
import { Details } from "./ui/Details";
import { ResetButton } from "./ui/ResetButton";
import { usePlanets } from "./bll/usePlanets";

export const Swapi = () => {
  const { swapi, selectedId, setSelectedId } = usePlanets();

  const handleReset = () => {
    setSelectedId(null);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ResetButton onClick={handleReset} />
      <div className="container">
        <PlanetList
          list={swapi}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Details selectedId={selectedId} />
      </div>
    </div>
  );
};
