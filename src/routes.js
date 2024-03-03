import HomePage from "./pages/HomePage/HomePages";
import Monitor from "./pages/Monitor/Monitor";
import Faculty from "./pages/Faculty/Faculty";
import Year from "./pages/Year/Year";
import Applicants from "./pages/Applicants/Applicants";
import Students from "./pages/Students/Students";
import Russia from "./pages/Russia/Russia";
import World from "./pages/World/World";
import {
    APPLICANTS_ROUTE,
    FACULTY_ROUTE,
    HOME_ROUTE,
    MONITOR_ROUTE,
    RUSSIA_ROUTE,
    STUDENTS_ROUTE,
    YEAR_ROUTE,
    WORLD_ROUTE,
    DJANGO_ROUTE
} from "./utils/consts";
import Django from "./pages/Django/Django";

export const authRoutes = [
    {
        path: MONITOR_ROUTE,
        Component: Monitor
    },
    {
        path: FACULTY_ROUTE,
        Component: Faculty
    },
    {
        path: YEAR_ROUTE,
        Component: Year
    },
    {
        path: APPLICANTS_ROUTE,
        Component: Applicants
    },
    {
        path: STUDENTS_ROUTE,
        Component: Students
    },
    {
        path: RUSSIA_ROUTE,
        Component: Russia
    },
    {
        path: WORLD_ROUTE,
        Component: World
    },
    {
        path: DJANGO_ROUTE,
        Component: Django
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    }
]
