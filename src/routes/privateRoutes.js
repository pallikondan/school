
// Import All Private Routes Here
import dashboardRouter from "./modules/dashboardRoutes";


export const defaultPrivateRoute = {
    redirect: '/listschool'
};


const privateRoutes = [
    ...dashboardRouter,
];



export default privateRoutes;