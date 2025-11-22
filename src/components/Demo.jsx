import {linkIcon, copy, loader, tick } from "../assets"
import { useState  } from "react"
const Demo = () => {

    const [article, setArticle ] = useState({
        url: "",
        article:" "
    })

    async function handleSubmit(e){
        e.preventDefault()
        
        console.log(e)
    }

    return (
        <section className="mt-20 flex justify-center items-center w-full">
            <div  className="flex justify-center items-center w-full">
                <form 
                onSubmit={handleSubmit}
                className="flex  items-center flex-row w-[70%]"> 

                    <img src={linkIcon} alt="link_icon" className="absolute w-5 ml-2"/>
                    <input 
                    type="url" 
                    placeholder="Insirá uma URL"
                    value={article.url}
                    onChange={(e) => setArticle({...article, url: e.target.value})}
                    required
                    className="url_input w-[80%] peer"
                    />
                    <button
                    type="submit"
                    className="submit-btn ml-2 border border-gray-500 text-gray-600 px-2 h-9 w-9  rounded-md transition-all hover:bg-black/80 hover:border-white hover:text-white"
                    >
                        ↵
                    </button>
                </form>

                {/* Historico do navegador */}
            </div>

          {/* Resultados */}
        </section>
    )
}

export default Demo
