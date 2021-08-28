import "./main.css"

const Main = (props) => {
  return (
    <main className={"main main-custom mb-4"}>
      {props.children}
    </main>
  )
}

export default Main;
