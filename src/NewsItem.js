import React from 'react'

function NewsItem(props) {
  return (
    <>
    <div className='col'>
        <div className='card'>
            <img src={props.idata} className='card-img-top' alt="..."/>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.dec}</p>
                <button className='btn btn-danger'>More News</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewsItem