import { Button } from "antd";
const ButtonField = ({ type, onClick, text, isLoading, buttonStyle }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      loading={isLoading}
      iconPosition={"end"}
      style={{ ...buttonStyle }}
    >
      {isLoading ? "Loading..." : text}
    </Button>
  );
};

export default ButtonField;
