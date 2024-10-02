import Blog from "./Blog";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import UpComing from "./UpComing";



const Home = () => {

    return (
        <div >

           <Slider></Slider>
            <Blog></Blog>
            <Subscribe></Subscribe>
            <UpComing></UpComing>
        </div>
    );
};

export default Home;