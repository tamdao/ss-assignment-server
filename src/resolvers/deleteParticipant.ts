module.exports = (root, { id }, { models }) =>
  models.Participants.destroy({
    where: { id },
  });
