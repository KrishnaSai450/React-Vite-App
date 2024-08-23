

const CustomList=(prop)=>{
    const{list}=prop
    return(
        <ol>
        <>
        {
        list.map((eachFruit,index)=>{
            return <li key={index} >{eachFruit}</li>
        })
        }
            </>
        </ol>
    )
}

export default CustomList