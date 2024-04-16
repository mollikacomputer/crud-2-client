import { useLoaderData } from "react-router-dom";

const AllCoffee = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl"> Total Coffee :{coffees.length}</h2>
            {
                coffees.map(coffee => <div key={coffee._id}> Coffee Name: {coffee.name}, Quantity:{coffee.quantity}, Email:{coffee.email}  </div>)
            }
            
        </div>
    );
};

export default AllCoffee;