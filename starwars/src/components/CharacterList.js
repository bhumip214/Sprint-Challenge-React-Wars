import React, { Component } from "react";
import Character from "./Character";

function CharacterList(props) {
  return (
    <div className="charList">
      {props.starwarsChars.map(character => {
        return <Character character={character} />;
      })}
    </div>
  );
}

export default CharacterList;
