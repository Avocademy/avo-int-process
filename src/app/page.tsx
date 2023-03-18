import { createClient } from 'contentful';
import styles from './page.module.css'

var client = createClient({
  space: process.env.CONTENTFUL_SPACE_KEY as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

async function getContentfulData() {
  const contentfulData = await client.getEntries({
    content_type: "course",
  });  
  return contentfulData.items;
}

export default async function Home() {

  const contentfulData = await getContentfulData();
  //contentfulData.map((cardInfo:any )=> <CourseCardGoesHere cardInfo={cardInfo.fields}/>) // this will return two objects where you can find the info needed to create a course card
  
  return (
    <div className= {styles.tab__frame}>
      <div className= {styles.tab__bar}>
        <p>Certification</p>
      </div>
      <progress value = {41} max = {102} className= {styles.progress__bar}></progress>
      <p className= {styles.big__heading}>Agile for UX/UI</p>
      <p className = {styles.course__description}>A great way to start your UX journey. Some questions you’ll be able to answer are why should you know agile? What exactly does scrum mean?</p>
      <p className={styles.time__required}>16hrs</p>

    </div>
  )
}

