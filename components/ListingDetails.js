import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ListingDetails ({ listing }) {
  return (
    <Container>
      <Row>
        
        <Col lg>
          <img
            onError={(event) => {
              event.target.onerror = null; 
              event.target.src = "https://placehold.co/600x400?text=Photo+Not+Available";
            }}
            className="img-fluid w-100" 
            src={listing.images.picture_url || "https://placehold.co/600x400?text=Photo+Not+Available"} 
            alt="Listing Image"
          />
          <br /><br />
        </Col>

        
        <Col lg>
          {listing.neighborhood_overview && (
            <>
              <p>{listing.neighborhood_overview}</p>
              <br />
            </>
          )}
          <p><strong>Price:</strong> ${parseFloat(listing.price).toFixed(2)}</p>
          <p><strong>Room:</strong> {listing.room_type}</p>
          <p><strong>Bed:</strong> {listing.bed_type} ({listing.beds || "N/A"})</p>
          <br />
          <p><strong>Rating:</strong> {listing.review_scores?.review_scores_rating || "N/A"}/100 ({listing.number_of_reviews || 0} Reviews)</p>
          <br /><br />
        </Col>
      </Row>
    </Container>
  );
};

export default ListingDetails;
