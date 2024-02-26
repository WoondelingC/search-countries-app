import { Box, Flex, SubTitle, Title } from "../styles/App.style";
import { IoMoonOutline } from "react-icons/io5";

const Header = ({ setMode, bg, color }) => {
  return (
    <>
      <Flex bg={bg}>
        <Title>Where in the world?</Title>
        <Box
          onClick={() =>
            setMode((prev) => {
              return prev === "dark" ? "light" : "dark";
            })
          }
          fd={""}
        >
          <IoMoonOutline size={18} color={color} className="icon" />
          <SubTitle>Dark Mode</SubTitle>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
