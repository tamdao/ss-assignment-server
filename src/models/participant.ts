const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Participants = sequelize.define(
    'Participants',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      countryCode: DataTypes.STRING,
      phoneNumber: {
        type: DataTypes.STRING,
        validate: {
          isNumeric: true,
        },
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      group: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCount(options: any) {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line no-unused-vars
  (Participants as any).associate = function (models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Participants;
};
