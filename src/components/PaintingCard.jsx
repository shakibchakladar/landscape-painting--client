
const PaintingCard = ({painting}) => {
    // console.log(painting);
   const  {image,name,price,ratting,artistName}=painting
    return (
<div className="shadow-xl card w-96 bg-base-100 hover:bg-green-200">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="items-center text-center card-body">
    <h2 className="card-title">{name}</h2>
    <div className="flex justify-between gap-4">
      <p>rating :{ratting}</p>
    <p>{price}</p>
    </div>
    <p>Artist:{artistName}</p>
    <div className="card-actions">
      <button className="btn bg-sky-400">View Details</button>
    </div>
  </div>
</div>
    );
};

export default PaintingCard;