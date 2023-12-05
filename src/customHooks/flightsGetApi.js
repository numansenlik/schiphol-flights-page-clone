import { useEffect, useState } from "react";
import axios from "axios";

function flightsGetApi() {
    const [data, setData] = useState([]);
    const [isActive, setIsActive] = useState(false);

    async function getData() {
        const options = {
            url: '/api/public-flights/airlines?page=0&sort=%2BpublicName',
            headers: {
                'accept': 'application/json',
                'app_id': '38937146',
                'app_key': 'de945598bac286ca9ed1e562a286a3d5',
                'resourceVersion': 'v4'
            }
        }

        try {
            const response = await axios.get(options.url, { headers: options.headers });
            console.log(response);
            setData(response.data);
            setIsActive(true);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return [data, isActive];
}

export default flightsGetApi;
