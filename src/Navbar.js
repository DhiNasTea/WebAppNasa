const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Space Gallery</h1>
      <div className="links">
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }} onClick={refresh}>New Pictures</a>
      </div>
    </nav>
  );
}

function refresh() {}
 
export default Navbar;