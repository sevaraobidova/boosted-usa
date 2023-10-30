import Button from "./Button";
import './Showcase.scss';


function Showcases() {
    return(
        <>
        <section id="showcases" className="showcase">
                <div className="show-text" >
                    <p>High-performance</p>
                    <h1>Electric Skateboards</h1>
                    <p>Cruising campus, going to work or getting through that long list of errands has never been easier or more fun.</p>
                    <div className="buttons">
                    <Button>Shop Now</Button>
                    </div>
                </div>
                
        </section>
        </>
    )
}

export default Showcases;