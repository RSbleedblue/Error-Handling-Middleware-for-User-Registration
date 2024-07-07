class userController {
    constructor(){

    }
    registerUser(req,res){
        return res.status(202).json({message : "User created Successfully", success : true});
    }
}
export default userController;