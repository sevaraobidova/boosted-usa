import React from 'react';
import './BeforeFooter.scss';


const BeforeFooter = () => {

    const items = [
        {
            icon: <i className="fa-solid fa-gauge-high"></i>,
            heading: 'Go Fast',
            text: 'Boosted is known for its premium performance boards offering a next-level experience.'
        },
        {
            icon: <i className ="fa-solid fa-road-barrier"></i>,
            heading: 'Go Far',
            text: 'With optional extended battery life, you can get wherever you need to go reliably.'
        },
        {
            icon: <i className ="fa-solid fa-lightbulb"></i>,
            heading: 'Go Safe',
            text: 'Safety is a #1 priority for Boosted, always wear a helmet when riding.'
        },
        {
            icon: <i className="fa-solid fa-clipboard-check"></i>,
            heading: 'Built to Last!',
            text: 'Boosted products are engineered to last for years and are extremely reliable.'
        },
    ]
  return (
    <div>
      <section>
        <div className="black-bg">
            <div className="container">
                <div className="cardss">
                    {items.map((item, i) => (
                        <div className="karta" key={i}>
                            <h1>{item.icon}</h1>
                            <h2>{item.heading}</h2>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default BeforeFooter
