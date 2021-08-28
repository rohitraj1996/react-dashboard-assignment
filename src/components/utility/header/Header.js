import "./header.css";

const Header = (props) => {
  return (
    <header className={"px-3 py-1 m-0 header " + props.className}>
      {props.headerLabel || props.children}
    </header>
  )
}

export default Header;
