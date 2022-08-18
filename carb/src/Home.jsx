
import{Box,Typography,Button,styled} from "@mui/material";
import {useState} from "react";
//api link = https://api.websitecarbon.com/site?url=


const Container = styled(Box)`
    height:100vh;
    width:100wh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    overflow:hidden;

`


const Home = ()=>{
    const [val,setVal] = useState("");
    const [res,setRes] = useState("");

    const fetchApi =async ()=>{
    
        const url =  "https://api.websitecarbon.com/site?url=https://fonts.google.com/"
       fetch(url,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then(response=>response.json()).then(data=>console.log(data));
    }
    const handleChange = (e)=>{
        
        setVal(e.target.value);
       
    }

    const clicked = ()=>{
        fetchApi();

    }
   

    return (
        <Container>
        
        <Typography style ={{fontSize:50,fontWeight:600,fontFamily:'Roboto Slab'}}>Check Carbon Footprint of a webpage</Typography>
        <input placeholder = "place your link here"
        style = {{fontSize:30,width:"40%",textAlign:"center",
        border:"2px solid black",
        borderRadius:"8px",margin:"25px 0 35px 0"}}   onChange = {(e)=>handleChange(e)}></input>
        <Button variant = "contained" onClick = {clicked}>Check</Button>
        <p>{res}</p>
        </Container>
    )
}

export default Home;