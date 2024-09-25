// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// export default function Food() {
//   const { id } = useParams();
//   console.log(id)
//   const [product, setProduct] = useState({})

//   useEffect(() => {
//     fetch(`fake.json/${id}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data.data))
//   }, [id]);

//   return (
//     <div>
//       <img src={product?.image} alt="" />


//     </div>
//   )
// }


// import { useLoaderData, useParams } from 'react-router-dom';

// const Food = () => {
//   const foodDetails = useLoaderData();
//   const { id } = useParams();
//   const foods = parseInt(id);
//   const data = foodDetails.find((data) => data.id === foods);

//   // const {title} = foods;


//   return (
//     <div>
//       <h1>foods: {data.title}</h1>

//     </div>
//   );
// };

// export default Food;



import { FcRating } from 'react-icons/fc';
import { useLoaderData, useParams } from 'react-router-dom';

const Food = () => {
  const { foods } = useLoaderData();
  const { id } = useParams();
  const food = parseInt(id); // Ensure it's a base 10 integer
  const data = foods.find((item) => item.id === food); // Use a more descriptive variable name


  return (
    <div className='container mt-20 grid grid-cols-2  '>
      <div>
        <img src={data.descriptionImage} alt="" />
      </div>
      {/*  */}
      <div className=''>
        <h1 className='text-5xl'>{data.title}</h1>
        <div className='flex mt-4 gap-2'>
          <FcRating />
          <FcRating />
          <FcRating />
        </div>
        <h1 className='text-3xl mt-3'>$ {data.price}</h1>
        <p className='mt-5 text-2xl'>Discraption</p>
        <p className=''>{data.description}</p>
      </div>

    </div>
  );
};

export default Food;

