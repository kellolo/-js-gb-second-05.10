
const path = require ('path')

let targetFolder = './dist'
let configServer = {
        dbFolder: path.join( targetFolder, 'server', 'db'),
        publicFolder: path.join( targetFolder, 'public')
    }

let urlDB = (file) => {
    return path.join ( configServer.dbFolder, file) 
}

let urlPublic = (file) => {
    return path.join ( configServer.publicFolder, file) 
}

module.exports = {
    urlDB, urlPublic
}