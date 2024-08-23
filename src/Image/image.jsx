const CustomImage = (props)=>{
    const{source,alternateText,width,height} = props
    return(
        <img src={source} height={height}  text={alternateText} width={width}/>
    )
}

export default CustomImage