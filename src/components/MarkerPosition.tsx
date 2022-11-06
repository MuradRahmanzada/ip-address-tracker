import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";

import { IProps } from "../types/globalTypes";
import Icon from "./Icon";


const MarkerPosition: React.FC<IProps> = ({ address }) => {

  const position: LatLngTuple | undefined = useMemo(() => {
    return [address.location.lat, address.location.lng];
  }, [address.location.lat, address.location.lng]);

  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);
  return (
    <>
      <Marker icon={Icon} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};

export default MarkerPosition;
