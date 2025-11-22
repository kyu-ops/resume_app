import {linkIcon, copy, loader, tick } from "../assets"
import { useEffect, useState  } from "react"
import { useLazyGetSummaryQuery } from "../services/article"
const Demo = () => {

    const [article, setArticle ] = useState({
        url: "",
        summary:" "
    })
    const [allArticles, setAllArticles] = useState([]);

    const [getSummary, { error, isFetching}] = useLazyGetSummaryQuery()

    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem('articles')
        )

        if (articlesFromLocalStorage){
            setAllArticles(articlesFromLocalStorage)
        }
    }, []) 

    async function handleSubmit(e){
        e.preventDefault()
        
        const { data } = await getSummary({ articleUrl: article.url})
        
        if(data?.summary){
            const newArticle = {
                ...article, summary: data.summary
            }
            const updatedAllArticles = [newArticle, ...allArticles]

            setArticle(newArticle);
            setAllArticles(updatedAllArticles);

            localStorage.setItem('articles', JSON.stringify(updatedAllArticles))
        }
       
    }

    return (
        <section className="mt-20 flex justify-center flex-col items-center w-full">
            <div  className="flex flex-col justify-center items-center w-full">
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
                <div className="flex flex-col gap-1 mt-10 w-[60%] max-h-60 overflow-y-auto">
                    {allArticles.map((item, index) => (
                        <div key={`link-${index}`}
                        onClick={() => setArticle(item)}
                        className="link_card">
                            <div className="copy_btn">
                                <img src={copy} alt="copy_icon" className="w-[40%] h-[40%] object-contain"/>
                            </div>
                            <p className="flex-1 text-blue-600 font-medium text-sm truncate">{item.url}</p>
                        </div>
                    ))}
                </div>
            </div>

          {/* Resultados */}
          <div className="my-10 max-w-full flex flex-col g justify-center items-center">
                {isFetching ? (
                    <img src = {loader} alt="loader" className="w-20 h-20"/>
                ) : error ? (
                    <p className="text-red-500 text-center">
                        Bom, isso não era espeado
                        <br />
                        <span>
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className="flex flex-col gap-3">
                            <h2 className="blue_gradient">
                                Article
                            </h2>
                            <div className="summary_box">
                                <p>{article.summary}</p>
                            </div>
                        </div>
                    )
                )}
          </div>
        </section>
    )
}

export default Demo
