import { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

function Card({ movie }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className="relative inline-block rounded-lg overflow-hidden m-1 cursor-pointer min-w-[200px] h-[300px] z-0 transition-transform duration-200 border border-gray-600 hover:scale-125 hover:z-[1000] hover:shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)] hover:backdrop-blur-sm">
            {loading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            ) : (
                <Link to={`/movie/${movie.id}`}>
                    <div className="relative h-full w-full">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            className="h-full w-full object-cover transition duration-300"
                            alt="Movie Poster"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300" />
                        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity duration-200 text-white">
                            <h4 className="font-extrabold text-lg mb-1">{movie.original_title}</h4>
                            <h5 className="flex items-center gap-1 text-sm mb-1">
                                {movie.release_date} / ⭐ {movie.vote_average} / 5기 이재영
                            </h5>
                            <p className="italic text-sm mb-1 w-[85%]">{movie.overview.slice(0, 50) + '...'}</p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default Card
