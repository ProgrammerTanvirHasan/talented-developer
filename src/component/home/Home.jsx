import Blog from "./Blog";
import Blogger from "./Blogger";
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
            <Blogger></Blogger>
        </div>
    );
};

export default Home;