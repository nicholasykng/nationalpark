import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Carousel} from 'react-bootstrap'

const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome To National Park Explorer!</h1>
            <p>Click the button below to explore the top National Parks in the US along with user's comments to plan your next adventure!</p>
            <Link to="/parks">
                <Button variant="outline-secondary">Let's Go!</Button>
            </Link>
            
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2020/03/arches-hero-1920x1080.jpg"
                    alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Arches National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.nationalparks.org/sites/default/files/yellowstone-header.jpg"
                    alt="Second slide"/>

                    <Carousel.Caption>
                        <h3>Yellowstone National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.rei.com/blog/wp-content/uploads/2018/05/Hawaii-Volcanoes-National-Park_1.jpg"
                    alt="Third slide"/>

                    <Carousel.Caption>
                        <h3>Hawai'i Volcanoes National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.wthr.com/sites/default/files/styles/article_image/public/2020/04/14/place_yosemite_at_sunrise_getty_bartfett_web.jpg?itok=rYeUKauZ"
                    alt="Fourth slide"/>

                    <Carousel.Caption>
                        <h3>Yosemite</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200108040342-glacier-national-park.jpg"
                    alt="Fifth slide"/>

                    <Carousel.Caption>
                        <h3>Glacier National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://media.deseretdigital.com/file/2576c93235?type=jpeg&quality=55&c=15&a=4379240d"
                    alt="Sixth slide"/>

                    <Carousel.Caption>
                        <h3>Zion National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://media.deseretdigital.com/file/aa89988589?type=jpeg&quality=55&c=15&a=4379240d"
                    alt="Seventh slide"/>

                    <Carousel.Caption>
                        <h3>Grand Canyon National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/simpleview/image/upload/v1476808509/clients/denver/rocky-mountain-national-park-aglow_763256ea-f0ae-5102-065b089a4c479241.jpg"
                    alt="8 slide"/>

                    <Carousel.Caption>
                        <h3>Rocky Mountain National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.nationalgeographic.com/content/dam/travel/2019-digital/grand-teton-national-park-update/grand-teton-national-park-3.jpg"
                    alt="9 slide"/>

                    <Carousel.Caption>
                        <h3>Grand Teton National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://s27363.pcdn.co/wp-content/uploads/2019/11/Acadia-National-Park-Guide.jpg.optimal.jpg"
                    alt="10 slide"/>

                    <Carousel.Caption>
                        <h3>Acadia National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Home