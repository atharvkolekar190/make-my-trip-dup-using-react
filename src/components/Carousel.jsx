import React from 'react'

export default function () {
    return (
        <>
            <div class="container" style={{marginTop:"130px",marginBottom:"30px"}}>
        <div class="carousel slide" data-bs-ride="carousel" id="mainparent">
            <div class="carousel-indicators">
                <button type="button" class="active" data-bs-slide-to="0" data-bs-target="#mainparent"></button>
                <button type="button" data-bs-slide-to="1" data-bs-target="#mainparent"></button>
                <button type="button" data-bs-slide-to="2" data-bs-target="#mainparent"></button>
                <button type="button" data-bs-slide-to="3" data-bs-target="#mainparent"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require ('../assets/images/b2.jpg')} class="w-100" alt=""/>
                </div>
                <div class="carousel-item">
                    <img src={require ('../assets/images/b3.jpg')} class="w-100" alt=""/>
                </div>
                <div class="carousel-item ">
                    <img src={require ('../assets/images/b4.jpg')} class="w-100" alt=""/>
                </div>
                <div class="carousel-item">
                    <img src={require ('../assets/images/b5.jpg')} class="w-100" alt=""/>
                </div>

            </div>
            <button type="button" class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#mainparent">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button type="button" class="carousel-control-next" data-bs-slide="next" data-bs-target="#mainparent">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>

        </>
    )
}
