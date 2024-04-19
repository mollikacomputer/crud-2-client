import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllCoffee = () => {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    const handleDelete = (_id) =>{
        // console.log("all coffees", coffees);
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to DELETE",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   }
                    )
                    const remaining = coffees.filter(cof => cof._id !== _id);
                    setCoffees(remaining);
    
                }
            })
            }
          });

    }
    return (
        <div>
            <h2 className="text-3xl"> Total Coffee :{loadedCoffees.length}</h2>
            {
                loadedCoffees.map(coffee => <div key={coffee._id}> Coffee Name: {coffee.name}, Email:{coffee.email}, <b> Id:{coffee._id} 
                </b>
                <Link to={`/updatecoffee/${coffee._id}`}> <button className="btn" > Edit</button> </Link>
                 
                 <button onClick={ ()=> handleDelete(coffee._id) } className="btn"> X </button> </div>)
            }
            
        </div>
    );
};

export default AllCoffee;