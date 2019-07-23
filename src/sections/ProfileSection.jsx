import React from 'react';
import AgeCalculator from '../components/AgeCalculator';
import Hr from '../components/Hr';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import profileJpg from '../images/profile.jpg';
import { rhythm } from '../utils/typography';

const ProfileSection = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
    },
    link: {
      color: '#262626',
    },
    whiteBox: {
      height: 'min-content',
      padding: rhythm(1),
      paddingTop: 0,
    },
    whiteBoxKeireki: {
      gridRowStart: 'span 2',
    },
    h3: {
      marginTop: rhythm(2),
      marginBottom: rhythm(1.5),
    },
    gaiyouPictureContainer: {
      marginBottom: rhythm(1.5),
      textAlign: 'center',
    },
    gaiyouPicture: {
      width: '200px',
      borderRadius: '50%',
    },
    gaiyouListItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: rhythm(1),
    },
    gaiyouItemName: {
      flex: 2,
      textAlign: 'right',
      marginRight: '1rem',
    },
    gaiyouItemContent: {
      flex: 3,
    },
    keirekiGray: {
      color: '#999999',
    },
  };

  return (
    <SectionContainer id="profile" colorNumber="2" skew skewReverse>
      <SectionHeader text="기업소개" colorNumber="2" />

      <div css={styles.container}>
        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>개요</h3>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>상호</b>
            </div>
            <div css={styles.gaiyouItemContent}>나무시큐리티</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>개업후</b>
            </div>
            <div css={styles.gaiyouItemContent}>
              <AgeCalculator birthday="2011-12-13T15:00+09:00" />
            </div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>영문명</b>
            </div>
            <div css={styles.gaiyouItemContent}>Namu Security</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>주소</b>
            </div>
            <div css={styles.gaiyouItemContent}>
              서울특별시 영등포구 도신로52길 19
            </div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>전화</b>
            </div>
            <div css={styles.gaiyouItemContent}>02-6498-3019</div>
          </div>
        </WhiteBox>

        <WhiteBox css={{ ...styles.whiteBox, ...styles.whiteBoxKeireki }}>
          <h3 css={styles.h3}>연혁</h3>

          <Hr />

          <p>
            <b>연혁</b>
            <br />
            <span css={styles.keirekiGray}>(2011.12 - )</span>
          </p>
          <p>
            회사설립
          </p>

          <Hr />

          <p>
            <b>보안 컨설팅</b>
            <br />
            <span css={styles.keirekiGray}>(2012.4 - 2015.3)</span>
          </p>
          <p>
            건설업계 대외서비스 모의해킹
          </p>

          <Hr text="(보안 솔루션)" />

          <p>
            <b>개발중</b>
            <br />
            <span css={styles.keirekiGray}>(2019)</span>
          </p>
          <p>
            악성코드 차단 솔루션
          </p>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>가이드 자문</h3>
          <p>
            방송통신위원회 스마트폰앱 개인정보보호를 위한 가이드
          </p>
          <p>
            <b>1．웹사이트 취약점 진단 방법론</b>
          </p>
          <p>
            <b>2．모바일앱 취약점 진단 방법론</b>
          </p>
          <p>
            인터넷진흥원 정보보호지원센터를 통해 중소기업 컨설팅 및 취약점진단 지원 사업을 수행하고 있습니다.
          </p>
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

export default ProfileSection;
