import img from "../assets/img/Rectangle (46).png";
import img1 from "../assets/img/Rectangle (47).png";
import Button from "./Button";
import './Rev.scss';

export default function Rev() {
    return(
        <>
        <section>
            <div className="container-small">
                <div className="parts">
                    <img src={img} alt="" />
                    <img src={img1} alt="" />
                    <div className="parts--text">
                        <h1 className="simple-heading">Boosted Rev</h1>
                        <p className="simple-text">There's never been an electric scooter quite like this. Speed past traffic at 24 mph. Go up to 22 miles on a single charge. You'll get there in no time at all. Stop and go with the roll of your thumb. Its intuitive design means there’s almost no learning curve.</p>
                        <Button>Shop now</Button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}