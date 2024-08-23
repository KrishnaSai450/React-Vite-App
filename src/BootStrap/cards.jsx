import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomDNALoader from '../Loader/loader';
import InfiniteLoader from '../Loader/infinite_loader';
import CustomToast from '../Toasts/toasts';


function CustomCards({title,text}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <CustomDNALoader/>
        <InfiniteLoader color={"blue"}/>
        <CustomToast message={"Hii"}/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCards;