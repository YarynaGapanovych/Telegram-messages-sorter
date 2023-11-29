"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const Messages_1 = __importDefault(require("./components/Messages"));
const DatePick_1 = __importDefault(require("./components/DatePick"));
function Layout() {
    const [date, setDate] = (0, react_1.useState)("2022-10-09");
    const onChange = (date, dateString) => {
        console.log(date, dateString);
        setDate(dateString);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "my-10 " },
            react_1.default.createElement(antd_1.Button, null, "Download file"),
            react_1.default.createElement(DatePick_1.default, { onChange: onChange })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(Messages_1.default, { date: date }))));
}
exports.default = Layout;
