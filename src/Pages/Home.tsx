import { Container, Spinner } from "react-bootstrap";
import useApiHandler from "./../hooks/useApiHandler";
import useChangeHandler from "./../hooks/useChangeHandler";

const Home = () => {
  const {
    loading,
    data,
    values,
    setValues,
    handleFetchAllProducts,
    handleFetchSingleProduct,
    handleFetchProductCategory,
    handleFetchAllCategory,
  } = useApiHandler();

  const { handleChange } = useChangeHandler(values, setValues);
  return (
    <>
      {" "}
     
      <div className="main-body m-2">
        <Container className="d-flex flex-column bd-highlight">
          <button onClick={handleFetchAllProducts}>
            {loading.allProducts ? (
              <Spinner size="sm" animation="border" variant="dark" />
            ) : (
              "Get All Products"
            )}
          </button>
          <textarea
            readOnly
            rows={20}
            value={data.allProducts}
            className="all-product mx-1 my-4 p-3"
          ></textarea>

          <button
            title={
              !values.productId ? "Enter Product Id" : "Search for Product"
            }
            disabled={!values.productId}
            onClick={handleFetchSingleProduct}
          >
            {loading.singleProduct ? (
              <Spinner size="sm" animation="border" variant="dark" />
            ) : (
              "Get Single Products"
            )}
          </button>
          <input
            placeholder="enter product id to search"
            id="productId"
            className="my-5 px-3"
            name="productId"
            value={values.productId}
            onChange={handleChange}
          />
          <textarea
            readOnly
            rows={20}
            value={data.singleProduct}
            className="single-product  mx-1 my-4 p-3"
          ></textarea>

          <button
            title={
              !values.categoryName
                ? "Enter Category Name"
                : "Search for Category"
            }
            disabled={!values.categoryName}
            onClick={handleFetchProductCategory}
          >
            {loading.productOfCategory ? (
              <Spinner size="sm" animation="border" variant="dark" />
            ) : (
              "Get Products of a Category"
            )}
          </button>
          <input
            placeholder="enter Category Name to search"
            id="categoryName"
            name="categoryName"
            className="my-5 px-3"
            value={values.categoryName}
            onChange={handleChange}
          />
          <textarea
            readOnly
            rows={20}
            value={data.productOfCategory}
            className="single-category mx-1 my-4 p-3"
          ></textarea>

          <button onClick={handleFetchAllCategory}>
            {loading.allCategory ? (
              <Spinner size="sm" animation="border" variant="dark" />
            ) : (
              "Get All Categories"
            )}
          </button>
          <textarea
            readOnly
            rows={20}
            value={data.allCategory}
            className="all-category  mx-1 my-4 p-3"
          ></textarea>
        </Container>
      </div>
    </>
  );
};

export default Home;
