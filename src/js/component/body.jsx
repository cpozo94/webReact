import React from "react";
import myImg from "../../img/react.jpg";

//

const Body = () => {
    return (
<div class="container ">
      
        <div className="card">
          <div className="card-body text-start" id="bodyTop">
            <h1 className="card-title">A warm welcome!</h1>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elementum felis, eget pretium sapien. Phasellus sit amet ligula tempor, viverra sapien ac, convallis lectus. Phasellus vitae metus odio. Mauris.</p>
            <a href="#" className="btn btn-primary">Call to action!</a>
           </div>
        </div>
<div class="row mt-3">
  <div class="col-sm-3 mb-3 mb-sm-0">
    <div class="card">
    <img src={myImg} className="card-img-top" alt="prueba"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
    <img src={myImg} className="card-img-top" alt="prueba"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
    <img src={myImg} className="card-img-top" alt="prueba"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
    <img src={myImg} className="card-img-top" alt="prueba"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  </div>
</div>
      
    </div>
    
    
    )
}

export default Body;

//import rigoImage from "../../img-react/react.jpg";

