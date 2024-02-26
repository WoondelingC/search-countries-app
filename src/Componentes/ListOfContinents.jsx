import React from "react";
import { Options, SelectList } from "../styles/App.style";

const ListOfContinents = ({ handleContinent, valueSelect, bg, color }) => {
  const continents = [
    {
      value: "Africa",
    },
    {
      value: "Americas",
    },
    {
      value: "Asia",
    },
    {
      value: "Europe",
    },
    {
      value: "Oceania",
    },
    {
      value: "Antarctic",
    },
    {
      value: "Antarctic Ocean",
    },
    {
      value: "Polar",
    },
  ];

  return (
    <SelectList
      className="form-control"
      id="region"
      value={valueSelect}
      onChange={(e) => handleContinent(e.target.value)}
      bg={bg}
      color={color}
      required
    >
      <Options value="" disabled>
        Filter by Region
      </Options>
      {continents.map((tipo) => (
        <Options key={tipo.value} value={tipo.value}>
          {tipo.value}
        </Options>
      ))}
    </SelectList>
  );
};

export default ListOfContinents;
