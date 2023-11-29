"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
function DatePick({ onChange }) {
    return (react_1.default.createElement(antd_1.DatePicker, { onChange: onChange }));
}
exports.default = DatePick;
