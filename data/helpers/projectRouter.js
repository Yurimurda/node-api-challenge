const express = require('express');

const Project = require('./projectModel.js');
const Action = require('./actionModel');


const router = express.Router();





router.get('/', (req, res) => {
  Project.get(req.query)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {

      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the project',
      });
    });
});

// // /api/hubs/:id

// router.get('/:id', (req, res) => {
//   Hubs.findById(req.params.id)
//     .then(hub => {
//       if (hub) {
//         res.status(200).json(hub);
//       } else {
//         res.status(404).json({ message: 'Hub not found' });
//       }
//     })
//     .catch(error => {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: 'Error retrieving the hub',
//       });
//     });
// });

// router.post('/', checkFor('name'), uppercaser, (req, res) => {
//   Hubs.add(req.body)
//     .then(hub => {
//       res.status(201).json(hub);
//     })
//     .catch(error => {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: 'Error adding the hub',
//       });
//     });
// });

// router.delete('/:id', (req, res) => {
//   Hubs.remove(req.params.id)
//     .then(count => {
//       if (count > 0) {
//         res.status(200).json({ message: 'The hub has been nuked' });
//       } else {
//         res.status(404).json({ message: 'The hub could not be found' });
//       }
//     })
//     .catch(error => {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: 'Error removing the hub',
//       });
//     });
// });

// router.put('/:id', uppercaser, (req, res) => {
//   Hubs.update(req.params.id, req.body)
//     .then(hub => {
//       if (hub) {
//         res.status(200).json(hub);
//       } else {
//         res.status(404).json({ message: 'The hub could not be found' });
//       }
//     })
//     .catch(error => {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: 'Error updating the hub',
//       });
//     });
// });

// // add an endpoint that returns all the messages for a hub
// // this is a sub-route or sub-resource
// router.get('/:id/messages', (req, res) => {
//   Hubs.findHubMessages(req.params.id)
//     .then(messages => {
//       res.status(200).json(messages);
//     })
//     .catch(error => {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: 'Error getting the messages for the hub',
//       });
//     });
// });

// // add an endpoint for adding new message to a hub
// router.post('/:id/messages', (req, res) => {
//   const messageInfo = { ...req.body, hub_id: req.params.id };

//   Messages.add(messageInfo)
//     .then(message => {
//       res.status(210).json(message);
//     })
//     .catch(error => {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: 'Error getting the messages for the hub',
//       });
//     });
// });

// // TREST : trust but test.

// function uppercaser(req, res, next) {
//   if (typeof req.body.name === 'string') {
//     req.body.name = req.body.name.toUpperCase();
//     // req.name.age = 50;
//     // delete req.foo;

//     next();
//   } else {
//     res.status(400).json({ errorMessage: 'the name should be a string' });
//   }
// }
module.exports = router;
