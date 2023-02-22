"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deviceType_1 = require("../../modules/deviceType");
const path_1 = require("../../modules/path");
const gallery = express_1.default.Router();
gallery.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dtype = yield deviceType_1.getDeviceType(req);
    if (dtype == "mobile") {
        console.log(dtype);
        return res.status(301).redirect("/gallery/mobile");
    }
    if (dtype == "tablet") {
        console.log(dtype);
        return res.status(301).redirect("/gallery/tablet");
    }
    if (dtype == "desktop") {
        console.log(dtype);
        return res.status(301).redirect("/gallery/desktop");
    }
    res.send('unknowen device');
}));
gallery.get('/mobile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendFile(path_1.pagePath + "/mobile/gallery.html");
}));
gallery.get('/tablet', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendFile(path_1.pagePath + "/desktop/gallery.html");
}));
gallery.get('/desktop', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendFile(path_1.pagePath + "/desktop/gallery.html");
}));
exports.default = gallery;
//# sourceMappingURL=gallery.js.map