import Swal from 'sweetalert2'

const AddCraft = () => {
    const handleAddCraft=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const artistName=e.target.artistName.value;
        const price =e.target.price.value;
        const image=e.target.image.value;
        const type=e.target.type.value;
        const ratting =e.target.rating.value;

        const newPainting={name,artistName,price,image,type,ratting}
        // console.log(newCraft);
        fetch('http://localhost:5000/painting',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newPainting)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'yes'
                  })
            }
        })

    }
    return (
        <div className="pt-40 ">
            <h2 className="text-4xl">Add craft item</h2>
            <div className="pt-10 gadgetContainer">
      <div className="p-5 border shadow-lg dark:bg-blue-950">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-3xl font-semibold text-center">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C]">
                {/* {update ? "Update " : "Add "} */}
              </span>
              Add Landscape Painting
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddCraft} >
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Artist Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter artist name"
                id="artist-name"
                name="artistName"
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
                placeholder="Enter Price"
                id="Price"
                name="price"
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
                id="image"
                name="image"
              />
              <label className="block mt-4 mb-2 dark:text-white" htmlFor="type">
                Type
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter type"
                id="type"
                name="type"
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
                id="rating"
                name="rating"
              />
            </div>
          </div>

          <input
            className="w-full px-4 py-2 mt-4 font-semibold text-white duration-200 bg-purple-600 rounded cursor-pointer hover:bg-purple-950"
            type="submit"
            value="Add Craft Item"
          />
        </form>
      </div>
    </div>
        </div>
    );
};

export default AddCraft;