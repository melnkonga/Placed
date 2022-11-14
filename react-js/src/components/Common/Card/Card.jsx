import React from "react";
import Proptype from 'prop-types';
import './Card.css';
import { FaRegPaperPlane } from 'react-icons/fa';

const Card = (props) => {
    const { title, picture, startTripDate, endTripDate, likeCount, width, height } = props;
  return (
    <div 
        className="card" 
        style={{ 
            width: width ?? 300, 
            height: height ?? 350 
            }}>
        <img src={picture} alt={title} className="card-picture" />
        <h2>{title}</h2>
        <p>{startTripDate} - {endTripDate}</p>
        <div className="flex-row gap-10">
            <FaRegPaperPlane className="cursor" />
            <p>{likeCount}</p>
        </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
    title: Proptype.string.isRequired,
    picture: Proptype.string.isRequired,
    startTripDate: Proptype.string.isRequired,
    endTripDate: Proptype.string,
    width: Proptype.string,
    height: Proptype.string
  };