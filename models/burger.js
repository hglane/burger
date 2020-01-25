var orm = require("../config/orm");
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    updateOne: function(values, condition, cb) {
        orm.updateOne("burgers", values, condition, cb);
    },

    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, cb);
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, cb)
    }
};
module.exports = burger; 