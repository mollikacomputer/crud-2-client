import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, email, phone} = coffee;
    return (
        <div>
            <h2 className="text-3xl"> Update Coffee Name: {name}</h2>
            <h3 className="text-2xl"> Update Coffee email: {email}</h3>
            <h4 className="text-xl"> Update Coffee Phone: {phone}</h4>
            <h4 className="text-xl"> Update Coffee id: {_id}</h4>
        </div>
    );
};

export default UpdateCoffee;