const express = require('express')
const okta = require('@okta/okta-sdk-nodejs')

const { startCase } = require('lodash')



const router = express.Router()

const client = new okta.Client({
  orgUrl: process.env.ORG_URL,
  token: process.env.REGISTRATION_TOKEN,
})



router.get('/', function (req, res, next) {
        client.getGroup('00grdpk6wniUyuH51356')
        .then((grp)=>{
            console.log(grp,"added");
        })
})

module.exports = router
