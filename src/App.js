// import React, { Component } from 'react';
// class App extends Component{
//     static defaultProps={
//         productName: "benana",
//         color: "black",
//         price: "05554"
//     }



//     render(){
//         return(
//             <div>
//                 <h1>hello</h1>
//                 <h1>hello</h1>
//                 <h1>hello</h1>
//                 <h1>hello</h1>
//             </div>
//         )
//     }
// }
// export default App;


// With this snippet from src/App.js: use functional components and default props to render a list of products with different properties.


// import Product from "./component/product";



// const App =()=>{
//     return(
//         <div>
//             <Product/>
//             <Product productName="گل مریم" price={4511} />
//             <Product productName="گل " price={955400} color={["red"]}/>
//             <Product productName="گل " price={32544} color={["orange"]}/>
//         </div>
//     )

// }


// 




// // Path: src/component/product.jsx end
// import { useState } from "react";
// import Footer from "./component/Footer";
// import Header from "./component/Header";


// const App=()=>{
//         const [name,setName]=useState("ali")
//         const [age,setAge]=useState(20)
//         const [favcolor,setcolor]=useState("blue")
//         function changename(){
//             setName("mina")
//             setAge(30)
//             setcolor("red")
            
//         }
//         return(
            
//             < >
            
//             <div>
//                 <Header/>
//             </div>
//             <div style={{color:"red",fontWeight:"800", fontSize:"25px",textAlign:"center",paddingTop:"50px"}}>
//             { name}
//                 <br/>
//                 {age}
//                 <br/>
//                 {favcolor}
//                 <br/>
//                 <button style={{width:"150px",height:"40px",color:"blue",fontSize:"20px",fontWeight:"500",borderRadius:"10px"}}  onClick={changename}>change name</button>
//                 <Footer/>
            
//             </div>
                
//             </>
//         )
// }


// export default App;
    
    
    // Remove the duplicate import statement for useState
    // import { useState } from "react";
   




// import React, {Component} from "react"



// class App extends Component {
// //  constructor(){
// //      super()
// //     // this.changemystate=this.changemystate.bind(this)
// //     // this.orginalstate=this.orginalstate.bind(this) 
// //      }
 
//     state={
//         name:"hasan",
//         age:25,
//         favcolor:"green",
//         favname:"aria",
//         favmobile:"iphone 15 pro max",
//         favfood:"pizza",
//         favbrand:"Apple"
//     }
//     changemystate=()=>{
//        this.setState({name:"ali"})
//        this.setState({age:"24"})
//        this.setState({favcolor:"pink"})
//        this.setState({favname:"amine"})
//        this.setState({favmobile:"::::::::::::Iphone 15 pro::::::::::"})
//        this.setState({favfood:"::::::::sandewich:::::::::"})
//        this.setState({favbrand:":::::::::Dell::::::::::::"})
      
   
//     }
//     orginalstate=()=>{
//        this.setState({name:"hasan"})
//        this.setState({age:"25"})
//        this.setState({favcolor:"green"})
//        this.setState({favname:"aria"})
//        this.setState({favmobile:"iphone 15 pro max"})
//        this.setState({favfood:"pizza"})
//        this.setState({favbrand:"Apple"})
      
   
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h1>{this.state.age}</h1>
//                 <h1>{this.state.favcolor}</h1>
//                 <h1>{this.state.favname}</h1>
//                 <h1>{this.state.favmobile}</h1>
//                 <h1>{this.state.favfood}</h1>
//                 <h1>{this.state.favbrand}</h1>
//                 <button onClick={this.changemystate}>click here</button>
//                 <button onClick={this.orginalstate}>click here</button>
//             </div>
//         )
//     }
// }
// import Product from "./component/Product/Product"
// import Header from "./component/header/Header"
// import { useState } from "react"
// const App=()=>{
//     function changename(){
//         setName("ali")
//         setAge(19)
//         setfavcolor("lightgreen")
//         setfavfood("pizza")
//         setfavmobile("iphone 15 pro max")
//         setfavbrand("Apple")
        


//     }
//     function combackorginal(){
//         setName("hasan")
//         setAge(20)
//         setfavcolor("lightblue")
//         setfavfood("burger")
//         setfavmobile(":::::iphone 15 pro:::::")
//         setfavbrand("Samsounge")
        


//     }
//     const[name,setName]=useState("hasan")
//     const[age,setAge]=useState(20)
//     const[favcolor,setfavcolor]=useState("lightblue")
//     const[favfood,setfavfood]=useState("burger")
//     const[favmobile,setfavmobile]=useState(":::::iphone 15 pro:::::")
//     const[favbrand,setfavbrand]=useState("Samsounge")

//     return(
//         <>
//             <Product  productName="Iphone 15"  />
//             <Product  price={55}  />
//             <Header/>
//             {name}<br/>
//             {age}<br/>
//             {favcolor}<br/>
//             {favfood}<br/>
//             {favmobile}<br/>
//             {favbrand}<br/>
//             <button onClick={changename}>change tittle</button>
//             <button onClick={combackorginal}>change tittle to orginal</button>
//         </>
//     )
// }
// Remove the unused import statement for 'product'
// import product from "./component/Product/Product";

import "./component/App.css";
import Product from "./component/Product/Product";
import Header from "./component/header/Header";
// Import the images
import image1 from './component/image/1.jpg';
import image2 from './component/image/2.jpg';
import image3 from './component/image/3.jpg';
import image4 from './component/image/4.jpg';
import image5 from './component/image/5.jpg';
import { Link } from "react-router-dom";




// ... import the end of my imgaes

const App=()=>{
    return (
        <>
        <div className="apptop">
            <h3>my im here</h3>
            <nav>
            <Link to="/">App</Link>
            <Link to="/Book">Home</Link>
            <Link to="/About">about</Link>

            </nav>

        </div>data.map((obj)=>(

        ))
       
            <Header/>
            <div className="productbox">
                <Product ProductName="Iphone 11 " color="red" price={1000} image={image1} tittlesumery="Released 2020, September 22 171g, 7.8mm thickness iOS 17, up to iOS 17.5 128GB/256GB/512GB storage, no card slot" count={10}/>
                <Product ProductName="Iphone 12" color="brown" price={2000} image={image2} tittlesumery="Released 2021, September 22 171g, 7.8mm thickness iOS 17, up to iOS 17.5 128GB/256GB/512GB storage, no card slot" count={5}/>
                <Product ProductName="Iphone 13" color="yellow" price={3000}  image={image3} tittlesumery="Released 2022, September 22 171g, 7.8mm thickness iOS 17, up to iOS 17.5 128GB/256GB/512GB storage, no card slot" count={12}/>
                <Product ProductName="Iphone 14" color="green" price={4000}  image={image4} tittlesumery="Released 2023, September 22 171g, 7.8mm thickness iOS 17, up to iOS 17.5 128GB/256GB/512GB storage, no card slot" count={14}/>
                <Product ProductName="Iphone 15" color="green" price={5000}  image={image5} tittlesumery="Released 2024, September 22 171g, 7.8mm thickness iOS 17, up to iOS 17.5 128GB/256GB/512GB storage, no card slot" count={15}/>
            </div>
        </>
    );
}


export default App;

