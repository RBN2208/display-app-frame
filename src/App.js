import styled from 'styled-components'
import ApplayoutOne from './components/ApplayoutOne'

function App() {
  return (
    <Body>
      <ApplayoutOne />
    </Body>
  )
}

const Body = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  position: relative;
  background-color: darkslategray;
`
export default App
