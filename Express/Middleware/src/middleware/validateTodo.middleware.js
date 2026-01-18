export default function validateTodo(req,res,next){
    if(!req.body){
        return res.status(400).json({error:"Request body is missing"});
    }
    const bodykeys=Object.keys(req.body);
    if(!req.body.title||bodykeys.length!==1){
        return res.status(400).json({error:"Invalid request body. Only 'title' is allowed"});
    }
    next();
}