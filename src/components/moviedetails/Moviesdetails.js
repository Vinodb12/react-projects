import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { FetchshowsORmovie, getAllshowsandmovies } from '../../feature/movies/movieslice';

const Moviesdetails = () => {
    const data = useSelector(getAllshowsandmovies)
    console.log("data",data);
    const {imdbID} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(FetchshowsORmovie(imdbID));
    
      
    }, [dispatch,imdbID])
    
  return (
    <div>
        {Object.keys(data).length === 0 ? (
          <div>.... loading</div>
        ):(
          <div>
            <h1>
              {data.title}
            </h1>
          </div>
        )
      }
    </div>
  )
}

export default Moviesdetails