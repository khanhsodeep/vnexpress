import React,{useState, useEffect} from 'react'

export default function MoveToTop() {
const [onTop, setOnTop] = useState(false)
useEffect(() => {
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 200) {
            setOnTop(true)
        } else {
            setOnTop(false)
        }
    })
}, []);
const handleOnTop = () =>{
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    })
}
  return (
    <>
     {
         onTop && (
            <button id="ontop" onClick={handleOnTop} title="Go To Top"
            className="block fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">&uarr;</button>
         )
     }
    </>
  )
}
