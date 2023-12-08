import { rejects } from 'assert';
import mysql from 'mysql';
import { promises } from 'nodemailer/lib/xoauth2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    password: 'aniruddhkygo@2003',
    database: 'buyandsell'
})

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                else resolve({ results, fields });
            })
        }),
    end: () => connection.end(),

}