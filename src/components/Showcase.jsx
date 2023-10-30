import Button from "./Button";
import './Showcase.scss';


function Showcase() {
    return(
        <>
        <section className="showcase">
                <div className="show-text">
                    <h1>Welcome to Boosted USA</h1>
                    <p>Boosted USA acquired all of the remaining inventory directly from Boosted.</p>
                    <div className="buttons">
                    <Button>BOOSTED REVS</Button>
                    <Button>BOOSTED BOARDS</Button>
                    </div>
                </div>
                
        </section>
        </>
    )
}

export default Showcase;