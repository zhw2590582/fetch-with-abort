# fetch-with-abort
> Make fetch support abort

## Install

Install with `npm`

```
$ npm install fetch-with-abort
```

Or install with `yarn`

```
$ yarn add fetch-with-abort
```

```js
import fetchWithAbort from "fetch-with-abort";
```

Or umd builds are also available

```html
<script src="path/to/fetch-with-abort.js"></script>
```

Will expose the global variable to `window.fetchWithAbort`.

## Usage

```js
// Start like fetch api
var result = fetchWithAbort("https://httpbin.org/delay/3");
result
  .then(function(response) {
    console.log(`Fetch complete. (Not aborted)`);
  })
  .catch(function(err) {
    console.error(`Err: ${err}`);
  });

// Then abort the fetch
// console.log(result.controller);
result.controller.abort();
```

## License

MIT © [Harvey Zack](https://sleepy.im/)
