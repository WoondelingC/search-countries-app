import { ContainerInput, InputSearch } from "../styles/App.style";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ searchCountry, onSearchChange, bg, mode }) => {
  return (
    <ContainerInput>
      <CiSearch
        style={{
          position: "absolute",
          left: "4.7rem",
          height: "100%",
        }}
      />
      <InputSearch
        type="text"
        placeholder="Search for a country..."
        value={searchCountry}
        onChange={(e) => onSearchChange(e.target.value)}
        bg={bg}
        color={mode === "dark" ? "white" : ""}
      />
    </ContainerInput>
  );
};

export default SearchBar;
