function Loginpage(){

    const Message=()=>{
        alert("welcome to zomato")
    }

    return(
        <>
    
        <h2>zomato loginpage</h2>

        Name:<input type="text"/> <br/><br/>
        Email-id:<input type="text"/> <br/><br/>
        password:<input type="text"/> <br/><br/>
        phone no:<input type="number"/> <br/><br/>

        <button onClick={Message}>Login</button>    
    
        </>
    )

}
export default Loginpage