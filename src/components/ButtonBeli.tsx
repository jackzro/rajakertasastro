import { Button } from "../components/ui/button";

const ButtonBeli = ({ response, title }: any) => {
  const handleBeli = () => {
    window.open(
      `https://wa.me/${response.value.phone}/?text=${response.value.message}`,
      "_blank"
    );
  };
  return (
    <Button
      className="border-2 border-black rounded-xl px-6 py-2 cursor-pointer hover:bg-black hover:text-white"
      onClick={() => handleBeli()}
    >
      {title}
    </Button>
  );
};

export default ButtonBeli;
