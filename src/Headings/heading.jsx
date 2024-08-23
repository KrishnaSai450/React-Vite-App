const MainHeading =(prop)=>{
    const{heading} = prop
    return(
        <h1>{heading}</h1>
    ) 
}

export default MainHeading

export const SecondaryHeading=(prop)=>{
    const{heading} = prop
    return(
        <h4>{heading}</h4>
    )
}