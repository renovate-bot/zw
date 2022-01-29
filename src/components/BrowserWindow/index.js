"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
exports.__esModule = true;
var react_1 = require("react");
var styles_module_css_1 = require("./styles.module.css");
function BrowserWindow(_a) {
    var children = _a.children, minHeight = _a.minHeight, _b = _a.url, url = _b === void 0 ? 'https://z-shell.pages.dev/' : _b;
    return (<div className={styles_module_css_1["default"].browserWindow} style={{ minHeight: minHeight }}>
      <div className={styles_module_css_1["default"].browserWindowHeader}>
        <div className={styles_module_css_1["default"].buttons}>
          <span className={styles_module_css_1["default"].dot} style={{ background: '#f25f58' }}/>
          <span className={styles_module_css_1["default"].dot} style={{ background: '#fbbe3c' }}/>
          <span className={styles_module_css_1["default"].dot} style={{ background: '#58cb42' }}/>
        </div>
        <div className={styles_module_css_1["default"].browserWindowAddressBar}>{url}</div>
        <div className={styles_module_css_1["default"].browserWindowMenuIcon}>
          <div>
            <span className={styles_module_css_1["default"].bar}/>
            <span className={styles_module_css_1["default"].bar}/>
            <span className={styles_module_css_1["default"].bar}/>
          </div>
        </div>
      </div>

      <div className={styles_module_css_1["default"].browserWindowBody}>{children}</div>
    </div>);
}
exports["default"] = BrowserWindow;
