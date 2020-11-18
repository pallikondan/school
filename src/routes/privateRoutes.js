
// Import All Private Routes Here
import dashboardRouter,{adminRouter} from "./modules/dashboardRoutes";


export const defaultPrivateRoute = {
    redirect: '/listschool'
};

export const adminRoutes = [
    ...adminRouter
]



const privateRoutes = [
    ...dashboardRouter,
];



export default privateRoutes;