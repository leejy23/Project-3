import { useState, useEffect } from 'react'
import { config } from '../data/contant'
import { useParams } from 'react-router-dom'
import SearBox from '../components/SearchBox.jsx'
import Card from '../components/Card.jsx'

function MovieList() {
    const param = useParams()
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(true)
    const [keyword, setKeyword] = useState('')
    const onChangeKeyword = (e) => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${param.type}?language=ko-KR&api_key=${config.API_KEY}`)
            .then((res) => res.json())
            .then((res) => {
                setMovieList(res.results)
                setLoading(false)
            })
    }, [param.type])

    return (
        <div className="p-12 text-white">
            <SearBox keyword={keyword} onChangeKeyword={onChangeKeyword} />
            <h2 className="text-xl my-10">영화목록</h2>
            <div className="flex flex-wrap justify-center">
                {movieList
                    .filter((movie) => movie.original_title.toLowerCase().includes(keyword.toLowerCase()))
                    .map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    )
}

export default MovieList
