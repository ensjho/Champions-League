/** Team names */
const teams = require('../fakeDb');

class Team {
  /** Grabbing All teamNames. */
  static findAll() {
    return teams;
  }

  /** Add teamName. */
  static async addTeam(stringName) {
    teams.unshift(stringName);
    return stringName;
  }

  /** Find matching name. */

  static async find(name) {
    const foundTeam = teams.find(v => v.name === name);
    if (foundTeam === undefined) {
      return { message: 'Not Found', status: 404 };
    }
    return foundTeam;
  }

  /** Update teamName. */
  static async update(name, data) {
    const foundTeamItem = Team.find(name);
    if (foundTeamItem === undefined) {
      return { message: 'Not Found', status: 404 };
    }
    foundTeamItem.name = data.name;

    return foundTeamItem;
  }

  /** Remove item with matching id. */
  static async remove(stringName) {
    console.log(teams);
    const foundIdx = teams.findIndex(teamname => teamname === stringName);
    console.log(foundIdx);
    if (foundIdx === -1) {
      return { message: 'Not Found', status: 404 };
    }
    teams.splice(foundIdx, 1);
    return { message: 'deleted', status: 200 };
  }
}

module.exports = Team;
