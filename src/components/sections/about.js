import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python (pandas, numpy, matplotlib+)',
    'PyTorch',
    'Django',
    'TypeScript',
    'NodeJS',
    'NextJs',
    'Solidity (Foundry, Hardhat)',
    'GraphQL',
    'PostgeSQL',
    'AWS',
    'Docker',
    'Kubernetes',
    'RabbitMQ',
    'Git',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Jules Taghe and I enjoy creating things as long as I feel there is something
              I can learn from it. Apart from being a Mechatronics Undergrad at CPUT, I am 
              a full-stack and blockchain developer Aiming at leveraging code for world development.
            </p>

            <p>
              <h4>Things I do</h4>
              <ul>
                <li>research and keep up to date with the latest trends in the WEB 3 space. (everything goes so fast)</li>
                <li>
                  continously polish my skills in Smart contracts development and intergration - focusing mainly on gas efficiency and 
                  security.
                </li>
                <li>
                  Experimenting With Data Processing them for meaning and playing around with various ML models.
                </li>
                <li>
                  Now and then pick up on new languages and technologies diving deep into them and learning how they can be potential asset
                  in my toolbox.
                </li>
              </ul>
{/* 
              <h4>Projects I'm working on</h4>
              <ul>
                <li>
                  helping maintain an open-source python package for
                  <a href="https://github.com/iobis/pyobis">Open Ocean Data</a>
                </li>
                <li>
                  working on a Drawin Core Data Visualization
                  <a href="https://github.com/marinebon/py-dwc-viz">python package</a>
                </li>
              </ul> */}

              <h4>Things I did previously</h4>
              <ul>
                <li>developed smart contract and backend system for liquidity pool and staking functionalities
                  of a risk tokenizing protocol</li>
                <li>
                  worked on a an onchain insurance Marketplace built untop of the EVM.
                </li>
                <li>worked on authentication and CRM microservices for one of South Africa's Biggest insurance Company.</li>
                <li>
                  built a blockchain powered to authonomous organisations where holders of a particular token can come together and 
                  take decisions on use of funds in the system's treasury.
                </li>
                <li>
                  Designed, built and deployed a multitude of NFT PFP projects as well as a few Marketplaces on both layer 1 and 2 chains.
                </li>
              </ul>
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>

        <div>
          <br />
          <br />
          <h1>Education</h1>
          <div>
            <br />
            <h3>Cape Peninsula University of Technology, South Africa </h3>
            Advanced Diploma in Mechatronics Engineering, <i>Expected 2023</i>
            {/* <i>
              <ul>
                <li>
                  {' '}
                  <b>Courses</b>: Linear and Vector Algebra, Calculus, Data Structure and Algorithms
                </li>
                <li>
                  {' '}
                  <b>Organisations</b>:
                </li>
              </ul>
            </i> */}
          </div>
        </div>
      </div>
    </StyledAboutSection>
  );
};

export default About;
