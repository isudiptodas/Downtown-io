import axios from 'axios';

export const localServices = async (req, res) => {
    const { place, service } = req.body;
    // console.log(place, service);

    const url = 'https://serpapi.com/search.json';

    try{
        const params = {
            engine: 'google_local',
            q: `${service} near me`,
            location: place,
            api_key: process.env.SERPAPI_KEY,
        };

        const response = await axios.get(url, { params });
        let localService = response.data;

        // console.log(response);

        if(response){
            return res.status(200).json({
                success: true,
                message: "Local services fetched",
                localService
            });
        }
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
}