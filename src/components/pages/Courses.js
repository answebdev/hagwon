import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Card } from 'react-bootstrap';
import sanityClient from '../../client.js';
import classes from '../../styles/Courses.module.css';

const Courses = () => {
  const [allCourseData, setAllCourseData] = useState(null);

  // Fetch data
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "course"]{
          title,
          code,
          slug,
          mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllCourseData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Helmet>
        <title>ABC English | Courses</title>
      </Helmet>
      <div className={classes.Container}>
        <h2 className={classes.LeadTitle}>
          <strong>Courses Offered</strong>
        </h2>

        <div className={classes.CoursesContainer}>
          {allCourseData &&
            allCourseData.map((course, index) => (
              <Card key={index} style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src={course.mainImage.asset.url}
                  alt=''
                />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.code}</Card.Text>
                  {/* <Button variant='primary'>Go somewhere</Button> */}
                  <Link
                    to={'/courses/' + course.slug.current}
                    key={course.slug.current}
                  >
                    View
                  </Link>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
