import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {_id, name, email, phone, quantity} = coffee;
  const handleUpdateCoffee= event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const quantity = event.target.quantity.value;
    const updatedCoffee = {name, email, phone, quantity}
    console.log(updatedCoffee);
    // console.log(name, email, phone, quantity, _id);
    fetch(`http://localhost:5000/coffee/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then( data => {
      console.log(data);
      if(data.modifiedCount >0){
        Swal.fire({
          title:"Successfully Updated",
          text:"Coffee Update Count",
          icon:'success',
          confirmButtonText:'Cool'
        })
      }
    })
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleUpdateCoffee} className="">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Coffee Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Coffy Name"
            defaultValue={name}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Phone</span>
          </div>
          <input
            type="number"
            name="phone"
            placeholder="Coffy Quantity"
            defaultValue={phone}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="email"
            defaultValue={email}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Quantity</span>
          </div>
          <input
            type="number"
            name="quantity"
            placeholder="quantity"
            defaultValue={quantity}
            className="input input-bordered w-full max-w-xs"
          />
        
        <input className="btn btn-primary w-full" type="submit" value="Add A Coffee" />
        </label>
        

      </form>
    </div>
  );
};

export default UpdateCoffee;