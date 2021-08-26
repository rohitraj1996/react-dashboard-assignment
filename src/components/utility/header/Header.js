import "./header.css";

const Header = (props) => {
  return (
    <header className={"ps-3 py-1 m-0 header"}>
      {props.headerLabel}
    </header>
  )
}

export default Header;
