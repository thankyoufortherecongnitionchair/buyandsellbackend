import Hapi from '@hapi/hapi'
import routes from './routes'

const start = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });
    routes.forEach(route => server.route(route));
    await server.start()
    console.log('server listenig on port 8000');

}
process.on('unhandledRejection', error => {
    console.log(error)
})
start()