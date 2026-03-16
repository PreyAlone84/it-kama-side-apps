type PlanetCardProps = {
  planetId: number | null;
  planetName: string;
  createdDate: string;
  hasPopulation: boolean;
  selectedId: number | null;
  setSelectedId: (selectedId: number | null) => void;
};

export const PlanetCard = ({
  planetId,
  planetName,
  createdDate,
  hasPopulation,
  selectedId,
  setSelectedId
}: PlanetCardProps) => {
  const handleClick = () => setSelectedId(planetId);
  return (
    <div
      className="card"
      style={{
        backgroundColor: hasPopulation ? "orange" : "",
        borderColor: selectedId === planetId ? "blue" : "black"
      }}
      onClick={handleClick}
    >
      <div className="card-row">
        <div className="card-title">Name:</div>
        <div className="card-value">{planetName}</div>
      </div>
      <div className="card-row">
        <div className="card-title">Has Population:</div>
        <div className="card-value">{hasPopulation ? "Yes" : "No"}</div>
      </div>
      <div className="card-row">
        <div className="card-title">CreatedDate:</div>
        <div className="card-value">{createdDate}</div>
      </div>
    </div>
  );
};
