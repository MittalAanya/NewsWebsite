import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'
function News(props) {
    let[newsdata,setnewsdata]=useState()
    useEffect(()=>{
        let result=axios.get(`https://newsapi.org/v2/everything?q=${props.category}&language=en&apiKey=a72a71d702ef459890ed88d94c1610a8`)
        //console.log(result);
        result.then((item)=>{
            //console.log(item.data.articles);
            setnewsdata(item.data.articles)
        })
    },[props.category])
    //console.log(newsdata);
  return (
    <>
    {newsdata?<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
        {newsdata.map((pro)=>{
            return(
                <NewsItem
                title={pro.title}
                dec={pro.description}
                url={pro.url}
                idata={pro.urlToImage}
                />
            )
        })}
    </div>:<p>No Data</p>}
    </>
  )
}

export default News