# assign-deep.js

merging nested objects

## Usage:

```html
<script src="assign-deep.min.js"></script>
<script>
	var target = {
		a: 1,
		b: 2,
		c: {
			a: 1,
			b: 2
		}
	};

	var result = assignDeep( target, {
		a: 3,
		c: {
			a: 4
		}
	});

	/* result = {
	 *     a: 3,
	 *     b: 2,
	 *     c: {
	 *         a: 4,
	 *         b: 2
	 *     }
	 * }
	 * */
</script>
```

```js
var assignDeep = require( "./assign-deep.js" );

assignDeep( target, source1, source2, ... );
```
