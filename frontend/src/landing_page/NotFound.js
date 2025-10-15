import React from 'react';

function NotFound() {
    return (
        <div class="container p-5 mb-5">
            <div class="row text-center p-2">
                <h1 style={{fontSize:"1.8rem"}} class='mb-3'>Error 404</h1>
                <p style={{fontSize:"1.35rem"}} class='mb-5 text-muted'>The page you want to access does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;