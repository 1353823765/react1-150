export default {
  'get /users': { name: 'tom', age: 14 },
  'post /users/login': (req, res) => {
    console.log(req.body);
    if (req.body.username === 'tom' && req.body.password === '123') {
      res.send({
        ok: 1,
      });
    } else {
      res.send({
        ok: 0,
      });
    }
  },
   
};
