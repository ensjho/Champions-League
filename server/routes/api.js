const express = require('express');
const { validate } = require('jsonschema');
const ExpressError = require('../helpers/ExpressError');
const Team = require('../models/soccerStringModel');
const { teamNameNewSchema, teamNameUpdateSchema } = require('../schemas');

const router = new express.Router();

/** GET / => [ name(string), ...] */

router.get('', (req, res, next) => {
  try {
    const allTeamNames = Team.findAll();
    return res.json({ allTeamNames });
  } catch (err) {
    return next(err);
  }
});

/** POST /
 * { name } => { message: `name` successfully added!} */

router.post('', (req, res, next) => {
  try {
    const validation = validate(req.body, teamNameNewSchema);

    if (!validation.valid) {
      throw new ExpressError(validation.errors.map(e => e.stack), 400);
    }

    const newTeam = Team.addTeam(req.body.name);

    if (!newTeam) {
      throw new ExpressError();
    }
    return res.json({
      message: `Team name: ${newTeam} successfully added`,
    });
  } catch (err) {
    return next(err);
  }
});

/** GET /[name] => { existingTeamName: name } */

router.get('/:name', (req, res, next) => {
  try {
    const existingTeamName = Team.findTeamName(req.params.name);
    return res.json({ existingTeamName });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /
 * [ name, req.body ] => { updatedTeamName: name }  */

router.patch('/:name', async (req, res, next) => {
  try {
    const validation = validate(req.body, teamNameUpdateSchema);

    if (!validation.valid) {
      throw new ExpressError(validation.errors.map(e => e.stack), 400);
    }

    const updatedTeamName = Team.updateTeamName(req.params.name, req.body);
    return res.json({ updatedTeamName });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[name] => "Removed" */

router.delete('/:name', (req, res, next) => {
  try {
    const deleteResult = Team.removeTeamName(req.params.name);

    if (deleteResult.status === 404) {
      throw deleteResult;
    }

    return res.json({ message: 'Deleted' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
