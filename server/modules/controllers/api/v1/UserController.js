const Controller = require(`${config.path.controller}/Controller`);
const UserTransform = require(`${config.path.transform}/v1/UserTransform`);
const User = require(`${config.path.model}/user`);
module.exports = new class UserController extends Controller {
    index(req , res) {
        return res.json({
            data : new UserTransform().transform(req.user),
	        success : true
        })
    }
	edit(req , res) {
		req.checkBody('name' , 'name empty').notEmpty();

		if(this.showValidationErrors(req, res))
			return;

		User.updateName(req.user.id,req.body.name).then((data)=>{
			return res.json({
				data :{},
				success : true
			})
        });

	}
}