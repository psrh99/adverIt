import React from "react";
import NavBar from "../../Navbar/NavBar.component";
import Banner from "../../Banner/Banner.component";
import ProductList from "../../ProductList/ProductList.components";
import Footer from "../../Footer/Footer.component";

const Home =() => (
    <div>
        <NavBar/>
        <Banner/>
        <ProductList/>
        <Footer/>
    </div>
)

export default Home