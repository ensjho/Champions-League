const teamNames = require('../fakeDb');
const ExpressError = require('../helpers/ExpressError');

/** Related functions for team. */

class Team {
  /** Find all teamNames(strings). */
  static findAll() {
    return teamNames;
  }

  /** Add a new teamName(string) to database.
   *  Prepend a new string to the beginning of the database.
   */
  static addTeam(name) {
    const checkDuplicateTeam = teamNames.indexOf(name);
    if (checkDuplicateTeam !== -1) {
      throw new ExpressError(
        'Existing Team Name, please choose other team name!',
        400,
      );
    }
    teamNames.unshift(name);
    return name;
  }

  /** Given a teamName, return the index position of matching team Name.
   *  Throw error if `name` does not exist in the database;
   */
  static findTeamName(name) {
    const foundTeam = teamNames.indexOf(name);
    if (foundTeam === -1) {
      throw new ExpressError('Not Found', 404);
    }
    return teamNames[foundTeam];
  }

  /** Update existing teamName with `data`.
   *  Throw error if `name` is not found in the database;
   */
  static updateTeamName(name, data) {
    const foundIdx = teamNames.findIndex(teamname => teamname === name);
    if (foundIdx === -1) {
      throw new ExpressError('Not Found', 404);
    }
    /** Checking for duplicates */
    const checkDuplicateTeam = teamNames.indexOf(data);
    if (checkDuplicateTeam !== -1) {
      throw new ExpressError(
        'Existing Team Name, please choose other team name!',
        400,
      );
    }

    teamNames[foundIdx] = data.name;

    return teamNames[foundIdx];
  }

  /** Remove teamName in database that matches stringName.
   *  Throw error if `name` is not found in the database;
   */
  static removeTeamName(name) {
    const foundIdx = teamNames.findIndex(teamname => teamname === name);
    if (foundIdx === -1) {
      throw new ExpressError('Not Found', 404);
    }
    teamNames.splice(foundIdx, 1);
    return { message: 'Deleted', status: 200 };
  }
}

module.exports = Team;
