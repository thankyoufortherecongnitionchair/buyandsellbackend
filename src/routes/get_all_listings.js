import { fakeListings } from "./fakedata";

export const getAllListingsRoutes = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, h) => {
        return fakeListings;
    }
}