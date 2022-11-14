import React from "react";
import Card from "../../Common/Card/Card";
import './Trip.css';
import data from './data.js';
import Modal from 'react-modal';
import { BiMessageAlt } from 'react-icons/bi';
import { SlPlane } from 'react-icons/sl';
import { VscDebugStart } from 'react-icons/vsc';
import { BsCalendarPlus } from 'react-icons/bs';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/features.json";

// https://www.worldatlas.com/articles/top-coffee-producing-countries.html
const highlighted = [
  "FRA",
  "USA",
  "CMR",
  "ESP"
];

const Trip = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const tripsCardsList = data.tripsList.map((trip) =>
    <Card 
          key={trip.id}
          title={trip.title}
          picture={trip.picture}
          startTripDate={trip.startTripDate}
          endTripDate={trip.endTripDate}
          flagPicture={trip.flagPicture} 
    />
  );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="trip">
      <div className="user-profile-content">
        <div className="user-profile-resume">
          <img className="user-profile-picture" src="https://www.technary.com/wp-content/uploads/2017/02/What-is-a-command-key-in-Mac.jpeg" alt="profile" />
          <div className="user-profile-info">
            <h2>mel.nkonga</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et.</p>
            <div className="user-profile-popularity">
              <div className="user-profile-popularity-item">
                <BiMessageAlt />
                <p>12k</p>
              </div>
              <div className="user-profile-popularity-item">
                <SlPlane />
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
        <ComposableMap className="user-map">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHighlighted = highlighted.indexOf(geo.id) !== -1;
                return (
                  <Geography 
                    key={geo.rsmKey} 
                    geography={geo}
                    fill={isHighlighted ? "#2471a3" : "#e5e7e9"}
                    stroke="#2471a3"
                    strokeWidth={0.3}
                  />
                )
                })
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div className="trip-action">
        <button onClick={openModal} className="add-trip-button"><VscDebugStart /></button>
        <button onClick={openModal} className="add-trip-button"><BsCalendarPlus /></button>
      </div>
      <div className="trip-card-list">
        {tripsCardsList}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <p>COUCOU !</p>
      </Modal>
    </div>
  );
};

export default Trip;
