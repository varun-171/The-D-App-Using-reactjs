import React,{useEffect,useState} from 'react'
import "./Rowposter.css";
import axios from 'axios';
import Row from '../Rposter/Row'
import Carouseldata from '../Carousel/Carouseldata';
import BackButton from '../BackButton';
import { useNavigate } from 'react-router-dom';


function Rowposter(props) {
    const searchedData=props.value;
    console.log(searchedData)
    if(searchedData)
    {
       
        var search=searchedData.toLowerCase()
    }
    // const Genmovie=[];
    const [movies, setMovies] = useState([]); 
    const [genre, setGenre] = useState([]);
    const navigate=useNavigate();

    const Detailpage =(e)=>{
        const x=e.target.id;
        // setDetail(x)
        // console.log(x)
        navigate("/detail",{state:x})
      }
    useEffect(() => {
        axios.get('https://test.create.diagnal.com/data/db.json').then((res)=>{
            console.log(res.data);            
            setMovies(res.data["movies"]);
            // console.log(movies);
            const store=JSON.stringify(res.data['movies'])
            localStorage.setItem('id',store)
            setGenre(res.data["genres"]);
        })
        },[]);
        if(searchedData)
        {
                var newfilter=movies.filter((obj2)=>{
                const store=obj2['title'].toLowerCase()
                 return store.includes(search)}
                )
                console.log(newfilter)
        
        }
        if(newfilter==0){
            return <h1>oops no movie</h1>
        }
if(searchedData && newfilter!=0 ){
    return(
        <div className='search-data-'>
        <div className='heading'>
        <h4>Movies & TV</h4>
        </div>
        <div className='list-movies'>
           { newfilter.map((values)=>
            <div className='new-rail' >
            <img src={values['posterUrl']} id={values['title']} className='new-card' onError={(e)=>{e.target.src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}} onClick={Detailpage}/>
            <h6>{values['title']}</h6>
            </div>
            
           )
           }
        </div>
        </div>
    )
}
else{
    return(
    <div>
    <Carouseldata />
    <div className='row'>
    <div className='posters'>   
    {   
        genre.map((obj)=>
            <div className='rail'>
            <h4><b>{obj}</b></h4>
            <div>
            <Row category={obj} movie={movies} />
            </div>
            </div>
        )
       
    }
    </div>
    </div>
    </div>
    )
}
}

export default Rowposter
