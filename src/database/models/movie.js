/* El alias debe ser en inglés
Si se escribe en mayúscula y en individual, puede 
comunicarse correctamente con sql */
module.exports = (sequelize, DataTypes) => {
  const cols = {
    /* No es 100% necesario el declarar el ID
    Lo declara por default */
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATE,
    },
  };
  config = {
    tableName: "movies",
    timestamps: false,
  };
  const Movie = sequelize.define("Movie", cols, config);
  return Movie;
};
