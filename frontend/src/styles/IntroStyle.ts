import styled, { keyframes } from 'styled-components';

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;

  color: #222;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 100px 20px 60px;
  text-align: center;
  position: relative;
  z-index: 10;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  background: linear-gradient(to right, #2563eb, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-top: 20px;
`;

export const FeatureGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 60px;
`;

export const FeatureCard = styled.div`
  flex: 1 1 280px;
  max-width: 320px;
  background: #fff;
  border: 1px solid #eee;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  color: #2563eb;
  margin-bottom: 8px;
`;

export const FeatureText = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
`;

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
`;

export const ChartBackground = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  opacity: 0.5;
  pointer-events: none;
`;

export const ChartLine = styled.path`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${dash} 10s linear forwards infinite;
`;

export const ChartPoint = styled.circle`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in forwards;
`;

export const CandleStick = styled.rect`
  animation: ${slideUp} 0.5s ease-out forwards;
  opacity: 0;
`;

export const CandleWick = styled.line`
  animation: ${slideUp} 0.5s ease-out forwards;
  opacity: 0;
`;

export const VolumeBar = styled.rect`
  animation: ${slideUp} 0.5s ease-out forwards;
  opacity: 0;
`;

export const PriceLabel = styled.text`
  font-size: 10px;
  fill: #555;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

export const DateLabel = styled.text`
  font-size: 8px;
  fill: #777;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

export const LiveIndicator = styled.circle`
  animation: ${blink} 2s infinite;
`;

export const StartButton = styled.button`
  width: 200px;
  height: 70px;
  background: linear-gradient(to right, #2563eb, #06b6d4);
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 800;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-top: 40px;
  display: block;
  margin: 4rem auto;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.7);
`;

// …기존 import, keyframes, 다른 styled 컴포넌트들 위에…

// 챗봇 섹션 전체 래퍼


export const ChatSection = styled.section`
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.7);
  padding: 80px 20px;
`;

export const ChatSectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 40px;
  text-align: center; 
`;


// 좌/우 컨테이너 그리드
export const ChatContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  align-items: center;
`;

// 왼쪽 텍스트 영역
export const ChatIntro = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
    color: #1f2937;
  }
  p {
    font-size: 1rem;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 24px;
    font-weight: 700;
  }
  ul {
    list-style: disc inside;
    color: #4b5563;
    margin-bottom: 32px;
    li {
      margin-bottom: 8px;
    }
  }
`;

// 오른쪽 챗 카드
export const ChatCard = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  overflow: hidden;
`;

// 챗 헤더
export const ChatHeader = styled.div`
  background: #2563eb;
  color: #fff;
  padding: 16px;
  font-weight: 600;
`;

// 메시지 리스트
export const ChatMessages = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 320px;
  overflow-y: auto;
`;

// 각 메시지 버블
export const ChatBubble = styled.div<{ sender: 'ai' | 'user' }>`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 16px;
  background: ${({ sender }) => sender === 'ai' ? '#e0f2fe' : '#f3f4f6'};
  color: #1f2937;
  align-self: ${({ sender }) => sender === 'ai' ? 'flex-start' : 'flex-end'};
  font-size: 0.95rem;
  line-height: 1.4;
`;

// …기존 import, keyframes 등…

// 뉴스 분석 섹션 전체 래퍼
export const NewsIntroSection = styled.section`
  background: rgba(255, 255, 255, 0.7);
  padding: 80px 20px;
  position: relative;
  z-index: 10;
`;

// 섹션 헤더
export const NewsIntroHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #1f2937;
`;

// 카드 그리드
export const NewsCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1280px;
  margin: 0 auto;
`;

// 개별 카드
export const NewsCardIntro = styled.div`
  background: #f9fafb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
`;

// 카드 본문
export const NewsCardBody = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// 카테고리 / 시간
export const NewsMeta = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

// 제목
export const NewsCardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
`;

// 요약
export const NewsCardText = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  flex: 1;
  margin-bottom: 16px;
`;

// 영향도 표시줄 래퍼
export const ImpactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// 긍정/부정 라벨
export const ImpactLabel = styled.span<{ positive: boolean }>`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ positive }) => (positive ? '#b91c1c' : '#1e40af')};
  background: ${({ positive }) => (positive ? 'rgba(249, 207, 207, 0.5)' : 'rgba(191, 219, 254, 0.5)')};
  padding: 2px 8px;
  border-radius: 8px;
`;

// 진행바 껍데기
export const ImpactBarBg = styled.div`
  flex: 1;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
`;

// 진행바 전경
export const ImpactBarFg = styled.div<{
  percent: number;
  positive: boolean;
}>`
  width: ${props => props.percent}%;
  height: 6px;
  border-radius: 3px;
  background-color: ${props =>
    props.positive ? '#F87171' /* 긍정 빨강 */ : '#2563EB' /* 부정 파랑 */};
  transition: width 0.5s ease;
`;