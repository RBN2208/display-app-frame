import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
  margin: 0 auto;
}
input,
button,textarea {
  font-size: inherit;
  padding: 5px;
  outline: none;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--color-midgrey);
}

`
