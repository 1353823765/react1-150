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
var umi_1 = require("umi");
require("./index.css");
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Index.prototype.render = function () {
        // console.log(this.props.location.pathname)
        if (this.props.location.pathname === "/city" || this.props.location.pathname.
            includes("/dital")) {
            return react_1["default"].createElement("div", null, this.props.children);
        }
        return (react_1["default"].createElement("footer", null,
            this.props.children,
            react_1["default"].createElement("ul", { className: 'ul' },
                react_1["default"].createElement("li", { className: 'li' },
                    react_1["default"].createElement(umi_1.NavLink, { to: "/film", activeClassName: "active" }, "\u6211\u7684")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(umi_1.NavLink, { to: "/filmlist", activeClassName: "active" }, "\u7535\u5F71")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(umi_1.NavLink, { to: "/filmname", activeClassName: "active" }, "\u5F71\u9662")))));
    };
    return Index;
}(react_1.Component));
exports["default"] = Index;
