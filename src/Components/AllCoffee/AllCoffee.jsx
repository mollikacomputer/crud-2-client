import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllCoffee = () => {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/coffee')
        .then(res => res.json)
        .then(data => setCoffees(data))
    },[])
    
    const handleDelete = (_id) =>{
        // console.log("all coffees", coffees);
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                   alert("delete successfully")

                // const remaining = coffees?.filter(cof => cof._id !== _id);
                // setCoffees(remaining);
                }
            })
    
    }
    return (
        <div>
            <h2 className="text-3xl"> Total Coffee :{loadedCoffees?.length}</h2>
            {
                loadedCoffees.map(coffee => <div key={coffee?._id}> Coffee Name: {coffee.name}, Email:{coffee.email}, <b> Id:{coffee._id} 
                </b>
                <Link to={`/updatecoffee/${coffee._id}`}> <button className="btn" > Edit</button> </Link>
                 
                 <button onClick={ ()=> handleDelete(coffee?._id) } className="btn"> X </button> </div>)
            }
            
        </div>
    );
};

export default AllCoffee;