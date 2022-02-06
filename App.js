import './App.css';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { ContentCards } from './ContentCards';
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {

  //using usestate for total no of items in the cart
  const [items, setItems] = useState(0)

  //products
  const card_data= [
    {
      image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-95390/Apple-iPhone-13-Pro-Max-featured-image-packshot-review.jpg",
      name: "Apple Iphone",
      cost: 1500,
      rating: 5
    },{
      image: "https://in.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw07890820/450BT_white_angle_01-1606x1606px.png",
      name: "JBL Headphones",
      cost: 750,
      rating: 4.5
    },{
      image: "https://image01.realme.net/general/20210416/1618549437435.jpg",
      name: "Realme Watch",
      cost: 260,
      rating: 3.5
    },{
      image: "https://m.media-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg",
      name: "OnePlus Bullets",
      cost: 150,
      rating: 5
    },{
      image: "https://www.sony.co.in/image/31ce4a88b7c956cfffb189c0ac965f21?fmt=png-alpha&wid=800",
      name: "Sony TWS Earphones",
      cost: 300,
      rating: 4.5
    },{
      image: "https://m.media-amazon.com/images/I/311ThQv0JoL.jpg",
      name: "Fitbit Inspire",
      cost: 300,
      rating: 4
    },{
      image: "https://ak.picdn.net/shutterstock/videos/627154/thumb/1.jpg",
      name: "Gold Rings",
      cost: 1500,
      rating: 5
    },{
      image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0efd1f68-8988-4e8a-98bc-6690ccb6a828.png",
      name: "Boat Speaker",
      cost: 100,
      rating: 4
    },{
      image: "https://cdn.fashiola.in/L64965671/adidas-3cm-leather-belt.jpg",
      name: "GG Belt",
      cost: 490,
      rating: 4.5
    },{
      image: "https://i.pinimg.com/originals/2a/db/35/2adb3568b5f26fb0f949cd5c69e4be08.jpg",
      name: "Adidas Shoes",
      cost: 350,
      rating: 4
    }
  ]

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          
          <Navbar.Brand href="#home" id="brand">
            <h3>Start Bootstrap</h3>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <NavDropdown title="Shop" id="navbarScrollingDropdown"/>
            </Nav>
          </Navbar.Collapse>

          <div className="cart">
            <Button variant="outlined" color="inherit"><ShoppingCartIcon/> Cart {items}</Button>
          </div>

        </Container>
      </Navbar>

      <div className="heading">
        <div>
          <h1><b>Shop in style</b></h1>
          <p>With this shop homepage template</p>
        </div>
      </div>

      <div className="content">
          {/* mapping items to create individual cards + sending total cart items state as props */}
         {card_data.map((item) => (
            <ContentCards item={item} items={items} setItems={setItems}/>
         ))}
      </div>        
    </div>
  );
}

export default App;



