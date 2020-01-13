import { displayLog } from './utils';
import { of, interval, zip, Observable } from 'rxjs';

export default () => {
    /** start coding */

    /*     const src1 = interval(300);
        const src2 = "Hello World!";
        zip(src1, src2).subscribe(x => displayLog(x[1])); */

    const hello = Observable.create(function(observer) {
        observer.next("Hello");
        setTimeout(() => {
            observer.next("world");
            observer.complete();
        }, 2000);
    });

    const observer = {
        next: evt => displayLog(evt),
        error: err => console.err("[ERR - ", err),
        complete: () => displayLog("[DONE]")
    }

    const subscribe = hello.subscribe(observer);
    const subscribe2 = hello.subscribe(observer);
    subscribe.unsubscribe();

    /** end coding */
}