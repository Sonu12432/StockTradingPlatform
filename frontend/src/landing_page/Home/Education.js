import React from 'react';

function Education() {
    return (
        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-6">
                    <img src="media\images\education.svg" style={{width:"70%"}} alt="versityImage"/>
                </div>
                <div class="col-6">
                    <h5 class="mb-5 fs-2">Free and open market education</h5>
                    <p className="text-muted lh-base">
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" class="text-decoration-none">
                        Varsity<i class="fa fa-arrow-right p-1" aria-hidden="true"></i>
                    </a>
                    <p className="text-muted lh-base mt-5">
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href="#" class="text-decoration-none">
                        TradingQ&A<i class="fa fa-arrow-right p-1" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;