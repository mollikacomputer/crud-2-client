import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllCoffee = () => {
    const coffees = useLoaderData();
    const handleDelete = (_id) =>{
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`http://localhost:5000/coffee/${_id}`,{method:"DELETE"})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });

    }
    return (
        <div>
            <h2 className="text-3xl"> Total Coffee :{coffees.length}</h2>
            {
                coffees.map(coffee => <div key={coffee._id}> Coffee Name: {coffee.name}, Email:{coffee.email}, <b> Id:{coffee._id} 
                </b> Edit <button onClick={ ()=> handleDelete(coffee._id) } className="btn"> X </button> </div>)
            }
            
        </div>
    );
};

export default AllCoffee;