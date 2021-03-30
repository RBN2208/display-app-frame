import styled from 'styled-components'

export default function Dummy() {
  return (
    <Box>
      <DummyFrame src="https://capstone-project-zeta.vercel.app/"></DummyFrame>
      <Circle></Circle>
    </Box>
  )
}

const Box = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 700px;
`

const DummyFrame = styled.iframe`
  position: relative;
  height: 667px;
  width: 375px;
  border-left: 15px solid black;
  border-right: 15px solid black;
  border-top: 60px solid black;
  border-bottom: 60px solid black;
  border-radius: 40px;
  background-color: white;
`

const Circle = styled.div`
  position: absolute;
  bottom: 26px;
  right: 180px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid grey;
`
