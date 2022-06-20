import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Card } from 'react-bootstrap';
import sanityClient from '../../client.js';
import classes from '../../styles/Courses.module.css';
import BlockContent from '@sanity/block-content-to-react';

const Courses = () => {
  const [allCourseData, setAllCourseData] = useState(null);

  // Fetch data
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "course"]{
          title,
          code,
          briefDesc,
          slug,
          mainImage{
          asset->{
            _id,
            url
          }
        },
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
        <p>See all our English courses at our Eucalyptus County Park Center.</p>

        <div className={classes.CoursesContainer}>
          {allCourseData &&
            allCourseData.map((course, index) => (
              <Card key={index} className={classes.CourseCard}>
                <Card.Img
                  variant='top'
                  src={course.mainImage.asset.url}
                  alt={course.title}
                />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.code}</Card.Text>
                  {/* <Button variant='primary'>Go somewhere</Button> */}
                  <div>
                    <BlockContent
                      blocks={course.briefDesc}
                      projectId={sanityClient.clientConfig.projectId}
                      dataset={sanityClient.clientConfig.dataset}
                    />
                  </div>
                  <Link
                    className={classes.Button}
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
