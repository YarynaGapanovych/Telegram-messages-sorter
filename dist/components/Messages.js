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
const db_json_1 = __importDefault(require("../db.json"));
function Messages({ date }) {
    const [desiredDate, setDesiredDate] = (0, react_1.useState)(date); // Date to filter messages
    (0, react_1.useEffect)(() => {
        setDesiredDate(date || Date.now().toLocaleString());
    }, [date]);
    const filteredMessages = db_json_1.default.chats.list.flatMap((person) => {
        const messagesOnDesiredDate = person.messages.filter((message) => message.date.startsWith(desiredDate));
        return messagesOnDesiredDate.map((message, index) => (react_1.default.createElement("li", { className: "border-solid border-2 border-sky-500 rounded w-fit m-5 p-2", key: message.id }, Array.isArray(message.text)
            ? message.text.map((item) => item.text)
            : message.text)));
    });
    return react_1.default.createElement("ul", null, filteredMessages);
}
exports.default = Messages;
