"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("@docusaurus/router");
var styles_module_css_1 = require("./styles.module.css");
// ReactNode equivalent of HTMLElement#innerText
function getText(node) {
    var curNode = node;
    while ((0, react_1.isValidElement)(curNode)) {
        curNode = react_1.Children.toArray(curNode.props.children)[0];
    }
    return curNode;
}
var APITableRow = (0, react_1.forwardRef)(function (_a, ref) {
    var name = _a.name, children = _a.children;
    var entryName = getText(children);
    var id = name ? "".concat(name, "-").concat(entryName) : entryName;
    var anchor = "#".concat(id);
    var history = (0, router_1.useHistory)();
    return (<tr id={id} tabIndex={0} ref={history.location.hash === anchor ? ref : undefined} onClick={function () {
            history.push(anchor);
        }} onKeyDown={function (e) {
            if (e.key === 'Enter') {
                history.push(anchor);
            }
        }}>
        {children.props.children}
      </tr>);
});
/*
 * Note: this is not a quite robust component since it makes a lot of
 * assumptions about how the children looks; however, those assumptions
 * should be generally correct in the MDX context.
 */
function APITable(_a) {
    var children = _a.children, name = _a.name;
    var _b = react_1.Children.toArray(children.props.children), thead = _b[0], tbody = _b[1];
    var highlightedRow = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = highlightedRow.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [highlightedRow]);
    var rows = react_1.Children.map(tbody.props.children, function (row) { return (<APITableRow name={name} ref={highlightedRow}>
        {row}
      </APITableRow>); });
    return (<table className={styles_module_css_1["default"].apiTable}>
      {thead}
      <tbody>{rows}</tbody>
    </table>);
}
exports["default"] = APITable;
