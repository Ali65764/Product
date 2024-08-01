import React, { useEffect, useState } from 'react'
import { GetSingleProducts } from '../service/api'
import { useParams } from 'react-router-dom';

function GoDetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const fetchData = async () => {
    try {
      const response = await GetSingleProducts(`${id}`);
      setDetails([response]); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      {details.length === 0 && (
        <h2 className="text-green-300 text-4xl font-bold m-12">
          Not Found
        </h2>
      )}
      {details.map((detail, index) => (
        <div className="detailmain" key={index}>
          <img
            className="detailimg"
            src={detail.image}
            alt={detail.title}
          />
          <div className="detailmain2">
            <h2 className="detailtitle">{detail.title.slice(0, 30)}</h2>
            <p className="detaildescription mt-1">{detail.description.slice(0, 50)}</p>
            <p className="detailprice mt-2">$ {detail.price}</p>
            <p className="detailcategory mt-2">{detail.category}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default GoDetailsPage;
