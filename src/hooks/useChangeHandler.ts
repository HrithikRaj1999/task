import React, { SetStateAction } from "react";

interface valueType {
  productId: string;
  categoryName: string;
}
const useChangeHandler = (
  values: valueType,
  setValues: React.Dispatch<SetStateAction<valueType>>
) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(values);
  return {
    handleChange
  }
};

export default useChangeHandler;
