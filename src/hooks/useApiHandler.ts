import { useState } from "react";
import useChangeHandler from "./useChangeHandler";

const useApiHandler = () => {
  const [values, setValues] = useState({
    productId: "",
    categoryName: "",
  });
  useChangeHandler(values, setValues);
  const [loading, setLoading] = useState({
    singleProduct: false,
    allProducts: false,
    allCategory: false,
    productOfCategory: false,
  });

  const [data, setData] = useState({
    singleProduct: "",
    allProducts: "",
    allCategory: "",
    productOfCategory: "",
  });

  const handleFetchAllProducts = async () => {
    setLoading((prev) => ({ ...prev, allProducts: true }));
    try {
      const rawRes = await fetch("https://dummyjson.com/products");
      const { products } = await rawRes.json();
      setData((prev) => ({
        ...prev,
        allProducts: JSON.stringify(products, null, 2),
      }));
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, allProducts: false }));
    }
  };

  const handleFetchSingleProduct = async () => {
    setLoading((prev) => ({ ...prev, singleProduct: true }));
    try {
      const rawRes = await fetch(
        `https://dummyjson.com/products/${values.productId}`
      );
      const res = await rawRes.json();
      setData((prev) => ({
        ...prev,
        singleProduct: JSON.stringify(res, null, 2),
      }));
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, singleProduct: false }));
    }
  };
  const handleFetchProductCategory = async () => {
    setLoading((prev) => ({ ...prev, productOfCategory: true }));
    try {
      const rawRes = await fetch(
        `https://dummyjson.com/products/category/${values.categoryName}`
      );
      const res = await rawRes.json();
      setData((prev) => ({
        ...prev,
        productOfCategory: JSON.stringify(res, null, 2),
      }));
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, productOfCategory: false }));
    }
  };
  const handleFetchAllCategory = async () => {
    setLoading((prev) => ({ ...prev, allCategory: true }));
    try {
      const rawRes = await fetch("https://dummyjson.com/products/categories");
      const res = await rawRes.json();
      setData((prev) => ({
        ...prev,
        allCategory: res,
      }));
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, allCategory: false }));
    }
  };
  return {
    loading,
    data,
    values,
    setValues,
    handleFetchAllProducts,
    handleFetchSingleProduct,
    handleFetchProductCategory,
    handleFetchAllCategory,
  };
};

export default useApiHandler;
