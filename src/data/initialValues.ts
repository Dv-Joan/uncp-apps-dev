import { v4 as productId } from "uuid";
export const INITIAL_FORM_VALUES = {
  id: productId(),
  name: "",
  model: "",
  price: 0,
  quantity: 0,
  imageSrc: "https://img.icons8.com/?size=512&id=11977&format=png",
};
