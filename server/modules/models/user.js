// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const timestamps = require('mongoose-timestamp');
// const bcrypt = require('bcrypt');
//
// const UserSchema = new Schema({
//     name : { type : String , required : true} ,
//     email : { type : String , required : true , unique : true} ,
//     password : { type : String , required : true} ,
//     courses : [{ type : Schema.Types.ObjectId , ref : 'Course'}]
// });
// UserSchema.plugin(timestamps);
//
//
// UserSchema.pre('save' , function(next) {
//
//     bcrypt.hash(this.password, 10, (err, hash) => {
//         this.password = hash;
//         next();
//     });
// })
//
// module.exports = mongoose.model('User' , UserSchema);
const bcrypt = require( "bcrypt" );
module.exports = {
	userCreate : ( req, res ) => {
		let pass = req.body.password;
		const salt = bcrypt.genSaltSync( 10 );
		pass = bcrypt.hashSync( pass, salt );

		const query = "INSERT INTO users (userId, password) VALUES ?";

		const values = [ [ req.body.userId, pass ] ];
		db.query( query, [ values ], ( err, result ) => {
			if ( err ) throw err;
			console.log( "Number of records inserted: " + result.affectedRows );
		} );
	},

	getUser(userId){
		return new Promise((resolve , reject) => {
			db.query(`SELECT * FROM users WHERE userId = '${userId}'`,  (err, result) =>{
				if (err) reject(err);
				console.log(result);
				resolve(result)
			});
		});
	},

	getUserById(id){
		return new Promise((resolve , reject) => {
			db.query(`SELECT * FROM users WHERE id = '${id}'`,  (err, result) =>{
				if (err) reject(err);
				resolve(result)
			});
		});
	},

	updateName(id, name){

		return new Promise((resolve , reject) => {
			db.query(`UPDATE users SET name = '${name}' WHERE id = '${id}'`,  (err, result) =>{
				if (err) reject(err);
				resolve(result)
			});
		});
	}
};