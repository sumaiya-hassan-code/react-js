
import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
        <h1 className={"bg-teal-400 text-white text-6xl"}>Hello</h1>
        <Button className={"bg-orange-400"} btnText={"submit"}/>
        <Button className={"bg-teal-400"} btnText={"Sign up"}/>
        <Button className={"bg-violet-400"} btnText={"Login"}/>
    </>
  )
}

export default App
