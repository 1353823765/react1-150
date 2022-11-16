const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://i.maoyan.com",
      changeOrigin: true,
    })
  );
};
//https://i.maoyan.com/ajax/comingList?ci=10&limit=10&movieIds=&token=&optimus_uuid=67C015703F3D11EDA12321677D5A772F30A18A5E7131422DBCF073ED74CE2128&optimus_risk_level=71&optimus_code=10
//https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E7%A7%A6%E7%9A%87%E5%B2%9B&ci=122&channelId=4
//https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E7%A7%A6%E7%9A%87%E5%B2%9B&ci=122&channelId=4
