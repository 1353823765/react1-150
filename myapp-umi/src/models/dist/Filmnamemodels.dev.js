"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespace: "filmname",
  state: {
    list: []
  },
  reducers: {
    changelist: function changelist(prevState, action) {
      console.log(action);
      return _objectSpread({}, prevState, {
        list: action.pyload
      });
    },
    clearlist: function clearlist(prevState) {
      return _objectSpread({}, prevState, {
        list: []
      });
    }
  },
  effects: {
    getlist:
    /*#__PURE__*/
    regeneratorRuntime.mark(function getlist(action, obj) {
      var put, call, res;
      return regeneratorRuntime.wrap(function getlist$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // console.log("DD阿诗丹顿")
              // console.log(action,obj)
              put = obj.put, call = obj.call;
              _context.next = 3;
              return call(GETLIST, action.pyload.cityId);

            case 3:
              res = _context.sent;
              _context.next = 6;
              return put({
                type: "changelist",
                pyload: res
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, getlist);
    })
  }
};
exports["default"] = _default;

function GETLIST(id) {
  var res;
  return regeneratorRuntime.async(function GETLIST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(id);
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch("https://m.maizuo.com/gateway?cityId=".concat(id, "&ticketFlag=1&k=7026938"), {
            headers: {
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16675641924707786667589633","bc":"110100"}',
              'X-Host': ' mall.film-ticket.cinema.list'
            }
          }).then(function (res) {
            return res.json();
          }));

        case 3:
          res = _context2.sent;
          console.log(res.data.cinemas);
          return _context2.abrupt("return", res.data.cinemas);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}