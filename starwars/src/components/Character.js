import React from "react";

function Character(props) {
  return (
    <div>
      <h2>Name: {props.character.name}</h2>
      <h3>Gender: {props.character.gender}</h3>
      <h3>Birth Year: {props.character.birth_year}</h3>
      <h3>Hair Color: {props.character.hair_color}</h3>
      <h3>Eye Color: {props.character.eye_color}</h3>
    </div>
  );
}

export default Character;
