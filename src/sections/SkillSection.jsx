import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import WhiteBox from '../components/WhiteBox';
import questionSvg from '../icons/question.svg';
import { rhythm } from '../utils/typography';

const SkillSection = props => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: 'auto',
    },
    whiteBox: {
      padding: rhythm(1.5),
    },
    containerKihon: {
      position:
        'relative' /* 親要素をrelativeにしないと子(?マーク)がはみ出すため */,
    },
    helpButton: {
      color: '#999999',
      position: 'absolute',
      right: '5px',
      top: '20px',
      cursor: 'pointer',
      ' img': { width: '1.2rem' },
    },
    sonotaListItem: {
      marginBottom: rhythm(1),
    },
    sonotaTitle: {
      color: '#262626',
      fontWeight: 'bold',
    },
    sonotaContent: {
      marginTop: rhythm(1 / 4),
    },
    caret: {
      marginRight: rhythm(1 / 4),
      opacity: 0.8,
    },
    link: {
      color: '#262626',
      cursor: 'pointer',
      textDecorationLine: 'underline',
    },
  };

  const skills = {
    frontend: {
      'JavaScript / Typescript': 3,
      'C++ / C#': 3,
      'HTML / XML': 3,
      'HTTP / HTTPS': 3,
      'CSS / CSS3': 3,
      'XSTL / XPath': 2,
      'Netlify / Gatsby': 2,
      GraphQL: 1,
    },
    Backend: {
      Docker: 3,
      'Python / Django': 2,
      Go: 2,
      'Node.js': 2,
      'PHP / Laravel': 2,
      RDBMS: 2,
      GCP: 2,
      Firebase: 2,
    },
    ETC: [
      {
        title: 'Secure Coding',
        content: (
          <div>
            ASP, PHP, C++, Java
          </div>
        ),
      },
      {
        title: 'Cloud',
        content: (
          <div>
            AWS, GCP, Azure, Ali, Oracle
          </div>
        ),
      },
    ],
  };

  return (
    <SectionContainer id="skill" colorNumber="2" skew>
      <SectionHeader text="기술" colorNumber="2" />
      <div css={styles.grid}>
        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Front-end</h3>
            <div
              css={styles.helpButton}
              onClick={() => props.setCurrentModal('SKILL_HELP')}
              onKeyDown={e => {
                if (e.keyCode === 13) props.setCurrentModal('SKILL_HELP');
              }}
              role="button"
              tabIndex={0}
            >
              <img src={questionSvg} alt="hint button" />
            </div>
            {Object.keys(skills['frontend']).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills['frontend'][skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Back-end</h3>
            {Object.keys(skills['Backend']).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills['Backend'][skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>ETC</h3>
            <ul>
              {skills['ETC'].map(item => (
                <li css={styles.sonotaListItem} key={item.title}>
                  <div css={styles.sonotaTitle}>
                    <FontAwesomeIcon
                      icon="caret-square-right"
                      style={styles.caret}
                    />
                    {item.title}
                  </div>
                  <div css={styles.sonotaContent}>{item.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

SkillSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default SkillSection;
