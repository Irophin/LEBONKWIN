import { Router } from 'express';
import routeAd from './routes/Ad';
import routeUser from './routes/User';
import routeCategory from './routes/Category';


const api = Router();

api.use('/ad', routeAd);
api.use('/user', routeUser);
api.use('/category', routeCategory);

api.get('/', (req, res) => {
    res.send('Basic API');
});

export default api;