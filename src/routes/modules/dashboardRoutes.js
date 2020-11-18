import dashboardPage from "../../views/pages/dashboard/dashboard";
import RegisterSchoolModal from "../../views/pages/dashboard/registerschool";
import UserModal from "../../views/pages/modals/userModal";
import UserDetailsPage from "../../views/pages/dashboard/userDetails";
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
            component: UserModal,
            exact: true,
        },
        {
            path: `/userdetails`,
            name: 'User Details',
            component: UserDetailsPage,
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
