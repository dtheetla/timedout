# timedout
    Executes a function after idle timeout.

## installation
npm install timedout

## Usage
Import in your application
```
// @ts-ignore
import {TimedoutService} from 'timedout';
```
then 
```
    const t = new TimedoutService();
    t.start(logout, 180000 )
```
here logout is some function you may want to execute after timeout