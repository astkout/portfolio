import PLogo from '../../assets/images/PLogo.png';
import { Link } from 'react-router-dom'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const hiArray = [' ','H','i',',']
    const firstNArray = ['I','','a','m','','A','s','t','e','r','i','o','s',' ']
    const nameArray =['o', 'u', 't', 'o', 'u', 'l', 'i', 'd', 'i', 's']
    const jobArray = ['a',' ','w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect (() => {
            setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass}
                    strArray={hiArray}
                    idx={8}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                    strArray={firstNArray}
                    idx={11}
                />
                <img src={PLogo} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={27}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={32}
                />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman"/>
        </>
    );
}

export default Home


