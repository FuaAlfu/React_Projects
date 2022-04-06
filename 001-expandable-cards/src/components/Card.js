// import '../index.css';
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';

export default function Card(){
    const [isOpen,setIsOpen] = useState(false);
    return(
        <motion.div 
          transition={{layout:{duration:1,type:"spring"}}}
          layout
          onClick={() => setIsOpen(!isOpen)} 
          className="card"
          style={{borderRadius: "1rem", boxShadow:'px 10px 30px rgba(0,0,0,0.5)'}}
          >
             <motion.h2 layout="position">Framer Motion..</motion.h2>
             <AnimatePresence>
             {isOpen && (
             <motion.div 
             initial={{opacity:0}} 
             animate={{opacity:1}} 
             transition={{duration: 1}}
            // get exit  form AnimatePresence
            exit={{opacity:0}}
             className="expand"
             >
               <p>there is two ways to do it
             the first method using flex box</p>
            {/*end of .. */}
               <p>but the problem with this method that you need to give each element the center class
               and in the case of some elments such as an image you need to wrap it inside a div
               and pass the center class to it</p>
               <div className="btn-space">
                  <button className="btn">further reading</button>
               </div>
             </motion.div>
             )}
             </AnimatePresence>
        </motion.div>
    )
}