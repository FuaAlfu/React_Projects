export default function Calculator(){
    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++){
            digits.push(
                <button key={i}>{i}</button>
            )
        }
        return digits;
    }
 
    return(
        <div className="calc">
           <div className="display">
              <span>(0)</span> 0
           </div>
           {/*END OF*/}
           <div className="operators">
              <button>/</button>
              <button>-</button>
              <button>*</button>
              <button>+</button>

              <button><strong>DEL</strong></button>
           </div>
           {/*END OF*/}
           <div className="digits">
              {createDigits()}
              <button>0</button>
              <button>.</button>
              <button>=</button>
           </div>
        </div>
        )
}