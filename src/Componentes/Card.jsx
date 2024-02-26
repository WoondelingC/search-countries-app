import {
  CardBox,
  CardElement,
  ImgCountry,
  TextCard,
  TitleCard,
} from "../styles/App.style";

const Card = ({ country, handleDetail, bg }) => {
  const handleClick = () => {
    handleDetail(country);
    console.log("first");
  };

  return (
    <CardElement onClick={() => handleClick()} bg={bg}>
      <ImgCountry src={country.flags.png} />
      <CardBox>
        <TitleCard>{country.name}</TitleCard>
        <TextCard>
          <strong>Population:</strong> {country.population}
        </TextCard>
        <TextCard>
          <strong>Region:</strong> {country.region}
        </TextCard>
        <TextCard>
          <strong>Capital:</strong> {country.capital}
        </TextCard>
      </CardBox>
    </CardElement>
  );
};

export default Card;
