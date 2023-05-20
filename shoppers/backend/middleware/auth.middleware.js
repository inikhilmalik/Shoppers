

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const url = req.url;
  const {token} = req.headers;
  if (url.includes("cart")) {
    if (!token) {
      return res.status(401).send({ error: "token is missing" });
    }
    try {
      const decoded = jwt.verify(token, "amaze");
      if (!decoded) {
        return res.status(401).send({ error: "Unauthorized" });
      }
      if(decoded){
        req.body.userID = decoded.userID;
      }
      //relationship form here

      next();
    } catch (error) {
      res.status(401).send({ error: "Unauthorized" });
    }
  }
};

module.exports = { auth };
