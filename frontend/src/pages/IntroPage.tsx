import React from 'react';
import {
  PageWrapper,
  HeroSection,
  Title,
  Subtitle,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  ChartBackground,
  ChartLine,
  ChartPoint,
  CandleStick,
  CandleWick,
  VolumeBar,
  PriceLabel,
  DateLabel,
  LiveIndicator,
  StartButton
} from '../styles/IntroStyle';
import Header from '../components/Header';

const IntroPage = () => {
  return (
    <PageWrapper>
      <ChartBackground>
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          {/* 그리드 라인 */}
          <g opacity="0.2">
            <line x1="0" y1="200" x2="100%" y2="200" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="0" y1="400" x2="100%" y2="400" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="0" y1="600" x2="100%" y2="600" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="0" y1="800" x2="100%" y2="800" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            
            <line x1="200" y1="0" x2="200" y2="100%" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="400" y1="0" x2="400" y2="100%" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="600" y1="0" x2="600" y2="100%" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="800" y1="0" x2="800" y2="100%" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="1000" y1="0" x2="1000" y2="100%" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="1200" y1="0" x2="1200" y2="100%" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="1400" y1="0" x2="1400" y2="100%" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="1600" y1="0" x2="1600" y2="100%" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="1800" y1="0" x2="1800" y2="100%" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
          </g>

          {/* 주가 차트 라인 */}
          <ChartLine 
            d="M0,800 Q100,780 200,750 T400,700 T600,650 T800,680 T1000,600 T1200,550 T1400,500 T1600,450 T1800,400 T2000,350" 
            fill="none" 
            stroke="#3b82f6" 
            strokeWidth="2" 
            opacity="0.7" 
          />
          
          {/* 이동평균선 */}
          <ChartLine 
            d="M0,780 Q100,770 200,760 T400,730 T600,700 T800,670 T1000,640 T1200,610 T1400,580 T1600,550 T1800,520 T2000,490" 
            fill="none" 
            stroke="#06b6d4" 
            strokeWidth="2" 
            opacity="0.5"
            style={{ animationDelay: '0.5s' }} 
          />
          
          {/* 볼륨 차트 (하단) */}
          <g opacity="0.3">
            <VolumeBar x="100" y="850" width="20" height="30" fill="#3b82f6" style={{ animationDelay: '0.1s' }} />
            <VolumeBar x="130" y="850" width="20" height="50" fill="#3b82f6" style={{ animationDelay: '0.2s' }} />
            <VolumeBar x="160" y="850" width="20" height="20" fill="#3b82f6" style={{ animationDelay: '0.3s' }} />
            <VolumeBar x="190" y="850" width="20" height="40" fill="#3b82f6" style={{ animationDelay: '0.4s' }} />
            <VolumeBar x="220" y="850" width="20" height="60" fill="#3b82f6" style={{ animationDelay: '0.5s' }} />
            <VolumeBar x="250" y="850" width="20" height="30" fill="#3b82f6" style={{ animationDelay: '0.6s' }} />
            <VolumeBar x="280" y="850" width="20" height="45" fill="#3b82f6" style={{ animationDelay: '0.7s' }} />
            <VolumeBar x="310" y="850" width="20" height="25" fill="#3b82f6" style={{ animationDelay: '0.8s' }} />
            <VolumeBar x="340" y="850" width="20" height="55" fill="#3b82f6" style={{ animationDelay: '0.9s' }} />
            <VolumeBar x="370" y="850" width="20" height="35" fill="#3b82f6" style={{ animationDelay: '1.0s' }} />
          </g>
          
          {/* 캔들스틱 차트 */}
          <g opacity="0.5">
            {/* 상승 캔들 */}
            <CandleWick x1="600" y1="600" x2="600" y2="640" stroke="#34d399" strokeWidth="2" style={{ animationDelay: '1.1s' }} />
            <CandleStick x="595" y="600" width="10" height="30" fill="#34d399" style={{ animationDelay: '1.1s' }} />
            
            <CandleWick x1="630" y1="590" x2="630" y2="640" stroke="#34d399" strokeWidth="2" style={{ animationDelay: '1.2s' }} />
            <CandleStick x="625" y="590" width="10" height="40" fill="#34d399" style={{ animationDelay: '1.2s' }} />
            
            <CandleWick x1="660" y1="580" x2="660" y2="630" stroke="#34d399" strokeWidth="2" style={{ animationDelay: '1.3s' }} />
            <CandleStick x="655" y="580" width="10" height="35" fill="#34d399" style={{ animationDelay: '1.3s' }} />
            
            {/* 하락 캔들 */}
            <CandleWick x1="690" y1="570" x2="690" y2="630" stroke="#f87171" strokeWidth="2" style={{ animationDelay: '1.4s' }} />
            <CandleStick x="685" y="570" width="10" height="25" fill="#f87171" style={{ animationDelay: '1.4s' }} />
            
            <CandleWick x1="720" y1="580" x2="720" y2="640" stroke="#f87171" strokeWidth="2" style={{ animationDelay: '1.5s' }} />
            <CandleStick x="715" y="580" width="10" height="30" fill="#f87171" style={{ animationDelay: '1.5s' }} />
            
            {/* 상승 캔들 */}
            <CandleWick x1="750" y1="570" x2="750" y2="620" stroke="#34d399" strokeWidth="2" style={{ animationDelay: '1.6s' }} />
            <CandleStick x="745" y="570" width="10" height="25" fill="#34d399" style={{ animationDelay: '1.6s' }} />
            
            <CandleWick x1="780" y1="560" x2="780" y2="610" stroke="#34d399" strokeWidth="2" style={{ animationDelay: '1.7s' }} />
            <CandleStick x="775" y="560" width="10" height="30" fill="#34d399" style={{ animationDelay: '1.7s' }} />
            
            <CandleWick x1="810" y1="550" x2="810" y2="600" stroke="#34d399" strokeWidth="2" style={{ animationDelay: '1.8s' }} />
            <CandleStick x="805" y="550" width="10" height="35" fill="#34d399" style={{ animationDelay: '1.8s' }} />
          </g>
          
          {/* 가격 레이블 */}
          <PriceLabel x="50" y="200" style={{ animationDelay: '2.0s' }}>52,000</PriceLabel>
          <PriceLabel x="50" y="400" style={{ animationDelay: '2.1s' }}>48,000</PriceLabel>
          <PriceLabel x="50" y="600" style={{ animationDelay: '2.2s' }}>44,000</PriceLabel>
          <PriceLabel x="50" y="800" style={{ animationDelay: '2.3s' }}>40,000</PriceLabel>
          
          {/* 날짜 레이블 */}
          <DateLabel x="200" y="900" style={{ animationDelay: '2.4s' }}>01/15</DateLabel>
          <DateLabel x="400" y="900" style={{ animationDelay: '2.5s' }}>01/16</DateLabel>
          <DateLabel x="600" y="900" style={{ animationDelay: '2.6s' }}>01/17</DateLabel>
          <DateLabel x="800" y="900" style={{ animationDelay: '2.7s' }}>01/18</DateLabel>
          <DateLabel x="1000" y="900" style={{ animationDelay: '2.8s' }}>01/19</DateLabel>
          
          {/* 실시간 표시기 */}
          <g transform="translate(1800, 100)">
            <LiveIndicator cx="0" cy="0" r="5" fill="#f87171" />
            <text x="10" y="4" fontSize="12" fill="#555" opacity="0.7" style={{ animationDelay: '3.0s' }}>LIVE</text>
          </g>
          
          {/* 데이터 포인트 */}
          <ChartPoint cx="200" cy="750" r="4" fill="#3b82f6" style={{ animationDelay: '1.0s' }} />
          <ChartPoint cx="400" cy="700" r="4" fill="#3b82f6" style={{ animationDelay: '1.5s' }} />
          <ChartPoint cx="600" cy="650" r="4" fill="#3b82f6" style={{ animationDelay: '2.0s' }} />
          <ChartPoint cx="800" cy="680" r="4" fill="#3b82f6" style={{ animationDelay: '2.5s' }} />
          <ChartPoint cx="1000" cy="600" r="4" fill="#3b82f6" style={{ animationDelay: '3.0s' }} />
          <ChartPoint cx="1200" cy="550" r="4" fill="#3b82f6" style={{ animationDelay: '3.5s' }} />
          <ChartPoint cx="1400" cy="500" r="4" fill="#3b82f6" style={{ animationDelay: '4.0s' }} />
          <ChartPoint cx="1600" cy="450" r="4" fill="#3b82f6" style={{ animationDelay: '4.5s' }} />
        </svg>
      </ChartBackground>

      <Header />

      <HeroSection>
        <Title>뉴스 속 투자 기회를, AI가 찾아드립니다</Title>
        <Subtitle>실시간 뉴스 분석과 AI 주가 예측으로 한발 앞선 투자 전략을 경험하세요</Subtitle>

        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>🤖</FeatureIcon>
            <FeatureTitle>자연어 기반 뉴스 요약</FeatureTitle>
            <FeatureText>복잡한 뉴스를 핵심만 간추려 이해하기 쉽게 요약합니다.</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureTitle>실시간 주가 예측</FeatureTitle>
            <FeatureText>딥러닝 기반으로 빠르고 정확한 주가 예측을 제공합니다.</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🎯</FeatureIcon>
            <FeatureTitle>마우스 오버 상세분석</FeatureTitle>
            <FeatureText>뉴스 카드에 마우스를 올리면 주가 영향도와 분석이 표시됩니다.</FeatureText>
          </FeatureCard>
        </FeatureGrid>
        
        <StartButton>시작하기</StartButton>
      </HeroSection>
    </PageWrapper>
  );
};

export default IntroPage;