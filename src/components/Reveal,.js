import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


const Reveal = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref}>
            <motion.div variants={{
                hidden: {opacity: 0, y:5, x: -100, filter: "blur(5px)"},
                visible: {opacity: 1, y:0, x: 0, filter: "blur(0)"}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.6}}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default Reveal;