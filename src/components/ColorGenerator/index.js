"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var color_1 = require("color");
var CodeBlock_1 = require("@theme/CodeBlock");
var styles_module_css_1 = require("./styles.module.css");
var COLOR_SHADES = {
    '--ifm-color-primary': {
        adjustment: 0,
        adjustmentInput: '0',
        displayOrder: 3,
        codeOrder: 0
    },
    '--ifm-color-primary-dark': {
        adjustment: 0.1,
        adjustmentInput: '10',
        displayOrder: 4,
        codeOrder: 1
    },
    '--ifm-color-primary-darker': {
        adjustment: 0.15,
        adjustmentInput: '15',
        displayOrder: 5,
        codeOrder: 2
    },
    '--ifm-color-primary-darkest': {
        adjustment: 0.3,
        adjustmentInput: '30',
        displayOrder: 6,
        codeOrder: 3
    },
    '--ifm-color-primary-light': {
        adjustment: -0.1,
        adjustmentInput: '-10',
        displayOrder: 2,
        codeOrder: 4
    },
    '--ifm-color-primary-lighter': {
        adjustment: -0.15,
        adjustmentInput: '-15',
        displayOrder: 1,
        codeOrder: 5
    },
    '--ifm-color-primary-lightest': {
        adjustment: -0.3,
        adjustmentInput: '-30',
        displayOrder: 0,
        codeOrder: 6
    }
};
var DEFAULT_PRIMARY_COLOR = '3578e5';
function ColorGenerator() {
    var _a = (0, react_1.useState)(DEFAULT_PRIMARY_COLOR), baseColor = _a[0], setBaseColor = _a[1];
    var _b = (0, react_1.useState)(COLOR_SHADES), shades = _b[0], setShades = _b[1];
    var color = (0, color_1["default"])("#".concat(baseColor));
    var adjustedColors = Object.keys(shades)
        .map(function (shade) { return (__assign(__assign({}, shades[shade]), { variableName: shade })); })
        .map(function (value) { return (__assign(__assign({}, value), { hex: color.darken(value.adjustment).hex() })); });
    return (<div>
      <p>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="primary_color">
          <strong className="margin-right--sm">Primary Color:</strong>
        </label>{' '}
        <input id="primary_color" className={styles_module_css_1["default"].input} defaultValue={baseColor} onChange={function (event) {
            // Replace all the prefix '#' with an empty string.
            // For example, '#ccc' -> 'ccc', '##ccc' -> 'ccc'
            var colorValue = event.target.value.replace(/^#+/, '');
            try {
                (0, color_1["default"])("#".concat(baseColor));
                setBaseColor(colorValue);
            }
            catch (_a) {
                // Don't update for invalid colors.
            }
        }}/>
      </p>
      <div>
        <table>
          <thead>
            <tr>
              <th>CSS Variable Name</th>
              <th>Hex</th>
              <th>Adjustment</th>
            </tr>
          </thead>
          <tbody>
            {adjustedColors
            .sort(function (a, b) { return a.displayOrder - b.displayOrder; })
            .map(function (value) {
            var variableName = value.variableName, adjustment = value.adjustment, adjustmentInput = value.adjustmentInput, hex = value.hex;
            return (<tr key={variableName}>
                    <td>
                      <code>{variableName}</code>
                    </td>
                    <td>
                      <span className={styles_module_css_1["default"].color} style={{
                    backgroundColor: hex
                }}/>
                      <code className="margin-left--sm">
                        {hex.toLowerCase()}
                      </code>
                    </td>
                    <td>
                      {variableName === '--ifm-color-primary' ? (0) : (<input aria-label={"".concat(variableName, " CSS variable name")} className={styles_module_css_1["default"].input} type="number" value={adjustmentInput} onChange={function (event) {
                        var _a;
                        var newValue = parseFloat(event.target.value);
                        setShades(__assign(__assign({}, shades), (_a = {}, _a[variableName] = __assign(__assign({}, shades[variableName]), { adjustmentInput: event.target.value, adjustment: Number.isNaN(newValue)
                                ? adjustment
                                : newValue / 100.0 }), _a)));
                    }}/>)}
                    </td>
                  </tr>);
        })}
          </tbody>
        </table>
      </div>
      <p>
        Replace the variables in <code>src/css/custom.css</code> with these new
        variables.
      </p>
      <CodeBlock_1["default"] className="css">
        {adjustedColors
            .sort(function (a, b) { return a.codeOrder - b.codeOrder; })
            .map(function (value) { return "".concat(value.variableName, ": ").concat(value.hex.toLowerCase(), ";"); })
            .join('\n')}
      </CodeBlock_1["default"]>
    </div>);
}
exports["default"] = ColorGenerator;
