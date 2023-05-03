import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'

import { Calendar, CalendarFill, PinMap, PinMapFill } from '../icons';

export default function searchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="my-2">
        <Card.Body>
          <Card.Title>
            Locations
          </Card.Title>
          <Row>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="origin">
                  Origin
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <PinMap />
                  </InputGroup.Text>
                  <Form.Control id="origin" type="text" placeholder="Location" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="destination">
                  Destination
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <PinMapFill />
                  </InputGroup.Text>
                  <Form.Control id="destination" type="text" placeholder="Location" />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row>
        <Col sm>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>
                Dates
              </Card.Title>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="flight-type-select">
                  Flight
                </Form.Label>
                <Form.Select id="flight-type-select">
                  <option value="one-way">One-way</option>
                  <option value="round-trip">Round-trip</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label htmlFor="departure-date-input">
                  Departure date
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <Calendar />
                  </InputGroup.Text>
                  <Form.Control id="departure-date-input" type="date" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label htmlFor="return-date-input">
                  Return date
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <CalendarFill />
                  </InputGroup.Text>
                  <Form.Control id="return-date-input" type="date" />
                </InputGroup>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>
                Details
              </Card.Title>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="travel-class-select">
                  Travel class
                </Form.Label>
                <Form.Select id="travel-class-select">
                  <option value="ECONOMY">Economy</option>
                  <option value="PREMIUM_ECONOMY">Premium Economy</option>
                  <option value="BUSINESS">Business</option>
                  <option value="FIRST">First</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  Passengers
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>Adults</InputGroup.Text>
                  <Form.Control type="number" min="0" />
                </InputGroup>
                <Form.Text>12 years old and older</Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <InputGroup>
                  <InputGroup.Text>Children</InputGroup.Text>
                  <Form.Control type="number" min="0" />
                </InputGroup>
                <Form.Text>2 to 12 years old</Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <InputGroup>
                  <InputGroup.Text>Infants</InputGroup.Text>
                  <Form.Control type="number" min="0" />
                </InputGroup>
                <Form.Text>Up to 2 years old</Form.Text>
              </Form.Group>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button className="w-100" type="submit">
        Search
      </Button>
    </Form>
  )
}