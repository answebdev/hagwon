import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import classes from '../../styles/Course.module.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Course = () => {
  const [courseData, setCourseData] = useState(null);
  const { slug } = useParams();

  // Fetch post by its slug
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           instructor,
           day,
           time,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setCourseData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!courseData) return <div>Loading...</div>;

  return (
    <div>
      <Helmet>
        <title>ABC English | Courses | {courseData.title}</title>
      </Helmet>
      <div className={classes.Container}>
        <h2 className={classes.LeadTitle}>
          <strong>{courseData.title}</strong>
        </h2>
        <div>
          <div>
            <div>
              {courseData.authorImage && (
                <img
                  src={urlFor(courseData.authorImage).url()}
                  alt={courseData.title}
                />
              )}
              <h4>{courseData.name}</h4>
            </div>
          </div>
        </div>
        <img
          src={urlFor(courseData.mainImage).url()}
          alt=''
          style={{ height: '400px', marginBottom: '40px' }}
        />
        <div>
          <p>
            <strong>Instructor: </strong>
            {courseData.instructor}
          </p>
        </div>
        <div>
          <p>
            <strong>Days: </strong>
            {courseData.day}
          </p>
        </div>
        <div>
          <p>
            <strong>Time: </strong>
            {courseData.time}
          </p>
        </div>
        <div>
          <strong>Course Description:</strong>
          <BlockContent
            blocks={courseData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
        <div>
          <Link to='/courses'>Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
