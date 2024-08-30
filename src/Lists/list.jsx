

const CustomList=(prop)=>{
    const{list}=prop
    return(
        <ol>
        <>
        {
        list.map((eachValue)=>{
            return <li >{eachValue}</li>
        })
        }
            </>
        </ol>
    )
}

export default CustomList