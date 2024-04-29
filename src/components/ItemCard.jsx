
const ItemCard = ({item}) => {
    const {name,price,ratting,customization,image}=item;
    // console.log(image);
  return (
    <div className="shadow-xl card card-compact w-96 bg-base-100">
      <figure>
        <img
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between gap-5">
        <p className="font-bold">price: {price}</p>
        <p>{customization}</p>
        </div>
        <h2>In stock</h2>

        <div className="justify-end card-actions">
          <button className="btn btn-primary">Update</button>
          <button className="bg-red-600 btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
