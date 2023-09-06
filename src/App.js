import { useEffect, useState } from 'react';
import './App.css';
import SocialLinks from './assets/common/components/SocialLinks';

const HSL_MODIFIER = 3.6;
const FONT_WEIGHTS = {
    min: 100,
    max: 800,
    modifier: 8,
};

const getWindowWidth = () => {
    const { innerWidth } = window;

    return innerWidth;
};

function App() {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
    const [mouseX, setMouseX] = useState(50);
    const decimalMouseX = mouseX / 100;
    const fontWeight = decimalMouseX
        * ((FONT_WEIGHTS.min - FONT_WEIGHTS.max) + FONT_WEIGHTS.max)
        * FONT_WEIGHTS.modifier;

    const appStyle = {
        backgroundColor: `hsl(${(mouseX * HSL_MODIFIER) / 2} 100% 80%)`,
    };

    useEffect(() => {
        setWindowWidth(getWindowWidth());

        const handleResize = () => {
            setWindowWidth(getWindowWidth());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const mouseMoveHandler = (event) => {
            const { clientX } = event;
            const x = Math.round((clientX / windowWidth) * 100);

            setMouseX(x);
        };

        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, [windowWidth]);

    return (
        <div className="App" style={appStyle}>
            <header className="App__header">
                <h1 className="App__header__title">
                    <small className="App__header__title__prefix">
                        Hi, I&apos;m
                    </small>
                    <span
                        style={{
                            fontVariationSettings: `"wght" ${fontWeight}`,
                        }}
                    >
                        Kevin
                    </span>
                    <small>
                        Front-end developer | UX/UI Designer
                    </small>
                </h1>
            </header>
            <SocialLinks />
        </div>
    );
}

export default App;
