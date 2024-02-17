import { Server } from 'mock-socket'

/**
 * Creates a new mocked websocket server
 * @param url {string}
 * @param endpoint {string}
 * @param port {number|null}
 * @returns Server
 */
class WsMockServer extends Server {
  private server: Server
  constructor (public url: string, public endpoint: string, public port: number = null, public options: object = null) {
    super(url, options)
    this.server = new Server(`ws://${this.url}${this.port ? ':' + this.port : ''}/${this.endpoint}`)
  }
}
export { WsMockServer }
