# fz

My fuzzy search.

`fz(target: string, input: string, ignoreCase?: boolean): { matched: boolean, results: { matched: boolean , char: string }[] }`

## Example

`fz('GitHub', 'Gh')`

```js
{
	matched: true,
	results: [
		{ matched: true, char: 'G' },
		{ matched: false, char: 'i' },
		{ matched: false, char: 't' },
		{ matched: false, char: 'H' },
		{ matched: false, char: 'u' },
		{ matched: false, char: 'b' }
	]
}
```

`fz('GitHub', 'Gh', true)`

```js
{
	matched: true,
	results: [
		{ matched: true, char: 'G' },
		{ matched: false, char: 'i' },
		{ matched: false, char: 't' },
		{ matched: true, char: 'H' },
		{ matched: false, char: 'u' },
		{ matched: false, char: 'b' }
	]
}
```