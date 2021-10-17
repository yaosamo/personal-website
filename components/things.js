import './style/things.css';

function Things() {
    return (
        <div className="things">
            <h2>Things I create</h2>
            <a href="/things/gameboy/" alt="Gameboy Screenshots"><Link href="/things/gameboy/">
            <div className="thing">
                <div className="__title">
                <h4>Gameboy games screenshots</h4>
                    <div className="arrow-shape">
                    <img src="../images/home/Arrow-right.svg" className="arrow"/>
                    </div>
                </div>
                <p>Over 1500 screenshots of official releases.</p>
            </div>
          </Link>
          </a>
        </div>  
    );
}

export default Things;