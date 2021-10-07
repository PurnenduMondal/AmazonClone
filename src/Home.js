import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71LMM-T28HL._SX3000_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id = {1} 
                        title = 'The Lean StartUp' 
                        price = {29.99}
                        image = "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                        rating = {4}
                    />
                        <Product
                        id = {2} 
                        title = 'The MTSS Start-Up Guide: Ensuring Equity, Access, and Inclusivity for ALL Students' 
                        price = {23.50}
                        image = "https://m.media-amazon.com/images/I/619t+Ij5BeL._AC_UY218_.jpg"
                        rating = {3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id = {3} 
                        title = 'Redmi Note 10 Pro' 
                        price = {344}
                        image = "https://m.media-amazon.com/images/I/61lEJiJ61TL._AC_UY218_.jpg"
                        rating = {3}
                    />
                    <Product
                        id = {4} 
                        title = 'TCL 10 SE Unlocked Android Smartphone' 
                        price = {129.99}
                        image = "https://m.media-amazon.com/images/I/611Qfa5VzZS._AC_UY218_.jpg"
                        rating = {4}
                    />
                    <Product
                        id = {5} 
                        title = 'Samsung Galaxy A52 5G' 
                        price = {499.99}
                        image = "https://m.media-amazon.com/images/I/81afsli5ctL._AC_UY218_.jpg"
                        rating = {4}
                    />
                </div>   

                <div className="home__row">
                    <Product
                            id = {6} 
                            title = 'Rosevera Alderbrook 68' 
                            price = {312.122}
                            image = "https://m.media-amazon.com/images/I/91Ekw7WDPuL._AC_UL320_.jpg"
                            rating = {4}
                        />
                </div>                            
            </div>
        </div>
    )
}

export default Home
