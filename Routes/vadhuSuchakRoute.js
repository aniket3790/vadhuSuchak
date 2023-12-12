const {getVadhuSuchak,postVadhuSuchak,putVadhuSuchak,deleteVadhuSuchak} = require('../Controllers.js/vadhuSuchakController')

const route = require('express').Router()

route.get('/',getVadhuSuchak)
route.post('/',postVadhuSuchak)
route.put('/:id',putVadhuSuchak)
route.delete('/:id',deleteVadhuSuchak)

module.exports = route