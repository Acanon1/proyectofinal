import React from "react";

import { Card, Form, FormGroup, Row, Col} from 'react-bootstrap'

const Nombre = (props) => { 

    return <div>

        {
            props.nombres.map((usuario) => {
                return <Row>
                    
                    <Col>
                    <Card>
                    <Card.Body>
                            {usuario.nombre}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            })
        }

    </div>
}

export default Nombre