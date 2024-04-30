import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const item=useLoaderData();
    // console.log(item);
    const {image,Customization,name,price,ratting,short_description }=item;
 const {id}=useParams();
 console.log(id);
 const [products,setProducts]=useState({});
 useEffect(()=>{

    fetch(`https://landscape-painting-server.vercel.app/singleProduct/${id}`)
    .then(res=>res.json())
    .then(data=>{
        setProducts(data);
        console.log(data);
    })
 },[id])

    return (
        <>
        {/* <img className="w-full" src="https://i.ibb.co/cYhddfz/download-1.jpg" alt="" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-[680px]">

            <div className="flex items-center justify-center bg-white ">
                <img src={image} alt="" />
            </div>

            <div className="flex items-center text-white bg-black ">
                <div className=" bg-sky-700 h-auto md:h-[90%] md:-ml-24  p-4">
                    <h1 className="mb-8 text-5xl font-bold">{name}</h1>
                    <p>{short_description}</p>
                    <p>GKB Optical online store brings in the best assortment of sunglasses. You can get a sunglass based on your lifestyle, fashion and requirements. </p>

                    <h1 className="my-4 text-4xl font-bold">${price}</h1>
                    <h1>customization:{Customization}</h1>
                    <h1>Rating:{ratting}</h1>
                    <br />
                    <button className="btn">Buy it now!</button>

                </div>
            </div>
        </div>
    </>
    );
};

export default Details;