"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimedoutService = void 0;
class TimedoutService {
    constructor() { }
    start(logout, idle_time = 1800000) {
        let si = 0; //(typeof setInterval) //undefined;
        // let idle_time = 10000 //1800000
        let start_time = new Date().getTime();
        const clickHandler = function () {
            start_time = new Date().getTime();
            console.log('setting new time ...' + start_time);
        };
        const checkhandler = function () {
            const now = new Date().getTime();
            if (now - start_time > idle_time) {
                console.log('idle time...up');
                document.removeEventListener('click', clickHandler);
                clearInterval(si);
                logout();
            }
        };
        document.addEventListener('click', clickHandler);
        si = setInterval(checkhandler, 3000);
    }
}
exports.TimedoutService = TimedoutService;
