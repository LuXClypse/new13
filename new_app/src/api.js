import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    headers: { 'Content-Type': 'application/json' },
});

export const fetchWeather = async (city) => {
    try {
        const response = await apiClient.get(`/current.json`, {
            params: {
                key: '9e26db3ac3c240d8b1c154122241612',
                q: city,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
