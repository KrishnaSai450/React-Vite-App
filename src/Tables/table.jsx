
const CustomTable = ({ data }) => {
    return (
        <>
            {
                data.map(item=>{
                    <tr>
                        <td>{item}</td>
                    </tr>
                })
            }
        </>
    )
};

export default CustomTable