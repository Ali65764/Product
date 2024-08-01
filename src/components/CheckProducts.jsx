import React, { useEffect, useState } from "react";
import { GetProducts } from "../service/api"
import { ROUTER } from "../constant/router"
import { useNavigate} from "react-router-dom";

const CheckProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    const response = await GetProducts();
    setProducts(response)
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div >
        {products.length === 0 && (
          <h2 className="text-green-300 text-4xl font bold m-12">
            Not Found
          </h2>
        )}
        <h2 className="text-center mt-6 text-3xl font-bold text-teal-600">Our Products</h2>
        <div className="p-5 grid gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div className="checkproductmain" key={index}>
              <img
                className="checkproductimg"
                src={product.image}
                alt="product.title"/>
                <div className="checkproductumumi">
                  <h2 className="checkproducth2">{product.title.slice(0,25)}</h2>
                  <p className="checkproductp">{product.description.slice(0,45)}</p>
                  <p className="checkproductp2">$ {product.price } </p>
                  <button
                  className="text-white text-[30px] block  border-b-2 border-transparent hover:border-white transition duration-300 inline-block"
                  onClick={() =>
                    navigate(`${ROUTER.GoDetailsPage}/${product.id}`)
                  }
                >
                  Go Details Page
                </button>
                </div>
            </div>
            
          ))}

        </div>
      </div>
    </>
  )
}




export default CheckProducts