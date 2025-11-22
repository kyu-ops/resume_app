
const Navbar = () => {
    return(
        <header className="bg-blue-100 min-w-screen flex justify-center items-center py-4 flex-col mb-10">
            <nav className="flex justify-evenly items-center w-full">
                <img src="/src/assets/logo.svg" alt="logo" width={100}/>
                <button className="black_btn"
                onClick={() => window.open("https://github.com/kyu-ops/resume_app")}>
                    GitHub
                </button>
            </nav>
        </header>
    )
}

export default Navbar