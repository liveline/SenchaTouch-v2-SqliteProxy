Ext.data.JsonP.TomAlex0_data_proxy_SqliteStorage({"parentMixins":[],"singleton":false,"statics":{"property":[],"event":[],"css_var":[],"method":[],"css_mixin":[],"cfg":[]},"requires":[],"mixins":[],"code_type":"ext_define","inheritable":false,"meta":{"author":["Thomas Alexander"]},"uses":[],"aliases":{"proxy":["sqlitestorage"]},"superclasses":["Ext.data.proxy.Client"],"component":false,"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.data.SqliteStorageProxy</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.proxy.Client<div class='subclass '><strong>TomAlex0.data.proxy.SqliteStorage</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage' target='_blank'>SqliteStorage.js</a></div></pre><div class='doc-contents'><p>SqliteStorage is simply a superclass for the localStorage and sqlitestorage proxies. It uses the  HTML5 Sqlite Database storage to\nsave model instances for offline use.</p>\n\n<h2>Usage</h2>\n\n<p>Just define a <code>sqlitestorage</code> proxy on your model definition:</p>\n\n<pre><code>Ext.define(\"Contact\", {\n    extend: \"Ext.data.Model\",\n\n    config: {\n        idProperty: 'uniqueid',\n        clientIdProperty: 'id',\n        fields: [\n            {\n                name: 'id',\n                type: 'int',\n                fieldOption: 'PRIMARY KEY'\n            },{\n                name: 'lastName',\n                type: 'string'\n            },{\n                name: 'firstName',\n                type: 'string'\n            }\n        ],\n        proxy: {\n            type: 'sqlitestorage',\n            dbConfig: {\n                tablename: 'contacts',\n                dbConn: dbConnection\n            },\n            reader: {\n                type: 'array'\n            }\n        }\n    },\n\n    writer: {\n        type: 'array'\n    }\n})\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructFields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-constructFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-constructFields' class='name expandable'>constructFields</a>( <span class='pre'></span> ) : String<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Get reader data and set up fields accordingly\nUsed for table creation only ...</div><div class='long'><p>Get reader data and set up fields accordingly\nUsed for table creation only</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>fields separated by a comma</p>\n</div></li></ul></div></div></div><div id='method-createTable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-createTable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-createTable' class='name expandable'>createTable</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Creates table if not exists ...</div><div class='long'><p>Creates table if not exists</p>\n</div></div></div><div id='method-getDb' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-getDb' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-getDb' class='name expandable'>getDb</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Get Database instance ...</div><div class='long'><p>Get Database instance</p>\n</div></div></div><div id='method-getTableFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-getTableFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-getTableFields' class='name expandable'>getTableFields</a>( <span class='pre'>Object records</span> )</div><div class='description'><div class='short'>function to return records w.r.t to table fields. ...</div><div class='long'><p>function to return records w.r.t to table fields. If model has fields\nwhich is not table field name, it will break create and update functionalitites.This looks for field property \"isTableField\"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>records</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-parseData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-parseData' class='name expandable'>parseData</a>( <span class='pre'>Object tx, Object rs</span> ) : Array<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Created array of objects, each representing field=>value pair. ...</div><div class='long'><p>Created array of objects, each representing field=>value pair.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tx</span> : Object<div class='sub-desc'><p>Transaction</p>\n</div></li><li><span class='pre'>rs</span> : Object<div class='sub-desc'><p>Response</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>Returns parsed data</p>\n</div></li></ul></div></div></div><div id='method-queryDB' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-queryDB' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-queryDB' class='name expandable'>queryDB</a>( <span class='pre'>Object dbConn, String sql, Function successcallback, Function errorcallback, Array params, Function callback</span> )</div><div class='description'><div class='short'>execute sql statements ...</div><div class='long'><p>execute sql statements</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dbConn</span> : Object<div class='sub-desc'><p>Database connection Value</p>\n</div></li><li><span class='pre'>sql</span> : String<div class='sub-desc'><p>Sql Statement</p>\n</div></li><li><span class='pre'>successcallback</span> : Function<div class='sub-desc'><p>success callback for sql execution</p>\n</div></li><li><span class='pre'>errorcallback</span> : Function<div class='sub-desc'><p>error callback for sql execution</p>\n</div></li><li><span class='pre'>params</span> : Array<div class='sub-desc'><p>sql statement parameters</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>additional callback</p>\n</div></li></ul></div></div></div><div id='method-removeRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-removeRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-removeRecord' class='name expandable'>removeRecord</a>( <span class='pre'>Mixed id</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Physically removes a given record from the object store. ...</div><div class='long'><p>Physically removes a given record from the object store.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Mixed<div class='sub-desc'><p>The id of the record to remove</p>\n</div></li></ul></div></div></div><div id='method-setRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-setRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-setRecord' class='name expandable'>setRecord</a>( <span class='pre'>Ext.data.Model record</span> )</div><div class='description'><div class='short'>Saves the given record in the Proxy. ...</div><div class='long'><p>Saves the given record in the Proxy.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>The model instance</p>\n</div></li></ul></div></div></div><div id='method-throwDbError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-throwDbError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-throwDbError' class='name expandable'>throwDbError</a>( <span class='pre'>Object tx, Object rs</span> )</div><div class='description'><div class='short'>Output Query Error ...</div><div class='long'><p>Output Query Error</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tx</span> : Object<div class='sub-desc'><p>Transaction</p>\n</div></li><li><span class='pre'>rs</span> : Object<div class='sub-desc'><p>Response</p>\n</div></li></ul></div></div></div><div id='method-truncate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-truncate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-truncate' class='name expandable'>truncate</a>( <span class='pre'>Object tablename</span> )</div><div class='description'><div class='short'>Destroys all records stored in the proxy ...</div><div class='long'><p>Destroys all records stored in the proxy</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tablename</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TomAlex0.data.proxy.SqliteStorage'>TomAlex0.data.proxy.SqliteStorage</span><br/><a href='source/SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage-method-updateRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TomAlex0.data.proxy.SqliteStorage-method-updateRecord' class='name expandable'>updateRecord</a>( <span class='pre'>Ext.data.Model record</span> )</div><div class='description'><div class='short'>Updates the given record. ...</div><div class='long'><p>Updates the given record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>The model instance</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"name":"TomAlex0.data.proxy.SqliteStorage","mixedInto":[],"html_meta":{"author":null},"tagname":"class","extends":"Ext.data.proxy.Client","id":"class-TomAlex0.data.proxy.SqliteStorage","files":[{"filename":"SqliteStorage.js","href":"SqliteStorage.html#TomAlex0-data-proxy-SqliteStorage"}],"alternateClassNames":["Ext.data.SqliteStorageProxy"],"inheritdoc":null,"members":{"event":[],"property":[],"css_var":[],"method":[{"meta":{"private":true},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"constructFields","id":"method-constructFields","tagname":"method"},{"meta":{"private":true},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"createTable","id":"method-createTable","tagname":"method"},{"meta":{"private":true},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"getDb","id":"method-getDb","tagname":"method"},{"meta":{},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"getTableFields","id":"method-getTableFields","tagname":"method"},{"meta":{"private":true},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"parseData","id":"method-parseData","tagname":"method"},{"meta":{},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"queryDB","id":"method-queryDB","tagname":"method"},{"meta":{"private":true},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"removeRecord","id":"method-removeRecord","tagname":"method"},{"meta":{},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"setRecord","id":"method-setRecord","tagname":"method"},{"meta":{},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"throwDbError","id":"method-throwDbError","tagname":"method"},{"meta":{},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"truncate","id":"method-truncate","tagname":"method"},{"meta":{},"owner":"TomAlex0.data.proxy.SqliteStorage","name":"updateRecord","id":"method-updateRecord","tagname":"method"}],"css_mixin":[],"cfg":[]}});