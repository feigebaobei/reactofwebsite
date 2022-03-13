let host = window.location.host
let baseConfig = {
    serveAliHost: 'wushusandavercel.com',
    serveAliPort: '4000',
    serveLocalHost: 'localhost',
    serveLocalPort: '4000'
};
let config = {
    serveHost: 'wushusandavercel.com',
    servePort: '4000',
};
let reg = new RegExp('localhost')
if (reg.test(host)) {
    config.serveHost = baseConfig.serveLocalHost
    config.servePort = baseConfig.serveLocalPort
}
export default config