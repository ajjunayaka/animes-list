 import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


const Animeslist = ({animes}) => {
    const [wish, setwish] = useState([]);



    useEffect(()=>{
        if(localStorage.setItem("wish")==null)//if wish array is not present before
        {
        localStorage.setItem("wish", "[]")// then only you add wish array
        }
    },[])

    let handleWishList = (id)=>{
        let x = localStorage.getItem("wish");//js-->json useJSON.stringify and for json-->js use JSON.parse
        x=JSON.parse(x)
        if(!x.includes(id)) // if id is not present
        {
            alert("added")
            x.push(id);
            x.JSON.stringify(x)
             localStorage.setItem("wish", x)
             }else{
                alert("removed from wishlist")
                let i=x.indexOf(id);
                x.splice(i,1);
                x=JSON.stringify(x);
                localStorage.setItem("wish",x);
             }

    }

    return ( 
        <div>
            { 
        animes.map((anime)=>{
            return(
                    <div key={anime.mal_id} className = "anime" >
                        <h1><img src={anime.images.jpg.small_image_url} alt="poster not found" /></h1>
                        <h1>Name : {anime.title}</h1>
                        <h2>Year : {anime.aired.prop.from.year}</h2>
                        <h2>Ratings : {anime.score}</h2>
                        <button onClick={()=>{ handleWishList(anime.mal_id) }}>&#10084;</button>
                       
                    </div>
                
                
            )
        })
    }
        </div>
     );
}
export default Animeslist;
 
