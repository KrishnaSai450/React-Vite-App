import { CIcon } from '@coreui/icons-react';
import { cilList, cilShieldAlt } from '@coreui/icons';

const CustomIcon = (props)=>{
    const{text} = props
    return(
        <CIcon icon={text} size="xl"/>
    )
}

export default CustomIcon