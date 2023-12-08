import { db } from '../database';

export const addViewsToListings = {
    method: 'POST',
    path: '/api/listings/{id}/addview',
    handler: async (req, h) => {
        const id = req.params.id;
        await db.query(
            'UPDATE listings SET views=views+1 WHERE id=?',
            [id],
        );
        const { results } = await db.query(
            'SELECT * FROM listings WHERE id=?',
            [id],
        );
        const updatedlist = results[0];
        return updatedlist;

    }
}