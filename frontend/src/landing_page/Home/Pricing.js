import React from 'react';

function Pricing() {
    return (
        <div class='container p-3'>
            <div class='row p-5'>
                <div class='col-6'>
                    <h2 style={{fontSize:"1.6rem", paddingBottom:"20px"}}>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" class="text-decoration-none">See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div class='col-2' style={{display:"flex"}}>
                    <img src='media/images/pricing0.svg' style={{width:"120px"}} alt='AwardImage'/>
                    <p class="fw-lighter" style={{fontsize:"10px"}}>Free account opening</p>
                </div>
                <div class='col-2'>
                    <img src='media/images/pricing0.svg' style={{width:"120px"}} alt='AwardImage'/>
                    <p class="fs-6 fw-lighter">Free equity delivery and direct mutual funds</p>
                </div>
                <div class='col-2'>
                    <img src='media/images/intradayTrades.svg' style={{width:"120px"}} alt='AwardImage'/>
                    <p class="fs-6 fw-lighter">Intraday and F&O</p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;