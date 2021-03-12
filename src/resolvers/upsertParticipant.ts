module.exports = async (
  root,
  { input: { id, email, phoneNumber, firstName, lastName, group } },
  { models }
) => {
  await models.Participants.upsert(
    {
      id,
      email,
      phoneNumber,
      firstName,
      lastName,
      group,
    },
    { where: { id } }
  );

  return { id, email, phoneNumber, firstName, lastName, group };
};
