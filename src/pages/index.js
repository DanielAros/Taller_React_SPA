import { NavLink, Outlet } from "react-router-dom";

const Base = () => {
    return(
      <>
        <header>
          {/* <h1><a href="/">POKEDEX</a></h1> */}
          <NavLink to="/" 
            style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bolder'
          }}>
            POKEDEX
          </NavLink>
          <h5><a href="/crear" style={{color:'white', textDecoration: 'none'}}>Crear</a></h5>
        </header>
        <Outlet/>
      </>
    );
}

export default Base;