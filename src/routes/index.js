import { getAllListingsRoutes } from "./get_all_listings";
import { getListingRoutes } from "./getlisting";
import { addViewsToListings } from "./addviews";
import { updateListings } from "./updatelisting";
import { deletelistings } from "./deletelistings";
import { getUserListingRoute } from "./getuserlistings";
import { createNewListingRoute } from "./createnewlisting";
export default [
    addViewsToListings,
    getAllListingsRoutes,
    getListingRoutes,
    deletelistings,
    createNewListingRoute,
    updateListings,
    getUserListingRoute
];
//boom by HAPI offers range of automiatic error handling by the help of error suites
//and BOOM package