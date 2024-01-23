import ThemeButton from "./components/ThemeButton"
import ThemeProvider from "./components/ThemeProvider"

function App() {

  return (
    <>
      <ThemeProvider>
        <div>
          <h1>Theme Context</h1>
        </div>
        <ThemeButton />
      </ThemeProvider>
    </>
  )
}

export default App