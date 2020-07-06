/*
 * ADDFORMconstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_TEAMNAME = 'boilerplate/AddTeam/CHANGE_TEAMNAME';
export const ADD_TEAMNAME = 'boilerplate/AddTeam/ADD_TEAMNAME';
export const ADD_TEAMNAME_SUCCESS = 'boilerplate/AddTeam/ADD_TEAMNAME_SUCCESS';
export const ADD_TEAMNAME_ERROR = 'boilerplate/AddTeam/ADD_TEAMNAME_ERROR';
export const RESET_MESSAGES = 'boilerplate/AddTeam/RESET_MESSAGES';
