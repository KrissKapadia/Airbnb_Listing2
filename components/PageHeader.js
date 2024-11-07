import React from 'react';
import Card from 'react-bootstrap/Card'; 


function PageHeader ({text}) {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
          {text}
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default PageHeader;
