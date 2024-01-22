import LikeComponent from "./components/LikeComponent"

function App() {

  return (
    <>
      <LikeComponent onClick={() => console.log("Clicked")}/>
    </>
  )
}

export default App