import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/auth/useAuth";

const Update = () => {
  const user = useAuth();
  const item = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const subcategory = e.target.subcategory.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const short_description = e.target.short_description.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processingTime = e.target.processing_time.value;
    const email = user.email;

    const updatedCraft = {
      name,
      subcategory,
      price,
      image,
      short_description,
      rating,
      customization,
      processingTime,
      email,
      user
    };

    fetch(`http://localhost:5000/alCraft/${item._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Do you want to update",
            icon: "success",
            confirmButtonText: "Yes",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating craft:", error);
        // Handle error, for example, display an error message
      });
  };

  return (
    <div className="pt-40 ">
      <div className="pt-10 gadgetContainer">
        <div className="p-5 border shadow-lg dark:bg-blue-950">
          {/* Heading */}
          <div className="mt-5 mb-8">
            <p className="text-3xl font-semibold text-center">
              <span className="mr-3 text-[#FF497C]">
                <i className="bx bxs-alarm-add"></i>
              </span>
              <span className="dark:text-white">
                Update Landscape Painting
              </span>
            </p>
          </div>
          {/* form */}
          <form onSubmit={handleUpdate}>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="name">
                  Item Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  defaultValue={item.name}
                  placeholder="Name"
                  id="name"
                  name="name"
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="subcategory"
                >
                  Subcategory
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  defaultValue={item.subcategory}
                  placeholder="Enter subcategory"
                  id="subcategory"
                  name="subcategory"
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  defaultValue={item.price}
                  placeholder="Enter Price"
                  id="price"
                  name="price"
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="rating"
                >
                  Rating
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  maxLength={5}
                  max={5}
                  min={0}
                  type="number"
                  placeholder="Enter Rating"
                  defaultValue={item.rating}
                  id="rating"
                  name="rating"
                />
              </div>
              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="image">
                  Image
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter Image URL"
                  defaultValue={item.image}
                  id="image"
                  name="image"
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="short_description"
                >
                  Short Description
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter Short Description"
                  defaultValue={item.short_description}
                  id="short_description"
                  name="short_description"
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="customization"
                >
                  Customization
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Customization"
                  defaultValue={item.customization}
                  id="customization"
                  name="customization"
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="processing_time"
                >
                  Processing Time
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter Processing Time"
                  defaultValue={item.processing_time}
                  id="processing_time"
                  name="processing_time"
                />
              </div>
            </div>

            <input
              className="w-full px-4 py-2 mt-4 font-semibold text-white duration-200 bg-purple-600 rounded cursor-pointer hover:bg-purple-950"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
