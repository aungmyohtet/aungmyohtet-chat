/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 */

module.exports.models = {

  migrate: 'drop',

  // Your app's default connection.
  // i.e. the name of one of your app's connections (see `config/connections.js`)
  //
  // (defaults to localDiskDb)
    connection: 'TeamAppMongo'
};
