function App() {
  return (
    <>
      <input type="text" name="fname" onChange={(event) => console.log(event.target.value)} />
    </> 
  )
}

export default App