/**
 * @author Thomas Alexander
 *
 * A SQLite connection to local HTML5 SQLite Database storage.
 *
 * ## Usage
 *
 *     // Create DB connection
 *     dbConnection = Ext.create('TomAlex0.data.proxy.SqliteConnection', {
 *         dbName: "test",
 *         dbVersion: "1.0",
 *         dbDescription: "testdb",
 *         dbSize: 65536
 *     });
 *
 *     // Do something with DB connection
 *     console.log("Connected to local HTML SQLite DB version: " + dbConnection.dbConn.version);
 *
 */
Ext.define('TomAlex0.data.proxy.SqliteConnection', {
    extend: 'Ext.util.Observable',
    /**
     * @cfg {String} dbName
     * Name of database
     */
    dbName: undefined,

     /**
     * @cfg {String} version
     * database version. If different than current, use updatedb event to update database
     */
    dbVersion: '1.19',

    /**
     * @cfg {String} dbDescription
     * Description of the database
     */
    dbDescription: '',

    /**
     * @cfg {String} dbSize
     * Max storage size in bytes
     */
    dbSize: 5 * 1024 * 1024,

    /**
     * @cfg {String} dbConn
     * database connection object
     */
    dbConn: undefined,

    constructor: function(config) {
        config = config || {};
        
        Ext.apply(this, config);
        var me = this;
        
        me.callParent([this]);
        me.dbConn = openDatabase(me.dbName, me.dbVersion, me.dbDescription, me.dbSize);
        return me;
    }
});
