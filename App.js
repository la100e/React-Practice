import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Container from './components/Container';
import CardsContainer from './components/CardsContainer';
import ReviewsContainer from './components/ReviewsContainer';
import Login from './components/Login';
import Signin from './components/Signin';
import AdminProducts from './components/AdminProducts';
import { Routes, Route } from 'react-router-dom';

function App() {
  let products = [
    {id: 1, card: 'Lily', price: 20, discount: 15, category: 'complete flowers', path: 'lily.jpg'},
    {id: 2, card: 'Rose', price: 10, discount: 17, category: 'focal flowers', path: 'rose.jpg'},
    {id: 3, card: 'Tulip', price: 30, discount: 2, category: 'complete flowers', path: 'tulip.jpg'},
    {id: 4, card: 'Jasmine', price: 35, discount: 10, category: 'filler flowers', path: 'jasmine.jpg'},
    {id: 5, card: 'Daisy', price: 10, discount: 1, category: 'composite flowers', path: 'daisy.jpg'},
    {id: 6, card: 'Greens', price: 5, discount: 5, category: 'greenery', path: 'greens.jpg'},
  ]

  let customers = [
    {id: 1, fullname: 'customer1', login: 'login1', password: 'password1', review: 'I like it !', stars: 5},
    {id: 2, fullname: 'customer2', login: 'login2', password: 'password2', review: 'I love it !', stars: 5},
    {id: 3, fullname: 'customer3', login: 'login3', password: 'password3', review: 'Nice shop !', stars: 5},
    {id: 4, fullname: 'customer4', login: 'login4', password: 'password4', review: 'Good service !', stars: 5},
    {id: 5, fullname: 'customer5', login: 'login5', password: 'password5', review: 'Stunning flowers !', stars: 5},
    {id: 6, fullname: 'customer6', login: 'login6', password: 'password6', review: 'I love it !', stars: 5},
  ]


  return (
    <Routes className='App'>
      <Route index path="/" element={<><Header/> <Home/> <h1 className="heading"><span> about </span> us </h1> <About/> <Container/> <h1 className="heading"> latest <span>products</span></h1> <CardsContainer products={products}/> <h1 class="heading"> customer's <span>review</span> </h1> <ReviewsContainer reviews={customers}/> </>}/>
      <Route exact path="/login" element={<><Header/> <div className='section2'><Login /></div></>}/>
      <Route exact path="/signin" element={<><Header/> <div className='section2'><Signin /></div></>}/>
      <Route exact path="/products" element={<><Header/> <CardsContainer products={products}/></>}/>
      <Route exact path="/admin-products" element={<AdminProducts products={products}/>}/>
    </Routes>
  );
}

export default App;
