import dashboardPage from "../../views/pages/dashboard/dashboard";
import RegisterSchool from "../../views/pages/dashboard/registerschool";
import settings from "../../views/pages/settings/settings";


export const defaultRoute = '/listschool',

    dashboardRouter = [
        {
            path: `${defaultRoute}`,
            name: 'Schools List',
            component: dashboardPage,
            exact: true,
        },
        {
            path: `/register`,
            name: 'Register New School',
            component: RegisterSchool,
            exact: true,
        },
        {
            path: `/settings`,
            name: 'Settings',
            component: settings,
            exact: true,
        }

    ];

export default dashboardRouter
