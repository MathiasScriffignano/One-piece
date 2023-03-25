import React from 'react'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import chapitre1079 from '../Img/chapter1078.png'





function Chap1078() {
  return (
    <div>

<Card css={{ w: "100%", h: "400px" }} >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text >
        <span className="underline decoration-cyan-600 text-black"> Manga</span>
        </Text>
        <Text >
          <h3 className='text-2xl text-black '> Chapitre 1078</h3>
        </Text>
      </Col>
    </Card.Header>
     <Card.Body  css={{ p: 0, }}>
     
      <Card.Image
     
        src={chapitre1079}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src= {chapitre1079}
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              
             
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Link to='/Newsite'>
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Voir plus
              </Text>
            </Button></Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>

  
    </div>
  )
}

export default Chap1078