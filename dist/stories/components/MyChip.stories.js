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
exports.Outlined = exports.Large = exports.Medium = exports.Small = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var components_1 = require("../../components");
exports.default = {
    title: 'UI/MyChip',
    component: components_1.MyChip
};
var Template = function (args) {
    return (0, jsx_runtime_1.jsx)(components_1.MyChip, __assign({}, args));
};
exports.Small = Template.bind({});
exports.Small.args = { label: 'Chip!', size: 'sm' };
exports.Medium = Template.bind({});
exports.Medium.args = { label: 'Chip!', size: 'md' };
exports.Large = Template.bind({});
exports.Large.args = { label: 'Chip!', size: 'lg' };
exports.Outlined = Template.bind({});
exports.Outlined.args = { label: 'Chip!', variant: 'outlined' };
