
function Products({getAllProducts}) {
    console.log(getAllProducts);
    function addCart(id){
      console.log(id);
      {!localStorage.userName && window.location.assign('./Login')}
      {localStorage.userName && window.location.assign('./Carts')}
    }
  return (
    <>
      {
        getAllProducts.products.map((Product)=>(
          <div className="product">
          <picture>
              <img srcset={Product.thumbnail} />
          </picture>
          <h5>{Product.title}</h5>
          <p>${Product.price}</p>
          <button onClick={()=>addCart(Product.id)}>Add to Cart</button>
        </div>
        ))
      }
      </>
  )
}

export default Products