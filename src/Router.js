import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./accueil/Accueil";
import Services from "./services/Services";
import Realisations from "./realisations/Realisations";
import Blog from "./blog/Blog";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Accueil/>
    },
    {
        path: '/services',
        element: <Services/>
    },
    {
        path: '/realisations',
        element: <Realisations/>
    },
    {
        path: '/blog',
        element: <Blog/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
]);

function Root() {
    return <RouterProvider router={router}/>
}

export default Root

