

const getDetails =async (req,res)=>{
    try{
        const url = "https://api.websitecarbon.com/site?url=https://fonts.google.com/";
        const data = await fetch(url);
        const result = await data.json();
        res.status(200).json(result);

    }catch(error){
        
    }
}

export default getDetails ;