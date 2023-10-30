import './Showcase.scss';
import img1 from "../assets/img/Frame (35).png";
import img2 from "../assets/img/Frame (36).png";
import img3 from "../assets/img/Frame (37).png";
import img4 from "../assets/img/Frame (38).png";
function Partners() {
    const images = [img1, img2, img3, img4];
    return(
        <>
        <section>
        <div className="partners">
                    {images.map((item, i) =>(
                        <img src={item} alt="" key={i} />
                    ))}
                </div>
        </section>
        </>
    )
    
}
export default Partners;