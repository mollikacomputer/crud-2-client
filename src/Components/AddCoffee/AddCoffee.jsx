import swal from 'sweetalert';

const AddCoffee = () => {

  const handleAddCoffee = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const quantity = event.target.quantity.value;
    const phone = event.target.phone.value;
    const newCoffee = {name, email, quantity, phone};
    
    console.log(newCoffee);

    fetch('http://localhost:5000/coffee',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newCoffee),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        swal({
          title: "Successfully Add A Coffee",
          text: "Thank You So much",
          icon: "success",
        });
      }
      event.target.reset();
    })

  }
  return (
    <div className="container mx-auto">
      <form onSubmit={handleAddCoffee} className="">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Coffee Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Coffy Name"
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
            className="input input-bordered w-full max-w-xs"
          />
        
        <input className="btn btn-primary w-full" type="submit" value="Add A Coffee" />
        </label>
        

      </form>
    </div>
  );
};

export default AddCoffee;
