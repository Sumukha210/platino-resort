import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "@/assets/images/marker-icon.png";
import shadowUrl from "@/assets/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: iconUrl.src,
  shadowUrl: shadowUrl.src,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  return (
    <div className="Map my-4">
      <MapContainer
        center={[14.3812, 75.1022]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "80vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[14.3812, 75.1022]}>
          <Popup>
            <h2 className="font-weight-bold">Platino Resort</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
