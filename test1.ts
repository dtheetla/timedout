import { TimedoutService } from ".";

const logout = () => {console.log("TIMEDOUT ...")}

const t= new TimedoutService();
t.start(logout, 2000);