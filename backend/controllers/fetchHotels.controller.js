import axios from 'axios';

export const fetchHotels = async (req, res) => {
    const { destination, currency, startDate, endDate } = req.body;
    const url = 'https://serpapi.com/search.json';

    // console.log(destination, currency, startDate, endDate);

    try{
        const params = {
            engine: 'google_hotels',
            q: `Hotels and resorts in ${destination}`,
            currency: currency,
            gl: 'us',
            hl: 'en',
            check_in_date: startDate,
            check_out_date: endDate,
            api_key: process.env.SERPAPI_KEY,
        };

        const response = await axios.get(url, {params});
        // console.log(response);
        const result = response.data;

        // console.log(result);

        return res.status(200).json({
            success: true,
            message: "Hotels fetched",
            result
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}