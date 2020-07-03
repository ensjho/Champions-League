const express = require('express');
const Team = require('../models/soccerStringModel');

const router = new express.Router();

/** GET / => [team, ...] */

router.get('', async (req, res, next) => {
  try {
    const allTeams = await Team.findAll();
    return res.json({ allTeams });
  } catch (err) {
    return next(err);
  }
});

/** POST / { name } => newTeam */

router.post('', async (req, res, next) => {
  try {
    const newTeam = await Team.addTeam(req.body.name || '');
    return res.json({ newTeam });
  } catch (err) {
    return next(err);
  }
});

/** GET /[name] => Team */

router.get('/:name', (req, res, next) => {
  try {
    const foundTeam = Team.find(req.params.name);
    return res.json({ foundTeam });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[name] => Team */

router.patch('/:name', (req, res, next) => {
  try {
    const foundTeam = Team.update(req.params.name, req.body);
    return res.json({ foundTeam });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[name] => "Removed" */

router.delete('/:name', async (req, res, next) => {
  try {
    const deleteResult = await Team.remove(req.params.name);

    if (deleteResult.status === 404) {
      console.log(deleteResult);
      throw deleteResult;
    }

    return res.json({ message: 'Deleted' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
