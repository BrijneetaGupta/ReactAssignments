import React, { useEffect, useState } from 'react';
import './Postview.css';
import axios from 'axios'
import logo from './images/site-logo.png'
import capture from './images/camera-icon.png'
import ellipses from './images/ellipses.png'
import share from './images/share-icon.png'
import like from './images/like-icon.png' 

const Postview=()=> {
  const data_url = 'http://localhost:3004/user'
  const [Data,setProduct] = useState()

  useEffect(() => {
    axios.get(data_url)
    .then(response => {
      setProduct(response.data)
    })
  },{data_url})

  if(Data){
    return (
      <div className="site-container">
        <header id="site-header">
              <img className='site-logo' src={logo} alt='site-logo'></img>
              <h1>Instaclone</h1>
              <img className='capture' src={capture} alt='capture'></img>
          </header>
              {
                  Data.map(post =>{
                      return(
                          <section id='container'>
                              <div className='card'>
                                  <div className='post-header'>
                                      <div className='user-detail'>
                                          <h4>{post.name}</h4>
                                          <span>{post.location}</span>
                                      </div>
                                      <div className="menu-ellipse">
                                          <img src={ellipses} alt='menu' />
                                      </div>
                                  </div>
                                  <div className='post-image'>
                                      <img src={post.postImage} alt='profile'></img>
                                  </div>
                                  <div className='post_description'>
                                      <img className='like' src={like} alt='like' />
                                      <img className='share' src={share} alt='share'/>
                                      <span>{post.date}</span>
                                      <p className='like_count'>{post.likes} likes</p>
                                      <p className='description'>{post.description}</p>
                                  </div>
                              </div>
                          </section>
                      )
                  })
              }
      </div>
    );
  }
  return(
    <div>
    </div>
  )
}

export default Postview;