import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./LocationPage.css";

export default function LocationPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCZ5SD8nTwgYyBnOpXxzzFB9AYDJNqPHmo",
  });

  const position = {
    lat: -23.58369,
    lng: -46.609885,
  };

  return (
    <div>
      <div className="section-title">
        <h3>Localização e contato</h3>
        <div className="underline"></div>
      </div>

      <div className="main-content">
        <p class="andress">
          Parque da Independência - Ipiranga, São Paulo - SP, 04263-000
        </p>
        <p class="phone">Numero: (11) 99999-9999</p>

        <div className="map">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "500px", height: "500px" }}
              center={position}
              zoom={16}
            >
              <Marker
                position={position}
                options={{
                  label: {
                    text: "Pizza Vini",
                    className: "map-marker",
                  },
                }}
              />
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
