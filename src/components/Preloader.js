import React from 'react';
import PreloaderImg from '../assets/preloading.png';

const Preloader = () => (
    <div className='App container'>
        <h1>The average H1B in tech pays $86,164/year</h1>
        <p className='lead'>
            Since 2012 the US tech industry has sponsored 176,075 H1B work visas.
            <span>
                The best city for H1B is <b>Kirkland, WA</b> with an average individual salary <b>$39,465 above local household median</b>.
            </span>
        </p>
        <img src={PreloaderImg} style={{width: '100%'}} role='presentation' alt="preloader"/>
        <h2 className='text-center'>Loading data</h2>
    </div>
)

export default Preloader;