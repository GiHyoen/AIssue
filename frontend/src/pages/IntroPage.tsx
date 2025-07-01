import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import {
  PageWrapper,
  HeroSection,
  Title,
  Subtitle,
  StartButton,
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
  ContentWrapper,
  ChatSection,
  ChatContainer,
  ChatIntro,
  ChatCard,
  ChatHeader,
  ChatMessages,
  ChatBubble,
  ChatSectionTitle,
  NewsIntroSection,
  NewsIntroHeader,
  NewsCardGrid,
  NewsCardIntro,
  NewsCardBody,
  NewsMeta,
  NewsCardTitle,
  NewsCardText,
  ImpactWrapper,
  ImpactLabel,
  ImpactBarBg,
  ImpactBarFg,
} from '../styles/IntroStyle';

const sampleNews = [
  {
    category: '경제 · 반도체',
    time: '2시간 전',
    title: '삼성전자, 차세대 HBM3E 메모리 양산 돌입',
    summary:
      '삼성전자가 업계 최초로 차세대 HBM3E 메모리 반도체 양산을 시작했습니다. AI 서버용 수요 증가로 실적 개선이 기대됩니다.',
    positive: true,
    impact: 85,
  },
  {
    category: '경제 · 반도체',
    time: '4시간 전',
    title: 'SK하이닉스, 미국 정부와 반도체 보조금 협상 난항',
    summary:
      'SK하이닉스가 미국 정부와의 보조금 협상에서 어려움을 겪고 있습니다. 지원 규모 축소 우려로 투자 계획에 차질이 예상됩니다.',
    positive: false,
    impact: 70,
  },
  // …필요시 더 추가…
];

const IntroPage = () => {
  const navigate = useNavigate(); // 👈 훅 사용

  const handleStartClick = () => {
    navigate('/home'); // 👈 클릭 시 /main 이동
  };
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
      <ContentWrapper>
        <HeroSection>
          <Title>뉴스 속 투자 기회를, AI가 찾아드립니다</Title>
          <Subtitle>실시간 뉴스 분석과 AI 주가 예측으로 한발 앞선 투자 전략을 경험하세요</Subtitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>🔍</FeatureIcon>
              <FeatureTitle>AI 기반 뉴스 요약 분석</FeatureTitle>
              <FeatureText>증권 관련 뉴스를 AI가 요약하고, 주가에 미치는 긍·부정 영향도를 시각적으로 분석합니다.</FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>📈</FeatureIcon>
              <FeatureTitle>실시간 주식 차트</FeatureTitle>
              <FeatureText>거래량, 등락률, 관심도 기준으로 정렬된 실시간 주식 차트를 확인해보세요.</FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🤖💬</FeatureIcon>
              <FeatureTitle>AI 투자 비서 챗봇</FeatureTitle>
              <FeatureText>궁금한 주식 이슈나 종목을 물어보세요. AI가 뉴스 분석과 투자 정보를 실시간으로 제공해드립니다.</FeatureText>
            </FeatureCard>
          </FeatureGrid>
        </HeroSection>
      </ContentWrapper>
      {/* ↓ 여기서 "주요 뉴스 분석" 섹션을 삽입 */}
        <NewsIntroSection>
          <NewsIntroHeader>AI 기반 뉴스 요약 분석</NewsIntroHeader>
          <NewsCardGrid>
            {sampleNews.map((n, idx) => (
              <NewsCardIntro key={idx}>
                <NewsCardBody>
                  <NewsMeta>
                    <span>{n.category}</span>
                    <span>{n.time}</span>
                  </NewsMeta>
                  <NewsCardTitle>{n.title}</NewsCardTitle>
                  <NewsCardText>{n.summary}</NewsCardText>
                  <ImpactWrapper>
                    <ImpactLabel positive={n.positive}>
                      {n.positive ? '긍정적' : '부정적'}
                    </ImpactLabel>
                    <ImpactBarBg>
                      <ImpactBarFg percent={n.impact} positive={n.positive} />
                      <ImpactBarFg percent={n.impact} positive={n.positive} />
                    </ImpactBarBg>
                    <span>{n.impact}%</span>
                  </ImpactWrapper>
                </NewsCardBody>
              </NewsCardIntro>
            ))}
          </NewsCardGrid>
        </NewsIntroSection>
      <ChatSection>
        <ChatSectionTitle>AI 투자 비서 챗봇</ChatSectionTitle>
          <ChatContainer>
            {/* 왼쪽 텍스트 */}
            <ChatIntro>
              <p>AIssue의 AI 챗봇은 최신 증권 뉴스와 시장 동향을 분석하여 투자자에게 필요한 정보를 대화로 제공합니다.</p>
              <ul>
                <li>특정 종목에 대한 최신 뉴스와 분석</li>
                <li>업종별 시장 동향 및 전망</li>
                <li>관심 종목의 실시간 주가 정보</li>
                <li>투자 관련 질문에 대한 전문적인 답변</li>
              </ul>
            </ChatIntro>

            {/* 오른쪽 챗 화면 */}
            <ChatCard>
              <ChatHeader>AIssue 투자 비서 • 실시간 접속 중</ChatHeader>
              <ChatMessages>
                <ChatBubble sender="ai">
                  안녕하세요! AIssue 투자 비서입니다. 어떤 주식 정보가 필요하신가요?
                </ChatBubble>
                <ChatBubble sender="user">
                  삼성전자 최근 뉴스 알려줘
                </ChatBubble>
                <ChatBubble sender="ai">
                  삼성전자의 최근 주요 뉴스입니다:<br/>
                  1. 차세대 HBM3E 메모리 양산 시작 (2시간 전)<br/>
                  2. 갤럭시 S24 판매량 20% 증가 (5시간 전)…
                </ChatBubble>
              </ChatMessages>
            </ChatCard>
          </ChatContainer>
        </ChatSection>
<<<<<<< Updated upstream
        <StartButton onClick={handleStartClick}>
          시작하기
        </StartButton>
=======

         <div style={{
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  padding: '4rem 2rem',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* 왼쪽 차트 라인 */}
  <svg style={{
    position: 'absolute',
    top: '20%',
    left: '5%',
    width: '200px',
    height: '150px',
    opacity: 0.08,
    zIndex: 0
  }} viewBox="0 0 200 150">
    <path d="M0,120 Q30,100 60,80 T120,60 T180,40" 
          fill="none" stroke="#3b82f6" strokeWidth="2"/>
    <circle cx="60" cy="80" r="3" fill="#3b82f6"/>
    <circle cx="120" cy="60" r="3" fill="#3b82f6"/>
    <circle cx="180" cy="40" r="3" fill="#3b82f6"/>
  </svg>

  {/* 오른쪽 캔들스틱 차트 */}
  <svg style={{
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: '250px',
    height: '180px',
    opacity: 0.12,
    zIndex: 0
  }} viewBox="0 0 250 180">
    {/* 상승 캔들 */}
    <rect x="20" y="100" width="12" height="50" fill="#34d399"/>
    <line x1="26" y1="80" x2="26" y2="170" stroke="#34d399" strokeWidth="2"/>
    
    <rect x="50" y="90" width="12" height="60" fill="#34d399"/>
    <line x1="56" y1="70" x2="56" y2="170" stroke="#34d399" strokeWidth="2"/>
    
    {/* 하락 캔들 */}
    <rect x="80" y="80" width="12" height="70" fill="#f87171"/>
    <line x1="86" y1="60" x2="86" y2="170" stroke="#f87171" strokeWidth="2"/>
    
    <rect x="110" y="70" width="12" height="80" fill="#f87171"/>
    <line x1="116" y1="50" x2="116" y2="170" stroke="#f87171" strokeWidth="2"/>
    
    {/* 상승 캔들 */}
    <rect x="140" y="60" width="12" height="90" fill="#34d399"/>
    <line x1="146" y1="40" x2="146" y2="170" stroke="#34d399" strokeWidth="2"/>
    
    <rect x="170" y="50" width="12" height="100" fill="#34d399"/>
    <line x1="176" y1="30" x2="176" y2="170" stroke="#34d399" strokeWidth="2"/>
    
    <rect x="200" y="45" width="12" height="105" fill="#34d399"/>
    <line x1="206" y1="25" x2="206" y2="170" stroke="#34d399" strokeWidth="2"/>
  </svg>

  <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
    <h2 style={{
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#1f2937'
    }}>
      지금 바로 시작하세요
    </h2>
    <p style={{
      fontSize: '1.2rem',
      lineHeight: '1.6',
      marginBottom: '2.5rem',
      color: '#555'
    }}>
      AI가 분석한 실시간 뉴스와 투자 기회를 놓치지 마세요.<br/>
      전문가 수준의 투자 인사이트를 무료로 경험해보실 수 있습니다.
    </p>
    <button
      onClick={handleStartClick}
      style={{
        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        color: 'white',
        border: 'none',
        padding: '1.2rem 3rem',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
        transition: 'all 0.3s ease',
        marginBottom: '1rem'
      }}
      onMouseOver={(e) => {
        const target = e.target as HTMLElement;
        target.style.transform = 'translateY(-3px)';
        target.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.4)';
      }}
      onMouseOut={(e) => {
        const target = e.target as HTMLElement;
        target.style.transform = 'translateY(0)';
        target.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
      }}
    >
      투자 시작하기
    </button>
  </div>
</div>
>>>>>>> Stashed changes
      <Footer />
    </PageWrapper>
  );
};

export default IntroPage;