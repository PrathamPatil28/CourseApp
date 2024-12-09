import React, { useEffect } from "react";

const about = () => {
 
    useEffect(()=>{
        document.title="AboutUs"
    },[]);

    return (
        <div>
            <p>
                Our Course Management System streamlines course administration with features to add,
                 view, update, and delete courses effortlessly. Designed for educators and institutions, 
                 it simplifies managing course catalogs while enhancing user experience with a sleek and intuitive interface.
                  Built using cutting-edge technologies like React and RESTful APIs, it ensures fast, 
                  reliable, and seamless performance. Perfect for modern learning platforms, it saves time, 
                  boosts efficiency, and keeps course information organized. 
                  Take control of your courses today with our smart and scalable solution!
             </p>
        </div>
    )
}
export default about;