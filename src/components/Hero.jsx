import Navbar from "./Navbar"

const Hero = () => {
    return (
        <section className="min-w-screen">
            <Navbar/>
            {/* About Section*/}
            <div className="flex justify-center items-center flex-col">
                <h1 className="head_text transition-all max-md:text-3xl ">
                    Resuma <br />artigos com 
                </h1>
                <span className="orange_gradient text-6xl transition-all max-md:text-3xl">
                    OpenAI GPT-4
                </span>
                <p className="desc">
                    Resuma centenas de palavras com um só clique
                </p>
            </div>

        </section>
    )
}

export default Hero