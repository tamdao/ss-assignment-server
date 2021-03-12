const participants = require('./participants');

const upsertParticipant = require('./upsertParticipant');
const deleteParticipant = require('./deleteParticipant');

module.exports = {
  Query: {
    participants,
  },
  Mutation: {
    upsertParticipant,
    deleteParticipant,
  },
};
