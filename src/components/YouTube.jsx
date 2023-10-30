import React from 'react'
import './YouTube.scss';

const YouTube = () => {
  return (
    <div>
      <section>
        <div className="container-small">
            <div className="videos">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/78bXV1ZqQWI?si=ENWcGZrKk23od1v5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/oAQxk9dOJ8k?si=aWqa8XAx6xLpFG-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
      </section>
    </div>
  )
}

export default YouTube
