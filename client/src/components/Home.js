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
                    src="https://redwoodsinyosemite.com/wp-content/uploads/2019/06/Wawona-Tunnel-Page-Banner-Image.jpeg"
                    alt="Fourth slide"/>

                    <Carousel.Caption>
                        <h3>Yosemite</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://static.photocdn.pt/images/articles/2018/06/28/articles/2017_8/what_to_photograph_in_glacier_national_park.jpg"
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
                    src="https://images.theoutbound.com/uploads/1458603222394/dxkyu7chhtqrh2g7/7b5f3b82f0aeb5c36ac6dcf8fa46bb0d?&fit=crop&w=970&h=550&auto=format&dpr=2&q=60"
                    alt="8 slide"/>

                    <Carousel.Caption>
                        <h3>Rocky Mountain National Park</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.nppemasterclass.com/wp-content/uploads/2017/10/Grand-Teton.jpg"
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