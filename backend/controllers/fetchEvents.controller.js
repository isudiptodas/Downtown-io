import axios from 'axios';

export const fetchEvents = async (req, res) => {

    const { location } = req.body;
    // console.log(location);
    
    const url = `https://serpapi.com/search.json`;

    try {
        const params = {
            engine: 'google_events',
            q: `Events in ${location}`,
            hl: 'en',
            gl: 'us',         
            api_key: process.env.SERPAPI_KEY,
        };

        const response = await axios.get(url, {
            params
        });

        // console.log(response.data);
        const events = response.data;

        return res.status(200).json({
            success: true,
            message: "Events fetched",
            events
        });
    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}