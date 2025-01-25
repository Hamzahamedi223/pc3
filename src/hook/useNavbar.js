import {useEffect, useState} from 'react'

const useNavbar = () => {
    const [showNavbar,SetshowNavbar] = useState(false);
    const toggleNavbar = () => {
        if ( window.scrollY>150){
            SetshowNavbar(true)
        }
        else{
        SetshowNavbar(false)
    }}
    useEffect(()=>{
        window.addEventListener("scroll",toggleNavbar);
        return ()=>window.removeEventListener("scroll",toggleNavbar);

    },[]);
  return {showNavbar}
   

};

export default useNavbar
