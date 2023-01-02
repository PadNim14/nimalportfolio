import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="August 2019 - May 2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'> Purdue University, West Lafayette, Indiana</h3>
                    <p>
                       Bachelor of Science in Computer Engineering, (BSCMPE)
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="August 2022 - present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Software Engineering Tools Teaching Assistant</h3>
                    <p>
                    
                    
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="January 2020 - May 2020"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>EPICS Team Member on Database and Innovative Software for the Community</h3>
                    <p>
                        Purdue has a wonderful program for its students called EPICS (Engineering Projects in Community Service),
                        and it's a great way to gain real-world experience while still being in an academic setting.
                        My team was called DISC, and it had two subteams. My subteam was called Team HOPE, which stood for Housing Opportunities Providing
                        Empowerment, and our job was to improve a web-based detection systems that alerted caseworkers on homeless people in the
                        Greater Lafayette area who were either arrested or released from jail.
                        <br />
                        I learned basic HTML/CSS as well as the Django framework through Python. It was very confusing at first, but it helped me 
                        pick multiple languages quickly and efficiently, a skill I would later need as a computing student and professional.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="May 2020"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Accepted into the School of Electrical and Computer Engineering</h3>
                    <p>
                       After successfully completing my FYE coursework, I was accepted into the School of Electrical and Computer Engineering.
                       <br />
                       Time to see what computer engineering is all about!
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;