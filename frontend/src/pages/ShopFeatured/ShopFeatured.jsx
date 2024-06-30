import React, { useEffect } from 'react'
import ProductCard from '../../components/product/ProductCard'
import "./shopFeatured.scss"
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux"
import Loader from '../../components/layout/loading/Loader';
import { useAlert } from 'react-alert';

const Shop = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector((state) => state.products);


  useEffect(() => {

    if (error) {
      return alert.error(error);
    }

    console.log("dispatch occured");
    dispatch(getProduct());
  }, [dispatch, error, alert]);



  return (

    <div>
      {loading ? (<Loader />) : (
        <div className='productPage'>
          <div className="productHead">
            <h1>Featured proucts</h1>
          </div>

          <div className='productContainer'>

            {products && products.map(product => (
              <ProductCard key={product.id} product={product} />
            )
            )}

          </div>

        </div>
      )}
    </div>


  )
}

export default Shop
