const database = require("../common/database");
const q = require("q");

const connection = database.getConnection();

const getAllUsers = () => {
    let defer = q.defer();
    connection.query('SELECT * FROM accounts',
        (err, result) => {
            if (err) defer.reject(err);
            else {
                //   console.log(sql);
                defer.resolve(result);
            }
        });
    return defer.promise;
}

const getUserById = id => {
    let defer = q.defer();
    connection.query(
        "SELECT * FROM accounts WHERE a_id = ?",
        id,
        (err, rows) => {
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve(rows);
            }
        }
    );
    return defer.promise;
}


module.exports = {
    getAllUsers: getAllUsers,
    getUserById: getUserById
}