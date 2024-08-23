

const CustomButton = (props)=>{
    const {text, onclick=()=>{}}=props

    const style={backgroundColor:"blue", color:"white"}
    return(
        <>
        <button style={style} onClick={onclick}>{text}</button>
        </>
    )
}

export default CustomButton