import { useEffect , useState} from "react"
import Cart from "./Cart"
import './style/Carts.css'
function Carts() {
    const [allCarts , setCarts] = useState(null)
    const [total , setTotal] = useState(null)
  
    useEffect(()=>{
    fetch(`https://dummyjson.com/carts/user/${localStorage.userId}`)
      .then((res) => {return res.json()})
    .then((data)=>{
  console.log(data.carts[0].total);
  setCarts(data.carts[0].products)
  setTotal(data.carts[0].total)
});
  },[])
  return (
    <div className="Carts">
      <h1 className="header">You Cart</h1>
      
      {allCarts && <Cart getallCarts={allCarts} total={total}/>}
      {allCarts == null && <div>Not founded</div>}



    </div>
  )
}

export default Carts