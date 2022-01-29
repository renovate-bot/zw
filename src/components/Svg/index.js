"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var clsx_1 = require("clsx");
var styles_module_css_1 = require("./styles.module.css");
function Svg(props) {
    var svgClass = props.svgClass, colorAttr = props.colorAttr, children = props.children, _a = props.color, color = _a === void 0 ? 'inherit' : _a, _b = props.size, size = _b === void 0 ? 'medium' : _b, _c = props.viewBox, viewBox = _c === void 0 ? '0 0 24 24' : _c, rest = __rest(props, ["svgClass", "colorAttr", "children", "color", "size", "viewBox"]);
    return (<svg viewBox={viewBox} color={colorAttr} aria-hidden className={(0, clsx_1["default"])(styles_module_css_1["default"].svgIcon, styles_module_css_1["default"][color], styles_module_css_1["default"][size], svgClass)} {...rest}>
      {children}
    </svg>);
}
exports["default"] = Svg;
