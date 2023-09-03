"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const logout = () => { console.log("TIMEDOUT ..."); };
const t = new _1.TimedoutService();
t.start(logout, 2000);
