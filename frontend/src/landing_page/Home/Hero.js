import React from 'react';

function Hero() {
    return (
        <div class="container p-5">
            <div class="row text-center p-2">
                <img src='media/images/homeHero.png' class="mb-5" style={{margin:"auto"}} alt='Hero'/>
                <h1 style={{fontSize:"1.8rem"}} class='mb-3'>Invest in everything</h1>
                <p style={{fontSize:"1.35rem"}} class='mb-5 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button type="button" class="btn btn-primary p-2 fs-5" style={{width:"17%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;