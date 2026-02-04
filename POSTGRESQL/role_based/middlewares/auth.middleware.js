import jwt from "jsonwebtoken";

export const authenticate =(req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({ message: "Token is missing" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("Invalid Token!");
  }
};

export const authorizedRoles=(...allowedRoles)=>{
    return (req, res,next)=>{
        if(!req.user || !allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                message:"You are not authorized to access this resource!"
            })
        }
        next();
    }
}
