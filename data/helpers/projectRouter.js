const express = require('express');

const Project = require('./projectModel.js');
const Action = require('./actionModel');


const router = express.Router();





router.get('/', (req, res) => {
  Project.getProjectActions(req.query)
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


router.get('/:id', (req, res) => {
  Project.get(req.params.id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving project',
      });
    });
});

router.post('/', (req, res) => {
    // const id = { id: 4, name: 'Test', description: 'test', completed: false} //Test string
  Project.insert(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error adding Post',
      });
    });
});

router.delete('/:id', (req, res) => {
  Project.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'De-Posted!' });
      } else {
        res.status(404).json({ message: 'Post cannot be found' });
      }
    })
    .catch(error => {

      console.log(error);
      res.status(500).json({
        message: 'Error removing post',
      });
    });
});

router.put('/:id',  (req, res) => {
    const { id } = req.params
    const changes = req.body
    

  Project.update(id, changes)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'Post could not be found' });
      }
    })
    .catch(error => {

      console.log(error);
      res.status(500).json({
        message: 'Error updating post',
      });
    });
});


router.get('/:id/actions', (req, res) => {
  Action.get(req.params.id)
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(error => {

      console.log(error);
      res.status(500).json({
        message: 'Error getting the Actions for Project',
      });
    });
});

router.post('/:id/actions', (req, res) => {
  const { id } = req.params
//   const id = { project_id: 5, description: 'test', notes: 'test'}
  const { description, notes } = req.body
  
// Action.insert(id)
  Action.insert({ description, notes, project_id: id})
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
     
      console.log(error);
      res.status(500).json({
        message: 'Error getting the Actions for Project',
      });
    });
});

router.put('/:id/actions',  (req, res) => {
    const { id } = req.params
    const changes = req.body

  Action.update(id, changes)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'Post could not be found' });
      }
    })
    .catch(error => {

      console.log(error);
      res.status(500).json({
        message: 'Error updating post',
      });
    });
});

router.delete('/:id/actions', (req, res) => {
    Action.remove(req.params.id)
      .then(count => {
        if (count > 0) {
          res.status(200).json({ message: 'De-Posted!' });
        } else {
          res.status(404).json({ message: 'Post cannot be found' });
        }
      })
      .catch(error => {
  
        console.log(error);
        res.status(500).json({
          message: 'Error removing post',
        });
      });
  });



module.exports = router;
