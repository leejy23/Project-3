import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { config } from '../data/contant'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function MainPage() {
    const [movieList, setMoiveList] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=${config.API_KEY}`)
            .then((res) => res.json())
            .then((res) => {
                setMoiveList(res.results)
            })
    }, [])
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex items-center">
                    <Carousel showThumbs autoPlay infiniteLoop showStatus={false} transitionTime={5}>
                        {movieList.map((movie) => (
                            <Link to={`/detail/${movie.id}`} className="relative">
                                <div className="h-[900px]">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                        alt="썸네일"
                                        className="block"
                                    />
                                </div>
                                <div className="absolute bottom-0 w-full text-left p-20 bg-gradient-to-t from-black to-transparent text-white">
                                    <h5 className="text-4xl">{movie.original_title}</h5>
                                    <p className="text-base felx items-center gap-3 my-5">
                                        {movie.release_date} / 🌟 {movie.vote_average}
                                    </p>
                                    <p className="italic w-4/6">{movie.orverview}</p>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default MainPage
