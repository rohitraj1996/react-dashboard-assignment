import "./home.css"
import Header from "../utility/header/Header";

const Home = () => {
  return (
    <div>
      <Header headerLabel={"Welcome"}/>
      <div className={"pt-2 home-content"}>
        Developed by: <br/>
        @Rohit Raj
      </div>
    </div>
  )
}

export default Home;
