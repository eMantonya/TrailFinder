import { useEffect, useState } from "react";

const useTrails = () => {
    const [trailData, setTrailData] = useState([]);
    

    useEffect(() => {
        const lat = '50.116322';
        const long = '-122.957359';
        const url = `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${lat}&lon=${long}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'acb82c486cmsh5bf550c163c73f4p1f0c5cjsn2c4b21142314',
		        'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
                }
            }
            fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setTrailData(data.data);
             })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return trailData;
};

export default useTrails;