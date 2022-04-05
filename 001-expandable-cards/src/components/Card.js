// import '../index.css';
import {motion} from 'framer-motion';
import {useState} from 'react';

export default function Card(){
    const [isOpen,setIsOpen] = useState(false);
    return(
        <div onClick={() => setIsOpen(!isOpen)} className="card">
             <motion.h2>Framer Motion..</motion.h2>
             {isOpen && (
             <motion.div>
               <p>there is two ways to do it
             the first method using flex box</p>
            {/*end of .. */}
               <p>but the problem with this method that you need to give each element the center class
               and in the case of some elments such as an image you need to wrap it inside a div
               and pass the center class to it</p>
             </motion.div>
             )}
        </div>
    )
}