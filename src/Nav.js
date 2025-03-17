

import "./Nav.css";

function  Nav(){


    return(

        <>
        
<nav className="nav1">

   <a href="#"> <img src="zosh.png" className="zosh"></img></a> 

<ul>Men</ul>


<ul>Women</ul>

<ul>Home & Furniture</ul>

<ul>Electronics</ul>


</nav>

<br></br><br></br>



<nav className="left">
<input type="text" placeholder="search here" className="searchbox"></input>
   
<img src="search.png" className="searchi"></img>

<div className="login">
    </div>
    <div className="login2">
        
    </div>

    <ul className="lo">Login</ul>


<a href="/admin">    <ul className="lo2">Become A Seller</ul></a>  



</nav>




        </>
    )
}
export default Nav