import { Carousel } from 'antd'
import React from 'react'

function Training() {
  return (
   <>
<div id="Training" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/330px-Ludovic_and_Lauren_%288425515069%29.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

   </>
  )
}

export default Training
