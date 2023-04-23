import React from "react";
import FeedModal from "./FeedModal";
import FeedPhoto from "./FeedPhoto";
import PropTypes from 'prop-types';


export default function Feed({user}){
    const [modalPhoto, setModalFoto] = React.useState(null)
    const [pages, setPages] = React.useState([1])
    const [infinite, setInfinite] = React.useState(true)

    React.useEffect(()=>{
        let wait  = false
        function infitineScroll(){
            if(infinite){
            const scroll =  window.scrollY;
            const height = document.body.offsetHeight -  window.innerHeight
            if(scroll > height * 0.75 && !wait){
                setPages((pages)=>[...pages, pages.length + 1])
                wait = true;
                setTimeout(()=>{
                    wait = false;
                    },500)
                }
            }

        }
        window.addEventListener('wheel',infitineScroll)
        window.addEventListener('scroll',infitineScroll)
        return ()=>{
            window.removeEventListener('wheel',infitineScroll)
            window.removeEventListener('scroll',infitineScroll)

        }
    },[infinite])

    
    return (
        <>
           {modalPhoto && <FeedModal  photo={modalPhoto} setModalFoto={setModalFoto} /> } 

            {pages.map((page)=>(
                <FeedPhoto 
                    key={page}
                    page={page} 
                    user={user} 
                    setModalFoto={setModalFoto} 
                    setInfinite={setInfinite}
                />
            ))} 
        </>          
    )
}

Feed.defaultProps = {
    user: 0
}
Feed.propType ={
    user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}
