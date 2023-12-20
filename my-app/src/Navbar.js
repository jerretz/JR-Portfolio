const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Jeremy Retzler - Portfolio</h1>
            <div>
                <a href="https://jeyretz.zytic.net">Home</a>
                
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1256d",
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;