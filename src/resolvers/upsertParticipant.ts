module.exports = async (
  root,
  {
    input: { id, email, countryCode, phoneNumber, firstName, lastName, group },
  },
  { models }
) => {
  await models.Participants.upsert(
    {
      id,
      email,
      countryCode,
      phoneNumber,
      firstName,
      lastName,
      group,
    },
    { where: { id } }
  );

  return { id, email, countryCode, phoneNumber, firstName, lastName, group };
};
