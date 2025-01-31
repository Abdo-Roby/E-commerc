
import {useEffect,useState} from "react";
import { BrowserRouter as Router , Routes, Route ,Link,Navigate} from "react-router-dom";
import Products from './Comp/Products'
import './Comp/style/home.css'
import Login from "./Comp/Login";
import Carts from "./Comp/Carts";
import './Comp/style/nav.css'
import './App.css'
function App() {
  const [paginat , increment] = useState(10)
  const [numShow , setNum] = useState(0)
  const [allProducts , setProduct] = useState(null)
  useEffect(()=>{
    console.log('IN USE EFFECT',paginat);
    fetch(`https://dummyjson.com/products?limit=16&skip=${paginat}`)
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.products)
      setProduct(data)
    })
  },[paginat])


  return (
    <div className="App">


        <Router>
          <nav>
          <h1 className="Logo">Logo</h1>
            <div className="list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="Carts">Carts</Link></li>
                    {!localStorage.userName &&(
                    <li><Link to="Login">Login</Link></li>
                    )}
                    {localStorage.userName&&(
                      <>
                    <li style={{color: "#fff"}}>Welcome {localStorage.userName}</li>
                    <button onClick={()=>{
                      localStorage.clear()
                      window.location.assign('Login')
                    }}>LogOut</button>
                      </>
                    )}
                </ul>
            </div>
            </nav>
            <Routes>
                {<Route exact path="/" element={
                  <>
          <h1 className='header'>Products</h1>
          <div className='Products'>
            {allProducts &&
            <>
            {console.log(allProducts.products.length)}
            <Products getAllProducts={allProducts}/>
            </>
            }
          </div>
            <div className="paginat">
              <button onClick={()=>{{numShow > 0 &&setNum(numShow - 1);{numShow > 0 && increment(paginat - 16)}}}}> - </button>
                <h4>{numShow}</h4>
              <button onClick={()=>{{allProducts.products.length >= 16 && setNum(numShow + 1);{allProducts.products.length >= 16 && increment(paginat + 16)}}}}> + </button>
            </div>
                  </>
                } />}
                  <Route exact path="/" element={<Navigate to="Login"/>} />
                <Route exact path="Login" element={<Login/>} />
                <Route exact path="Carts" element={<Carts />} />
            </Routes>
        </Router>
    </div>
);
}

export default App
