import React, { useEffect, useState } from 'react';
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
                  alt='Author is John Doe'
                />
              )}
              <h4>{courseData.name}</h4>
            </div>
          </div>
        </div>
        <img
          src={urlFor(courseData.mainImage).url()}
          alt=''
          style={{ height: '400px' }}
        />
        <div>
          <BlockContent
            blocks={courseData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
