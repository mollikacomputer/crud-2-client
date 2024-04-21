import { useQuery } from "@tanstack/react-query";
const NewCoffee = () => {
    const {refetch, data: coffees = []} = useQuery({
        queryKey:['newcoffee'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/coffee');
            return res.json();}})
    const handleDelete = (_id) =>{
      fetch(`http://localhost:5000/coffee/${_id}`,{
          method:"DELETE"
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
                refetch();
                 alert("delete successfully")
              }
          })
  }
  return (
    <div>
      <h2>new Coffee {coffees?.length} </h2>
      {
        coffees?.map( coffee => <p key={coffee?._id}>Coffee Name: {coffee?.name}, email: {coffee?.email} {coffee?._id}
        <button onClick={ ()=> handleDelete(coffee?._id) } className="btn"> X </button> 
         </p>)
      }
    </div>
  );
};
export default NewCoffee;
