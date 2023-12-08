
import { fakeListings } from "./fakedata";
import { db } from '../database';

import Boom from "@hapi/boom";
export const getListingRoutes = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { results } = await db.query(
            'SELECT *FROM listings WHERE id=?',
            [id],  // each id replaces the question mark
            //prevent sql injection..
        );
        const listing = results[0];

        if (!listing) throw Boom.notFound(`listing does not exist`);
        return listing
    }

}