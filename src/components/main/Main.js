import "./main.css"

const Main = (props) => {
  return (
    <main className={"main main-custom"}>
      {props.children}
    </main>
  )
}

export default Main;
