"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var antd_mobile_1 = require("antd-mobile");
var antd_mobile_icons_1 = require("antd-mobile-icons");
var umi_1 = require("umi");
var Filmname = /** @class */ (function (_super) {
    __extends(Filmname, _super);
    function Filmname() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Filmname.prototype.componentDidMount = function () {
        if (this.props.list.length === 0) {
            this.props.dispatch({
                type: "filmname/getlist",
                pyload: { cityId: this.props.cityId }
            });
        }
        else {
            console.log("缓存数据");
        }
    };
    Filmname.prototype.render = function () {
        var _this = this;
        // console.log(this.props.list)
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(antd_mobile_1.NavBar, { backArrow: false, onBack: function () {
                    _this.props.history.push("/city");
                    // console.log(this.props)
                    _this.props.dispatch({
                        type: "filmname/clearlist"
                    });
                }, back: this.props.cityname, left: react_1["default"].createElement(antd_mobile_icons_1.EnvironmentOutline, null), right: react_1["default"].createElement(antd_mobile_icons_1.SearchOutline, { fontSize: 20 }) }, "\u5F71\u9662"),
            this.props.loading && react_1["default"].createElement("div", { style: { fontSize: 20, "textAlign": "center" } },
                react_1["default"].createElement(antd_mobile_1.DotLoading, null)),
            // this.props.list.map(item => <li key={item.cinemaId}>{item.name}</li>)
            react_1["default"].createElement(antd_mobile_1.List, null, this.props.list.map(function (item) { return (react_1["default"].createElement(antd_mobile_1.List.Item, { key: item.cinemaId, description: item.address }, item.name)); }))));
    };
    return Filmname;
}(react_1.Component));
//connect为高阶函数自动给City创建一个父组件目的为了获取父组件传过来的数据
exports["default"] = umi_1.connect(function (state) {
    //  console.log(state)
    //  console.log(state.filmname.list)
    return {
        a: 1,
        cityname: state.city.cityname,
        list: state.filmname.list,
        cityId: state.city.cityId,
        loading: state.loading.global
    };
})(Filmname);
