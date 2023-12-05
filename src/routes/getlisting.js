
import { fakeListings } from "./fakedata";
import Boom from "@hapi/boom";
export const getListingRoutes = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const id = req.params.id;
        const listing = fakeListings.find(listing => listing.id === id);
        if (!listing) throw Boom.notFound(`listing does not exist`);
        return listing
    }

}