const Controller = require(`${config.path.controller}/Controller`);
const UserTransform = require(`${config.path.transform}/v1/UserTransform`);
const bcrypt = require('bcrypt');
const User = require(`${config.path.model}/user`);

module.exports = new class CourseController extends Controller {
    register(req , res) {
	    //console.log('req', req.body.password)
        req.checkBody('userId' , 'userId empty').notEmpty();
        req.checkBody('password' , 'userId password').notEmpty();
        
        if(this.showValidationErrors(req, res)) 
            return;

	    User.userCreate(req , res);
            return res.json({
                data : 'success',
                success : true
            });

    }

    login(req , res) {
	    req.checkBody('userId' , 'userId empty').notEmpty();
	    req.checkBody('password' , 'userId password').notEmpty();

        if(this.showValidationErrors(req, res)) 
            return;


	    User.getUser(req.body.userId).then((data)=> {

		    if(data.length==0)
			    return res.status(200).json({
				    data : 'not valid',
				    success : false
			    });

		    bcrypt.compare(req.body.password , data[0].password , (err , status) => {

			    if(! status)
				    return res.status(200).json({
					    success : false,
					    data : 'پسورد وارد شده صحیح نمی باشد'
				    })


			    return res.json({
				    data : new UserTransform().transform(data[0],true),
				    success : true
			    });
		    })

	    });

    }
}