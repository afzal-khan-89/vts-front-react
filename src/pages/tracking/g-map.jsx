import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FaCarSide } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Tab, Tabs } from "../../common/tabs";
import CarDetailsInfo from "../../components/tracking-ui/car-details";
import HistoryUI from "../../components/tracking-ui/history";
import VehicleUi from "../../components/tracking-ui/vehicle";

const Tracking = () => {
  const mapRef = useRef();
  const [formVisible, setFormVisible] = useState(false);
  const [mapZoom, setMapZoom] = useState(8);
  const [center, setCenter] = useState({ lat: 23.3453453, lng: 90.543433 });
  // const center = useMemo(() => ({ lat: 23.3453453, lng: 90.543433 }), []);
  const options = useMemo(
    () => ({
      mapId: "4e550a138db6cc0a",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onload = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const toggleTrackModal = () => {
    setFormVisible((prevState) => !prevState);
  };

  // History Functionalities Start
  const [singleCarHistory, setSingleCarHistory] = useState([]); // store single car history
  const [vehicleInfo, setVehicleInfo] = useState(null); // store vehicle info
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [directions, setDirections] = useState(null);

  const [startPointInfoWindowOpen, setStartPointInfoWindowOpen] =
    useState(true);
  const [endPointInfoWindowOpen, setEndPointInfoWindowOpen] = useState(true);

  console.log("My Directions ----> ", vehicleInfo?.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://176.58.99.231/api/v1/location/history"
        );
        setVehicleInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!singleCarHistory) {
    return null; // Handle case where data is null
  }

  // History Functionalities End

  const startPoint = singleCarHistory[0];
  const endPoint = singleCarHistory[singleCarHistory.length - 1];

  return (
    <div className="bg-[#E9F8F3B2]">
      <div className="w-full py-14 m-auto px-4 md:px-0">
        <div className="mt-6 relative">
          <div id="map" style={{ width: "100%", height: "100%" }}>
            <GoogleMap
              zoom={mapZoom}
              center={center}
              mapContainerClassName="map-container"
              options={options}
              onload={onload}
            >
              {directions && (
                <DirectionsRenderer
                  directions={directions}
                  options={{
                    polylineOptions: {
                      zIndex: 50,
                      strokeColor: "red",
                      // strokeOpacity: 1,
                      strokeWeight: 10,
                    },
                    suppressMarkers: true,
                  }}
                />
              )}

              {/* Start Point */}
              {startPoint && (
                <InfoWindow
                  position={{
                    lat: parseFloat(startPoint.latitude),
                    lng: parseFloat(startPoint.longitude),
                  }}
                  onCloseClick={() => setStartPointInfoWindowOpen(false)}
                  options={{ maxWidth: 200 }}
                  visible={startPointInfoWindowOpen}
                >
                  <div>
                    <p>Start Point</p>
                  </div>
                </InfoWindow>
              )}

              {/* End Point */}
              {endPoint && (
                <InfoWindow
                  position={{
                    lat: parseFloat(endPoint.latitude),
                    lng: parseFloat(endPoint.longitude),
                  }}
                  onCloseClick={() => setEndPointInfoWindowOpen(false)}
                  options={{ maxWidth: 200 }}
                  visible={endPointInfoWindowOpen}
                >
                  <div>
                    <p>End Point</p>
                  </div>
                </InfoWindow>
              )}

              {singleCarHistory.map((car, i) => (
                <React.Fragment key={i}>
                  <Marker
                    position={{
                      lat: parseFloat(car.latitude),
                      lng: parseFloat(car.longitude),
                    }}
                    icon={{
                      url: "/src/assets/car-icon.png", // URL to your custom icon image
                      scaledSize: new window.google.maps.Size(40, 40), // Size of the icon
                    }}
                    onClick={() => setSelectedMarker(car)}
                  />
                </React.Fragment>
              ))}

              {selectedMarker && (
                <InfoWindow
                  position={{
                    lat: parseFloat(selectedMarker.latitude),
                    lng: parseFloat(selectedMarker.longitude),
                  }}
                  onCloseClick={() => setSelectedMarker(null)}
                >
                  <div>
                    <p>AC: {selectedMarker.ac}</p>
                    <p>Engin: {selectedMarker.engine}</p>
                    <p>Fuel: {selectedMarker.fuel}</p>
                    <p>Speed: {selectedMarker.speed}</p>
                    <p>Time: {selectedMarker.time}</p>
                    <p>Latitude: {selectedMarker.latitude}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
        </div>

        {/* Single Car Details */}
        {selectedMarker && <CarDetailsInfo selectedMarker={selectedMarker} />}

        {/* Track Modal */}
        <div
          className={`absolute ${
            formVisible ? "bottom-0 left-0" : "bottom-4 left-4"
          } text-white py-2 rounded`}
        >
          <div className="flex items-center justify-center">
            <div className="w-full">
              <div
                className={`formbold-form-wrapper mx-auto ${
                  formVisible ? "" : "hidden"
                } w-[420px] h-[75vh] rounded-lg border border-[#e0e0e0] bg-white`}
              >
                <div className="flex items-center justify-between rounded-t-lg bg-[#6A64F1] py-2 px-4">
                  <h3 className="text-xl font-medium text-white">
                    All Tracking Info
                  </h3>
                  <button onClick={toggleTrackModal} className="text-white">
                    <IoMdClose />
                  </button>
                </div>
                <Tabs>
                  <Tab
                    label="Vehicle"
                    // icon={<FiInfo size={24} color="green" />}
                  >
                    <VehicleUi />
                  </Tab>
                  <Tab
                    label="Markers"
                    // icon={<FiInfo size={24} color="green" />}
                  >
                    <h3 className="py-4 text-red-700">
                      Markers Tab Lorem ipsum dolor sit amet. Markers Tab Lorem
                      ipsum dolor sit amet.
                    </h3>
                  </Tab>
                  <Tab
                    label="History"
                    // icon={<FiInfo size={24} color="green" />}
                  >
                    <HistoryUI
                      vehicleHistory={vehicleInfo.data.slice(0, 20)}
                      setSingleCarHistory={setSingleCarHistory}
                      vehicleInfo={vehicleInfo}
                      setMapZoom={setMapZoom}
                      setCenter={setCenter}
                      setDirections={setDirections}
                      startPoint={startPoint}
                      endPoint={endPoint}
                    />
                  </Tab>
                </Tabs>
              </div>
              <div
                className={`mx-auto mt-12 flex max-w-[550px] items-center justify-end space-x-5 ${
                  formVisible ? "hidden" : ""
                }`}
              >
                <button
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#6A64F1] text-white"
                  onClick={toggleTrackModal}
                >
                  <FaCarSide size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
