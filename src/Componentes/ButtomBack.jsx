import { IoIosArrowRoundBack } from "react-icons/io";
import { Bottom, Text } from "../styles/App.style";

const ButtomBack = ({ handleBack, bg, boxS }) => {
  return (
    <Bottom onClick={() => handleBack()} bg={bg} boxS={boxS}>
      <IoIosArrowRoundBack
        size={30}
        style={{ marginTop: "4px", marginRight: "4px" }}
      />
      <Text>Back</Text>
    </Bottom>
  );
};

export default ButtomBack;
