import { useEffect, useState } from "react";
import {
  Box,
  Container,
  ContainerApp,
  GlobalStyles,
  Line,
} from "../styles/App.style";
import Card from "./Card";
import SearchBar from "./SearchInput";
import ListOfContinents from "./ListOfContinents";
import Header from "./Header";
import BounceLoader from "react-spinners/BounceLoader";
import CardDetail from "./CardDetail";
import ButtomBack from "./ButtomBack";
import { modeColors } from "../styles/ModeColors";

const url = "https://api-fake-test.vercel.app/datos";

const BodyApp = () => {
  const [dataCountries, setDataCountries] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [continent, setContinent] = useState("");
  const [detailCard, setDetailCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [mode, setMode] = useState("light");

  const handleSearchCountry = (valueCountry) => {
    setSearchCountry(valueCountry);

    const dataFiltered = initialData.filter((country) =>
      country.name.toLowerCase().includes(valueCountry.toLowerCase())
    );

    setDataCountries(dataFiltered);

    console.log(dataFiltered, "Filtro");
  };

  const handleContinent = (value) => {
    setContinent(value);
    const newData = initialData.filter((country) => country.region === value);
    setDataCountries(newData);
    console.log(newData, value, initialData, "continente");
  };

  const handleDetail = (detail) => {
    setDetailCard(detail);
    setShowDetail(true);
  };

  const BackEvent = () => {
    setShowDetail(false);
  };

  const getCountries = async () => {
    try {
      const response = await fetch(url);

      // Verifica si la solicitud fue exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error("Error en la solicitud a la API");
      }

      const data = await response.json();
      setDataCountries(data);
      setInitialData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error.message);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <GlobalStyles
        bg={
          mode === "dark"
            ? modeColors.dark.background
            : modeColors.light.background
        }
        color={
          mode === "dark"
            ? modeColors.dark.textColor
            : modeColors.light.textColor
        }
      />
      <Header
        setMode={setMode}
        bg={
          mode === "dark" ? modeColors.dark.elements : modeColors.light.elements
        }
        color={
          mode === "dark"
            ? modeColors.dark.textColor
            : modeColors.light.textColor
        }
      />
      <Line border={mode === "dark" ? "#ebebeb00" : "#ebebeb42"} />
      <ContainerApp>
        <Box>
          {!loading && !showDetail ? (
            <>
              <SearchBar
                searchCountry={searchCountry}
                onSearchChange={handleSearchCountry}
                bg={
                  mode === "dark"
                    ? modeColors.dark.elements
                    : modeColors.light.elements
                }
                mode={mode}
              />
              <ListOfContinents
                handleContinent={handleContinent}
                valueSelect={continent}
                bg={
                  mode === "dark"
                    ? modeColors.dark.elements
                    : modeColors.light.elements
                }
                color={
                  mode === "dark"
                    ? modeColors.dark.textColor
                    : modeColors.light.textColor
                }
              />
            </>
          ) : (
            !loading && (
              <ButtomBack
                handleBack={BackEvent}
                bg={
                  mode === "dark"
                    ? modeColors.dark.elements
                    : modeColors.light.elements
                }
                boxS={mode === "dark" ? "black" : undefined}
              />
            )
          )}
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BounceLoader
            color={"#2196F3"}
            loading={loading}
            //   cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        {!showDetail && (
          <Container>
            {dataCountries.map((country) => {
              return (
                <Card
                  key={country.name}
                  country={country}
                  handleDetail={handleDetail}
                  bg={
                    mode === "dark"
                      ? modeColors.dark.elements
                      : modeColors.light.elements
                  }
                />
              );
            })}
          </Container>
        )}

        {showDetail && (
          <CardDetail
            key={detailCard.id}
            infoCard={detailCard}
            bg={
              mode === "dark"
                ? modeColors.dark.elements
                : modeColors.light.elements
            }
            borderC={mode === "dark" ? modeColors.dark.elements : "#c6c6c6"}
          />
        )}
      </ContainerApp>
    </>
  );
};

export default BodyApp;
