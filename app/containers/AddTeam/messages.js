/*
 * AddTeam Messages
 *
 * This contains all the text for the AddTeam component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.AddTeam';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.AddTeamIntro.header`,
    defaultMessage: 'Do you have what it takes to win the Champions League?',
  },
  startProjectMessage: {
    id: `${scope}.AddTeamIntro.message`,
    defaultMessage:
      'Your team name has to be between 1 and 20 characters (number & symbols allowed)',
  },
  startProjectMessage2: {
    id: `${scope}.AddTeamIntro.message2`,
    defaultMessage: 'Keep in mind that no dulpicate names are allowed!',
  },
  trymeHeader: {
    id: `${scope}.AddTeam.header`,
    defaultMessage: 'Add Your Team!',
  },
});
