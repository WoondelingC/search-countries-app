import {
  Box,
  CardBox,
  Columns,
  DetailContainer,
  ImgCountry,
  TextCard,
  TitleCard,
} from "../styles/App.style";

const CardDetail = ({ infoCard, bg, borderC }) => {
  console.log(infoCard, "detalle");
  return (
    <DetailContainer>
      <ImgCountry
        src={infoCard.flags.png}
        radius={0}
        width={"45%"}
        height={"100%"}
      />
      <CardBox margin={0} width={"100%"} pl={"6em"}>
        <TitleCard>{infoCard.name}</TitleCard>
        <Box align="" cursor="initial" mb={"10%"}>
          <Columns>
            <TextCard margin={"10px 0"}>
              <strong>Population:</strong> {infoCard.population}
            </TextCard>
            <TextCard margin={"10px 0"}>
              <strong>Region:</strong> {infoCard.region}
            </TextCard>
            <TextCard margin={"10px 0"}>
              <strong>Capital:</strong> {infoCard.capital}
            </TextCard>
            <TextCard margin={"10px 0"}>
              <strong>Population:</strong> {infoCard.population}
            </TextCard>
            <TextCard margin={"10px 0"}>
              <strong>Population:</strong> {infoCard.population}
            </TextCard>
          </Columns>
          <Columns>
            <TextCard margin={"10px 0"}>
              <strong>Region:</strong> {infoCard.region}
            </TextCard>
            <TextCard margin={"10px 0"}>
              <strong>Capital:</strong> {infoCard.capital}
            </TextCard>
            <TextCard margin={"10px 0"}>
              <strong>Capital:</strong> {infoCard.capital}
            </TextCard>
          </Columns>
        </Box>
        <Box jc={""} fd={""} alignI={""}>
          <strong style={{ marginRight: "10px" }}>Border Countries:</strong>{" "}
          {infoCard.borders?.map((b) => {
            return (
              <TextCard
                br={"3px"}
                borderC={`1px solid ${borderC}`}
                bg={bg}
                p={"5px"}
                margin={"5px 10px"}
              >
                {b}
              </TextCard>
            );
          })}
        </Box>
      </CardBox>
    </DetailContainer>
  );
};

export default CardDetail;
