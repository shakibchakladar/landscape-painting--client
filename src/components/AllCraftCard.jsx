
const AllCraftCard = ({craft}) => {
    console.log(craft);
   const {name,
      subcategory,
      price,
      image,
      short_description,
      ratting,
      Customization,
      ProccessingTime
    }=craft;
    return (
        <div className="shadow-xl card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="items-center text-center card-body">
    <h2 className="card-title">{name}</h2>
    <p>{ratting}.0</p>
    <p>customization:{Customization}</p>
    <p>Proccessing_time:{ProccessingTime}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default AllCraftCard;