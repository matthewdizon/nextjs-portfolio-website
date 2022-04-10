import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Image from 'next/image';
import styled from 'styled-components';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const StyledTimeline = styled.div`

    .timeline-container {
        padding: 0 96px;
     
        @media (max-width: 900px) {
            padding: 24px 48px;
        }

        @media (max-width: 480px) {
            padding: 0;
        }
    }

    .experience {
        padding: 48px 0;

        display: flex;
        flex-direction: column;
        
        justify-content: space-evenly;
        position: relative;
        
        align-items: center;

        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px 4px;

        margin-bottom: 48px;

        transition: transform 0.5s;

        :hover {
            cursor: pointer;
            transform: translateY(-15px);
        }

        .image-container {
            position: relative;
            height: 200px;
            width: 200px;
            
            img {
                border: 1px solid black !important;
                border-radius: 50%;
            }
        }
        
        .info-container {
            padding: 0 8px;
            text-align: center;
        }
    }

    @media (max-width: 600px) {
        .date {
            font-size: 20px;
        }

        .experience {
            .image-container {
                height: 150px;
                width: 150px;
            }

            .info-container {
                font-size: 12px;
            }
        }
    }

    @media (max-width: 400px) {
        .date {
            font-size: 16px;
        }

        .experience {
            .image-container {
                height: 100px;
                width: 100px;
            }

            .info-container {
                font-size: 8px;
            }
        }
    }
`

const StyledAccomplishments = styled.ul`
    direction: ${props => props.test % 2 == 0 ? "rtl" : "ltr"};

        margin: 0;
        padding: 0;

        li {
            @media (max-width: 600px) {
                font-size: 14px;
            }
            @media (max-width: 400px) {
                font-size: 10px;
            }
        }
`

export default function ExperienceTimeline({experiences}) {

    return (
        <StyledTimeline>
            <Timeline position="alternate" className='timeline-container'>
                {experiences.map((experience, index) => {
                    return(
                        <TimelineItem key={index}>
                            <TimelineOppositeContent>
                                <h1 className="date">{experience.date}</h1>
                                <StyledAccomplishments test={index}>
                                    {/* {experience.accomplishments.map((accomplishment, index) => {
                                        return (
                                            <li key={index}>{accomplishment}</li>
                                        )
                                    })} */}
                                </StyledAccomplishments>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="experience">
                                    <div className="image-container">
                                        <Image src={experience.image} layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="info-container">
                                        <h2>{experience.position}</h2>
                                        <h3>{experience.organization}</h3>
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </StyledTimeline>
    );
}
