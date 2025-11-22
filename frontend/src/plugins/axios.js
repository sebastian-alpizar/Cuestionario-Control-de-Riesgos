import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

axios.defaults.withCredentials = true;

api.interceptors.request.use(config => {
    // Obtener el token CSRF de las cookies
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('XSRF-TOKEN');
    
    if (token) {
        // URL decode el token como especifica la documentación
        config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token);
    }

    return config;
});

export default api;