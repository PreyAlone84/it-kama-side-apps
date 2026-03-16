import { useDetails } from "../bll/useDetails";

type DetailsProps = {
  selectedId: number | null;
};

export const Details = ({ selectedId }: DetailsProps) => {
  const { planetInfo } = useDetails(selectedId);

  return (
    <div className="details">
      <h3 style={{ margin: 0 }}>Planet Details</h3>
      <div>
        {planetInfo.data === null &&
          planetInfo.isLoading === false &&
          "No planet selected"}
        {planetInfo.isLoading === true && "Loading..."}
        {planetInfo.data !== null && planetInfo.isLoading === false && (
          <div>
            <div>Name:{planetInfo.data.name}</div>
            <div>Climate: {planetInfo.data.climate}</div>
            <div>Diameter: {planetInfo.data.diameter}</div>
            <div>Terrain: {planetInfo.data.terrain}</div>
            <div>Gravity: {planetInfo.data.gravity}</div>
            <div>Orbital period: {planetInfo.data.orbital_period}</div>
            <div>Rotation period: {planetInfo.data.rotation_period}</div>
            <div>Population: {planetInfo.data.population}</div>
          </div>
        )}
      </div>
    </div>
  );
};
