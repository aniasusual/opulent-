import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/product/ProductCard'
import "./shop.scss"
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux"
import Loader from '../../components/layout/loading/Loader';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider";

const Shop = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 2000000])

  const { loading, error, products, productsCount, resultPerPage} = useSelector((state) => state.products);

  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  }

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  }

  useEffect(() => {

    if (error) {
      // alert.error(error);
      return ()=>{alert.error(error);}
    }

    dispatch(getProduct(keyword, currentPage));
  }, [dispatch, error, alert, keyword, currentPage]);


  return (

    <div>
      {loading ? (<Loader />) : (
        <div className='productPage'>
          <div className="productHead">
            <h1>Products</h1>
          </div>

          <div className='productContainer'>

            {products && products.map(product => (
              <ProductCard product={product} />
            )
            )}

          </div>


          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}

        </div>
      )}
    </div>


  )
}

export default Shop
