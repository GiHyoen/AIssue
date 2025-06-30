import styled, { keyframes } from 'styled-components';

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f4f7fc, #ffffff);
  color: #222;
  overflow-x: hidden; // 수평 스크롤 방지
  position: relative;
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
  margin-bottom: 10px;
`;

export const FeatureText = styled.p`
  font-size: 0.95rem;
  color: #555;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  opacity: 0.5;
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
  background: linear-gradient(to right, #2563eb, #06b6d4);
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 500;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-top: 40px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  }
`;