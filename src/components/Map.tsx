import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import MarkerPosition from "./MarkerPosition";
import { IProps } from "../types/globalTypes";


const Map: React.FC<IProps> = ({ address }) => { 
  return (
    <MapContainer
      center={[address.location.lat, address.location.lng]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "700px", width: "full" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerPosition address={address} />
    </MapContainer>
  );
};

export default Map;
