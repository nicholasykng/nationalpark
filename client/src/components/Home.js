import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome To National Park Explorer!</h1>
            <p>Click the button below to explore the top National Parks in the US along with user's comments to plan your next adventure!</p>
            <Link to="/parks">
                <button>Let's Go!</button>
            </Link>
        </div>
    )
}
export default Home