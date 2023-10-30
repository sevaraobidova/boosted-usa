import img from "../assets/img/Rectangle (43).png";
import img1 from "../assets/img/Rectangle (44).png";
import './Shop.scss';
export default function Shop() {
    const cards = [
        {
            img: img,
            heading:'Shop Boosted Boards',
            text: 'In Stock' 
        },
        {
            img: img1,
            heading:'Shop Boosted Revs',
            text: 'In Stock' 
        },
    ]
    return(
        <>
        <section>
            <div className="container-small padding-section">
                <div className="shop--text">
                    <h1 className="shop--heading simple-heading">Looking for Boosted Boards, or Boosted Revs?</h1>
                    <p className="shop--desc simple-text">Boosted USA acquired all of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  Get your hands on these highly sought after products while supplies last.</p>
                    <div className="line"></div>
                </div>
                <div className="shop--img">
                    {cards.map((item, i) => (
                        <div className="card" key={i}>
                            <img src={item.img} />
                        <div className="card-text">
                        <h2>{item.heading}</h2>
                        <p>{item.text}</p>
                        </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
        </>
    )
}
