// const product =(props)=>{
    //     const {productName,price,color}=props;
    //     console.log(props);
    //     return(
        //         <>
        
        //             <h1>{productName}</h1>
        //             <p>price:{price}</p>
        //             <p>color:{color || "blue"}</p>
        
        
        //         </>
        //     )
        // }
        // product.defaultProps={
            //     productName: "benana",
            //     color: "black",
            //     price: "05554"
            // }
            // export default product;
            // https://www.w3schools.com/react/react_props.asp
// import { Component } from "react";

// class product extends Component{
    //     static defaultProps={
        //         productName: "benana",
        //         color: "black",
        //         price: "05554"
        //     }
        
        //     render(){
            //         const {productName,price,color}=this.props;
            //         return(
                //             <div>
                
                //                 <h1>{productName}</h1>
                //                 <p>price:{price}</p>
                //                 <p>color:{color}</p>
                //             </div>
                //         )
                
                
                //     }
                // }
                
                // export default product;/////
                // // Path: src/component/product.jsx end
                import "./Product.css";
                import React from "react";
                
                
const product =(props)=>{
    const {ProductName,price,color,image,tittlesumery,count}=props;
    console.log(props);
    if(price > 100){
        
    
        return(
            count &&
            <>

                
            <div className="mainproduct">
                <div className="product1">
                <img src={image} alt={ProductName} />
                <h2>name :{ProductName}</h2><br/>
                <h3>price:-${price}</h3>
                <h3>color:{color}</h3>
                <p>tittle:-{tittlesumery}</p><br/>
                <button>Add to cart</button>
                <input type="number" placeholder="1" />
                </div>
            </div>

            </>
        )

    }
    }
product.defaultProps={
    productName: "benana",
    color: "black",
    price: "05554"
}
  
export default product;







