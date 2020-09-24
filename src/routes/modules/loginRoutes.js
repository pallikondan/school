import loginPage from "../../views/pages/login/login";

const loginRouter = [
        {
            path: '/login',
            name: 'login',
            component: loginPage,
            exact: true,
        },


    ];

export default loginRouter
