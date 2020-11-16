# `css` declarations must come after `styled` declarations (define-css-after-styled)

Please describe the origin of the rule here.

## Rule Details

This rule aims to prevent incorrect declarations of linaria styling.

Examples of **incorrect** code for this rule:

```js

const styles = css`
  color: black;
`

const StyledComponent = styled.div`
  color: white;
`

<StyledComponent className={styles} />

```

Examples of **correct** code for this rule:

```js

const StyledComponent = styled.div`
  color: white;
`

const styles = css`
  color: black;
`

<StyledComponent className={styles} />
```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
