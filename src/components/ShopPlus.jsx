import img from "../assets/img/Rectangle (48).png";
import img1 from "../assets/img/Rectangle (49).png";
import img2 from "../assets/img/Rectangle (50).png";
import './ShopPlus.scss';

export default function ShopPlus() {
    const cards = [
        {
            img: img,
            heading:'Shop Boosted Stealth',
            text: 'In Stock' 
        },
        {
            img: img1,
            heading:'Shop Boosted Plus',
            text: 'In Stock' 
        },
        {
            img: img2,
            heading:'Shop Boosted Mini',
            text: 'In Stock' 
        },
    ]
    return(
        <>
        <section>
        <div className="container">
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