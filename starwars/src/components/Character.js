import React from "react";
import "./Character.css";

function Character(props) {
  return (
    <div className="charData">
      <div className="charName">
        <h2>Name: {props.character.name}</h2>
      </div>

      <h3>Gender: {props.character.gender}</h3>
      <h3>Birth Year: {props.character.birth_year}</h3>
      <h3>Hair Color: {props.character.hair_color}</h3>
      <h3>Eye Color: {props.character.eye_color}</h3>
    </div>
  );
}

export default Character;
