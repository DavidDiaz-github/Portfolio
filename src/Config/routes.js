//Layout

import Menu from '../Components/Menu/Menu';


//Pages

import Profile from '../Pages/Profile/Profile';
import Home from '../Pages/Home/Home';
import Download from '../Pages/Download/Download';
import Education from '../Pages/Education/Education';
import Project from '../Pages/Project/Project';
import Skill from '../Pages/Skill/Skill';

const routes = [
    {
        path: "/",
        component: Menu,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            }, {
                path: "/profile",
                component: Profile,
                exact: true
            }, {
                path: "/project",
                component: Project,
                exact: true
            }, {
                path: "/education",
                component: Education,
                exact: true
            }, {
                path: "/skill",
                component: Skill,
                exact: true
            }, {
                path: "/download",
                component: Download,
                exact: true
            },
        ]
    }
]

export default routes;