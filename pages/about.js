import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

// Fetch listing data using getStaticProps
export async function getStaticProps() {
  const listingId = 10057826; // Replace with the actual _id of the desired listing

  try {
    // Fetch the listing data from the API using the specified _id
    const res = await fetch(`https://web-422-ass1.vercel.com/api/listings/${listingId}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to fetch listing: ${res.statusText}`);
    }

    // Return the listing data as props
    return {
      props: {
        listing: data,
      },
    };
  } catch (error) {
    console.error('Error fetching listing:', error);
    return {
      props: {
        listing: null,
      },
    };
  }
}

function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer" />
      <Card className="bg-light mb-3">
        <Card.Body>
          <Card.Text>
            Hello! I am Kriss Kapadia, a developer passionate about building web applications. 
            With experience in both front-end and back-end technologies, I love creating efficient, user-friendly solutions.
            In my spare time, I enjoy learning new programming languages and contributing to open-source projects. 
            My goal is to continuously improve my skills and deliver high-quality software.
          </Card.Text>
        </Card.Body>
      </Card>

      <PageHeader text="Featured Listing" />
      <Card className="bg-light mb-3">
        <Card.Body>
          {listing ? (
            <>
              <ListingDetails listing={listing} />
            </>
          ) : (
            <p>Listing information is currently unavailable.</p>
          )}
        </Card.Body>
      </Card>

      {listing && (
        <Link href={`/listing/${listing._id}`} passHref legacyBehavior>
          <a className="btn btn-primary">View Listing Details</a>
        </Link>
      )}

      <br />
      <Link href="/" passHref legacyBehavior>
        <a>Back to Home</a>
      </Link>
    </>
  );
}

export default About;
