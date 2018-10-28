# requestIdleCallback polyfill

Simple polyfill and d.ts for
[requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback).

From [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback):

> The `window.requestIdleCallback()` method queues a function to be called during a browser's idle periods.
> This enables developers to perform background and low priority work on the main event loop, without
> impacting latency-critical events such as animation and input response. Functions are generally called in
> first-in-first-out order; however, callbacks which have a timeout specified may be called out-of-order if
> necessary in order to run them before the timeout elapses.

> You can call `requestIdleCallback()` within an idle callback function to schedule another callback to take
> place no sooner than the next pass through the event loop.

## Install

`npm i requestidlecallback-polyfill`

or

`yarn add requestidlecallback-polyfill`

## Usage

```js
import 'requestidlecallback-polyfill`;

// ...

window.requestIdleCallback(doSomething, { timeout: 2000 });
```

## Credits

-   Code from
    [developers.google.com](https://developers.google.com/web/updates/2015/08/using-requestidlecallback)
-   Type definitions from
    [rhysd/Mstdn](https://github.com/rhysd/Mstdn/blob/master/typings/request-idle-callback.d.ts)

## License

-   Code: [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
-   Type definitions: [MIT](https://opensource.org/licenses/MIT)
