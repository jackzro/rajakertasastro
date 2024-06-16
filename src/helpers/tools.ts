export const handleBeli = (response: any) => {
  console.log(response);
  window.open(
    `https://wa.me/${response.value.phone}/?text=${response.value.message}`,
    "_blank"
  );
};
