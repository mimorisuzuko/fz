# fz

My fuzzy search.

## `fz(target: string, input: string, ignoreCase?: boolean): { matched: boolean, char: string }[]`

### Example

`fz('Github', 'Gh')`

```js
[
	{ matched: true, char: 'G' },
	{ matched: false, char: 'i' },
	{ matched: false, char: 't' },
	{ matched: false, char: 'H' },
	{ matched: false, char: 'u' },
	{ matched: false, char: 'b' }
]
```

`fz('Github', 'Gh', true)`

```js
[
	{ matched: true, char: 'G' },
	{ matched: false, char: 'i' },
	{ matched: false, char: 't' },
	{ matched: true, char: 'H' },
	{ matched: false, char: 'u' },
	{ matched: false, char: 'b' }
]
```