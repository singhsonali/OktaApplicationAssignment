const express = require('express')
const okta = require('@okta/okta-sdk-nodejs')

const { startCase } = require('lodash')



const router = express.Router()

const client = new okta.Client({
  orgUrl: process.env.ORG_URL,
  token: process.env.REGISTRATION_TOKEN,
})


router.get('/', function (req, res, next) {
  let usersArray = [];
  const orgUsersCollection = client.listUsers();
  orgUsersCollection.each(user => {
    // console.log("srt", user.profile.firstName, "en");
    let userObj = {};
    userObj.id = user.id;
    userObj.profileDetails = user.profile;
    usersArray.push(userObj);

  })
    .then(() => {
      // console.log("start", usersArray, "end");
      res.render('admin', {
        title: 'Admin Page',
        usersArray,
        user: req.user,
      })
    })
})


router.post('/', (req, res) => {
  console.log("inside make");
  console.log(req.body.id, "post")
  // console.log(process.env['ADMIN_GROUP_ID'],"inside id");
  let grp = client.getGroup('00grdothzB8NPYgVX356');
  let groupId = {};
  grp.then((gp)=>{
    console.log(gp,"fghj");
    return client.addUserToGroup(gp.id,req.body.id);
  })

  .then((resps)=>{
    console.log(resps,'done');
    res.render('admin', {
      title: 'Admin Page',
      msg : 'User added in Admin group'
    })
    // res.redirect(200,'/admin',{
    //   // title: 'Admin Page',
    //     msg : 'User added in Admin group'
    })
  .catch((err)=>{
    console.log(err);
  })
  // client.getUser(req.body.id)
  //   .then(user => {
  //     console.log(user);
  //   });
  // const newGroup = {
  //   profile: {
  //     name: 'Admin Users Group1'
  //   }
  // };

  // client.createGroup(newGroup)
  // .then(group => {
  //   console.log('Created group', group);
  // })
  // .catch((err)=>{
  //   console.log(err,"error");
  // });
})

function abc(){
  console.log('<<<<<<<<<<<<<<<<<<<<<<')
}


module.exports = router
