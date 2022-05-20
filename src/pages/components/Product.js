import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';


class Product extends Component {
    render(){
        return(
            <Container className="mt-5 pt-5">
                <div className="d-flex justify-content-start align-items-center mb-3">
                    <span>Hottest Giveaways</span>
                </div>
                <Row>
                    <Col md={4}>
                        <Card>
                            <div className="text-center">
                                <img src="https://i.imgur.com/TbtwkyW.jpg" width="250" />
                            </div>
                            <div className="text-center">
                                <h5>Amazon Echo</h5>
                                <span className="text-success">$200 value</span>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <div className="text-center">
                                <img src="https://i.imgur.com/bUWshC0.jpg" width="250" />
                            </div>
                            <div className="text-center">
                                <h5>Kruve Coffee Filters</h5>
                                <span className="text-success">$80 value</span>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <div className="text-center">
                                <img src="https://i.imgur.com/aTqSahW.jpg" width="250" />
                            </div>
                            <div className="text-center">
                                <h5>Apple watch 2.0</h5>
                                <span className="text-success">$360 value</span>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Product;