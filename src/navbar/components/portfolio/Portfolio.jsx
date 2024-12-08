import "./portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id :1,
        title:"Voice-Based Feedback Analysis",
        img: "https://api.deepai.org/job-view-file/0101cd33-0bbd-4e54-be78-c780be22c33a/outputs/output.jpg?art-image=true",

    },
    {
        id :2,
        title:"Adaptive Recommendations Model",
        img: "https://api.deepai.org/job-view-file/740dc72d-e01a-49e9-8788-d9b92410d656/outputs/output.jpg?art-image=true",


    },
    {
        id :3,
        title:"Generative AI-Powered Recommendations",
        img: "https://pub-e93d5c9fdf134c89830082377f6df465.r2.dev/2024/07/Generative-AI.webp",

    },
    
];

const Single = ({item}) =>{

    const ref = useRef();

    const{scrollYProgress} = useScroll({
        target:ref,
        // offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress ,[0,1],[-300,300]);
    return(
      <section ref = {ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
                  <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>

                </motion.div>
            </div>
        </div>
    </section>
    );
};
const Portfolio = () => {

    const ref = useRef();
    const{scrollYProgress} = useScroll({target:ref,offset:["end end" , "start start"]
    }); 

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    });
   
    return (
        <div className="portfolio" ref={ref} >
            <div className="progress">
                <h1>Our Services</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}

        </div>
    );
    
};

export default Portfolio;