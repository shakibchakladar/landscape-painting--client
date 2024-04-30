import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemCard = ({ item }) => {
  const { _id, name, price, ratting, customization, image } = item;
  // console.log(item);

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://landscape-painting-server.vercel.app/alCraft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
          });
      }
    });
  };

  return (
    <div className="shadow-xl card card-compact w-96 bg-base-100">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between gap-5">
          <p className="font-bold">price: {price}</p>
          <p>{customization}</p>
        </div>
        <h2>In stock</h2>

        <div className="justify-end card-actions">
          <Link to={`/details/${item?._id}`}>
            <button className="btn btn-primary">view Details</button>
          </Link>
          <Link to={`/update/${_id}`}>
          <button className="btn btn-primary">Update</button>
          </Link>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="bg-red-600 btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
