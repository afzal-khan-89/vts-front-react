import React, { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Tab, Tabs } from "../../common/tabs";
import VehicleUi from "../../components/tracking-ui/vehicle";

const Tracking = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleChatbox = () => {
    setFormVisible((prevState) => !prevState);
  };

  useEffect(() => {
    // Load the Google Maps JavaScript API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    window.document.body.appendChild(script);

    // Initialize the map
    script.onload = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 23.3453453, lng: 90.543433 },
        zoom: 8,
      });
    };

    return () => {
      window.document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#E9F8F3B2]">
      <div className="w-full py-14 m-auto px-4 md:px-0">
        <div className="mt-6 relative">
          <div id="map" style={{ width: "100%", height: "100vh" }} />
        </div>

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
                  <button onClick={toggleChatbox} className="text-white">
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
                    <h3 className="py-4 text-red-700">
                      Markers Tab Lorem ipsum dolor sit amet. Markers Tab Lorem
                      ipsum dolor sit amet.
                    </h3>
                    <h3 className="py-4 text-red-700">
                      Markers Tab Lorem ipsum dolor sit amet. Markers Tab Lorem
                      ipsum dolor sit amet.
                    </h3>
                    <h3 className="py-4 text-red-700">
                      Markers Tab Lorem ipsum dolor sit amet.
                    </h3>
                    <h3 className="py-4 text-red-700">
                      Markers Tab Lorem ipsum dolor sit amet.
                    </h3>
                    <h3 className="py-4 text-red-700">Markers Tab</h3>
                    <h3 className="py-4 text-red-700">Markers Tab</h3>
                    <h3 className="py-4 text-red-700">Markers Tab</h3>
                    <h3 className="py-4 text-red-700">Markers Tab</h3>
                    <h3 className="py-4 text-red-700">Markers Tab</h3>
                  </Tab>
                  <Tab
                    label="History"
                    // icon={<FiInfo size={24} color="green" />}
                  >
                    <div className="py-4 text-red-700">History Tab</div>
                  </Tab>
                </Tabs>
                {/* <form className="py-6 px-9">
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Explain your queries"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div>
                    <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Start Chat
                    </button>
                  </div>
                </form> */}
              </div>
              <div
                className={`mx-auto mt-12 flex max-w-[550px] items-center justify-end space-x-5 ${
                  formVisible ? "hidden" : ""
                }`}
              >
                <button
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#6A64F1] text-white"
                  onClick={toggleChatbox}
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