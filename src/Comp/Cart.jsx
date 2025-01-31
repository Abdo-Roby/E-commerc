import {React,useState} from 'react'

function Cart({getallCarts , total}) {
  let [getCarts,setCarts] = useState([...getallCarts])
  
  const showCarts = getCarts.map((cart)=>{
    return <div className="cart">
      <div className="left">
        <picture>
          <img srcset={cart.thumbnail} />
        </picture>
        <div className="title">
          <h3>{cart.title}</h3>
          <p>${cart.price}</p>
        </div>
      </div>
      <div className="right">
        <button>-</button>
          <h5>{cart.quantity}</h5>
        <button>+</button>
        <button onClick={()=>{handelDelete(cart.id)}}>Remove</button>
      </div>
    </div>
     })


  // getCarts.filter((del)=>{
  //   return del.id != 134 
  // }).map((ele)=>{
  //   console.log(ele);
  // })
  
  function handelDelete(id){
    // console.log(id);
    // let newCarts = [...getCarts]
    // newCarts.splice(id,1)
    // console.log(newCarts);
    // setCarts(newCarts)
    
    const newCarts = getCarts.filter((cart)=>{
      return cart.id !== id
    })
    setCarts(newCarts)
  }


  return (
      <>
{showCarts}
<div className="footer">
      <h3>Total: ${total}</h3>
      <button onClick={()=>{setCarts([])}}>Remove all products</button>
      </div>
    </>
  )
}

export default Cart