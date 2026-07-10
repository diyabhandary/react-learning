//1. Reference is used to target the jsx elements.
// 2. changes made with refs , will directly reflect on REAL DOM.
//3. useRef() is used to create a ref.


import {useRef} from "react"

const Refcomp = () => {
  //1.Create a ref variable

  let h2Ref = useRef()
  console.log(h2Ref);  //{current:undefined}

  let paraRef = useRef()

  let changeCss = () =>{
    h2Ref.current.style.color="red"
    h2Ref.current.style.fontStyle = "italic";
    paraRef.current.style.color = "orange"
    paraRef.current.style.textDecoration ="none"

  }

  return(
    //2. Pass the ref variable using 'ref' prop.
    <>
    <h2 ref={h2ref}>Reference is an inbuilt object.</h2>
    <p ref={paraRef}>Lorem ipsum dolor,sit amet consectetur adipisicing elit.
      Repellendus nobis consequatur est sapiente quo unde.</p>
    <button onClick={changeCss}>Change css</button>
    </>
  )
}
export default Refcomp

// let h2Ref = {
//   current:{
//     style:{
//       color:"red"
//     }
//   }
// }