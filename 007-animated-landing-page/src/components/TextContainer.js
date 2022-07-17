const TextContainer = () => {
    return(
        // top
        <div className="textContainer">
           <div className="textContainer-top">
           <span className="text-green-600"> Live the dream..</span>
           <span className="first-letter:text-5xl">0.o</span>
           </div>

        {/*middle*/}
           <div className="textContainer-middle">
              <span>GAME</span>
           </div>

        {/*bottom*/}
           <div className="textContainer-bottom">
              <button>jump in</button>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At maiores velit, a saepe voluptatem expedita eaque minus, harum dolores soluta odit quam enim magnam aperiam impedit ducimus, similique in fugit.</p>
           </div>
        
        </div>
        );
}

export default TextContainer;