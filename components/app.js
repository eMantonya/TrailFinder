import {useState} from "react";
import Banner from "./banner";
import TrailList from "./trailList";
import Trail from "./trail";

const App = () => {
    const [selectedTrail, setSelectedTrail] = useState();

    const setSelectedTrailWrapper = (trail) => {
        //do checks on house
        setSelectedTrail(trail);
    };

    return (
        <>
            <Banner>
                <div>Showcasing trails all over the world</div>
            </Banner>
            {selectedTrail? (
                <Trail trail={selectedTrail} /> 
            ) : (
                <TrailList selectTrail={setSelectedTrailWrapper}/>
            )}      
        </>
    );
};

export default App;