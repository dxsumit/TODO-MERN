
import { useLocation } from "react-router-dom";

const Home = () => {

    const location = useLocation()

    return (
        <div className="flex flex-col items-center h-screen">

            <h1 className="text-xl text-gray-800 mt-5"> hello, <span className="font-bold text-blue-600"> {location.state.email}{location.state.domain} </span>  </h1>
        
        </div>
    )
}

export default Home;

