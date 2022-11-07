"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyChip = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./MyChip.styles.css");
var MyChip = function (_a) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.variant, variant = _c === void 0 ? 'filled' : _c;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "".concat([
            'storybook-mychip',
            "storybook-mychip--".concat(size),
            "storybook-mychip--".concat(variant)
        ].join(' ')) }, { children: label })));
};
exports.MyChip = MyChip;
