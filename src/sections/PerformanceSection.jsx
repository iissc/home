import Link from 'gatsby-link';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import jissekiCompare from '../images/jisseki-compare.png';
import jissekiNote from '../images/jisseki-note.png';
import jissekiRebalancer from '../images/jisseki-rebalancer.jpg';
import jissekiTravelrPng from '../images/jisseki-travelr.png';
import jissekiWarikanPng from '../images/jisseki-warikan.png';
import jissekiYuuniJpg from '../images/jisseki-yuuni.jpg';
import { rhythm } from '../utils/typography';

const PerformanceSection = () => {
  const performances = [
    {
      name: '개인정보 노출 점검 솔루션',
      description:
        '웹페이지에 노출된 개인정보를 자동으로 탐색합니다',
      techStack: [
        { name: 'wget', description: '크롤링' },
        { name: 'front-end', description: 'javascript' },
        { name: 'back-end', description: 'APM' },
      ],
      webpageURL: '/',
      githubURL: '/',
      imgPath: jissekiRebalancer,
    },
    {
      name: '스마트폰 악성 앱 진단 솔루션',
      description:
        '스마트폰 악성 앱 지단 솔루션',
      techStack: [
        { name: '안드로이드', description: '샌드박스' },
      ],
      webpageURL: '/',
      githubURL: '/',
      blogPath: '/',
      imgPath: jissekiTravelrPng,
    },
    {
      name: '프로그래밍 코드 검증 시스템',
      description:
        '원격으로 코드의 무결성 검사 및 보안 취약점 존재 여부를 검증합니다',
      techStack: [{ name: 'Docker', description: 'Architecture' }],
      webpageURL: '/',
      githubURL: '/',
      imgPath: jissekiCompare,
    },
  ];

  const styles = {
    grid: {
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: 1200,
    },
    whiteBox: {
      padding: rhythm(1),
    },
    itemImage: {
      border: '1px solid #aaa',
      objectFit: 'cover',
      height: '160px',
      width: '100%',
    },
    itemTitle: {
      color: '#262626',
      display: 'block',
      fontWeight: 'bold',
      margin: '1rem 0',
      textDecoration: 'none',
    },
    description: {
      fontSize: '0.8rem',
      marginBottom: '0.8rem',
    },
    externalLink: {
      color: '#999',
      fontSize: '0.8rem',
      textDecoration: 'none',
      marginRight: '1rem',
      ':hover': {
        background: '#eee',
      },
    },
    techStackGrid: {
      borderTop: '1px dotted #999',
      display: 'grid',
      fontSize: '0.8rem',
      gridGap: '0.4rem',
      gridTemplateColumns: '1fr 1fr',
      marginTop: '0.8rem',
      paddingTop: '1rem',
      ' > span': {
        cursor: 'default',
      },
      ' > span::before': {
        content: '- ',
      },
    },
  };

  return (
    <SectionContainer id="performance">
      <SectionHeader text="주요실적" colorNumber="1" />

      <div css={styles.grid}>
        {performances.map(performance => (
          <WhiteBox key={performance.name} css={styles.whiteBox}>
            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={performance.imgPath}
                css={styles.itemImage}
                alt={performance.name}
              />
            </a>

            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.itemTitle}
            >
              {performance.name}
              <IconExtLink />
            </a>

            <p css={styles.description}>{performance.description}</p>

            <ul css={styles.techStackGrid}>
              {performance.techStack.map(tech => (
                <span
                  data-for={tech.name + tech.description}
                  data-tip
                  key={tech.name}
                >
                  {tech.name}
                  <ReactTooltip
                    id={tech.name + tech.description}
                    effect="solid"
                  >
                    {tech.description}
                  </ReactTooltip>
                </span>
              ))}
            </ul>
          </WhiteBox>
        ))}
      </div>
      {/* グリッド終点 */}
    </SectionContainer>
  );
};

export default PerformanceSection;
