import loginRouter from "./modules/loginRoutes";


export const defaultRoute = {
    redirect: '/login'
};


const publicRoutes = [
    ...loginRouter
]

export default publicRoutes
