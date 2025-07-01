import React, { useState } from 'react';
import {
  PageWrapper,
  MainContainer,
  Grid,
  LeftSection,
  SectionHeader,
  TabContainer,
  TabButton,
  StockTable,
  TableHead,
  TableBody,
  RightSection,
  NewsCard,
  NewsDot,
  NewsContent,
  MoreNewsButton,
} from '../styles/HomeStyle';

interface StockItem {
  rank: number;
  name: string;
  price: string;
  change: string;
  volume: string;
  color: string;
}

interface NewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
  color: string;
}

type TabType = 'gainers' | 'losers' | 'volume';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('gainers');

  const stockData: Record<TabType, StockItem[]> = {
    gainers: [
      { rank: 1, name: '두산에너빌리티', price: '68,100원', change: '-3.2%', volume: '1.5M', color: '#3b82f6' },
      { rank: 2, name: 'POSCO홀딩스', price: '385,000원', change: '-2.8%', volume: '1.2M', color: '#3b82f6' },
      { rank: 3, name: '기아', price: '89,400원', change: '-2.1%', volume: '2.1M', color: '#3b82f6' },
      { rank: 4, name: '셀트리온', price: '189,500원', change: '-1.9%', volume: '1.8M', color: '#3b82f6' },
      { rank: 5, name: '한국전력', price: '21,850원', change: '-1.4%', volume: '3.5M', color: '#3b82f6' },
      { rank: 6, name: '삼성바이오로직스', price: '789,000원', change: '-1.2%', volume: '0.8M', color: '#3b82f6' },
      { rank: 7, name: '카카오뱅크', price: '26,300원', change: '-0.9%', volume: '2.2M', color: '#3b82f6' },
      { rank: 8, name: '네이버파이낸셜', price: '45,200원', change: '-0.7%', volume: '1.6M', color: '#3b82f6' },
      { rank: 9, name: '크래프톤', price: '198,000원', change: '-0.5%', volume: '1.1M', color: '#3b82f6' },
      { rank: 10, name: '엔씨소프트', price: '245,500원', change: '-0.3%', volume: '0.9M', color: '#3b82f6' }
    ],
    losers: [
      { rank: 1, name: '두산에너빌리티', price: '68,100원', change: '-3.2%', volume: '1.5M', color: '#3b82f6' },
      { rank: 2, name: 'POSCO홀딩스', price: '385,000원', change: '-2.8%', volume: '1.2M', color: '#3b82f6' },
      { rank: 3, name: '기아', price: '89,400원', change: '-2.1%', volume: '2.1M', color: '#3b82f6' },
      { rank: 4, name: '셀트리온', price: '189,500원', change: '-1.9%', volume: '1.8M', color: '#3b82f6' },
      { rank: 5, name: '한국전력', price: '21,850원', change: '-1.4%', volume: '3.5M', color: '#3b82f6' },
      { rank: 6, name: '삼성바이오로직스', price: '789,000원', change: '-1.2%', volume: '0.8M', color: '#3b82f6' },
      { rank: 7, name: '카카오뱅크', price: '26,300원', change: '-0.9%', volume: '2.2M', color: '#3b82f6' },
      { rank: 8, name: '네이버파이낸셜', price: '45,200원', change: '-0.7%', volume: '1.6M', color: '#3b82f6' },
      { rank: 9, name: '크래프톤', price: '198,000원', change: '-0.5%', volume: '1.1M', color: '#3b82f6' },
      { rank: 10, name: '엔씨소프트', price: '245,500원', change: '-0.3%', volume: '0.9M', color: '#3b82f6' }
    ],
    volume: [
      { rank: 1, name: '삼성전자', price: '60,800원', change: '+1.6%', volume: '8.5M', color: '#ef4444' },
      { rank: 2, name: 'SK하이닉스', price: '289,000원', change: '+0.3%', volume: '6.2M', color: '#ef4444' },
      { rank: 3, name: '한국전력', price: '21,850원', change: '-1.4%', volume: '5.8M', color: '#3b82f6' },
      { rank: 4, name: 'NAVER', price: '264,500원', change: '+0.9%', volume: '4.1M', color: '#ef4444' },
      { rank: 5, name: '현대차', price: '198,500원', change: '+0.5%', volume: '3.7M', color: '#ef4444' },
      { rank: 6, name: 'LG에너지솔루션', price: '412,000원', change: '+0.7%', volume: '3.2M', color: '#ef4444' },
      { rank: 7, name: '카카오', price: '61,900원', change: '+3.1%', volume: '2.9M', color: '#ef4444' },
      { rank: 8, name: '카카오뱅크', price: '26,300원', change: '-0.9%', volume: '2.6M', color: '#3b82f6' },
      { rank: 9, name: '다날', price: '6,400원', change: '+13.0%', volume: '2.4M', color: '#ef4444' },
      { rank: 10, name: '기아', price: '89,400원', change: '-2.1%', volume: '2.1M', color: '#3b82f6' }
    ]
  };

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: '다날, 블록체인 결제 사업 확대 발표에 급등세 지속',
      source: '매일경제',
      time: '10:28',
      color: '#ef4444'
    },
    {
      id: 2,
      title: '카카오페이, 해외 진출 본격화… 동남아 핀테크 시장 공략',
      source: '한국경제',
      time: '10:32',
      color: '#3b82f6'
    },
    {
      id: 3,
      title: '삼성전자, 차세대 반도체 공정 로드맵 공개… 기술 경쟁력 강화',
      source: '이데일리',
      time: '10:26',
      color: '#10b981'
    },
    {
      id: 4,
      title: 'NAVER, AI 검색 고도화 추진… 차세대 검색 엔진 개발 박차',
      source: '조선비즈',
      time: '10:30',
      color: '#8b5cf6'
    },
    {
      id: 5,
      title: '현대차, 전기차 배터리 기술 혁신으로 주가 상승 모멘텀 확보',
      source: '머니투데이',
      time: '10:25',
      color: '#f59e0b'
    },
    {
      id: 6,
      title: 'SK하이닉스, HBM 메모리 수요 급증으로 실적 개선 기대감 확산',
      source: '서울경제',
      time: '10:22',
      color: '#6366f1'
    }
  ];

  const currentStock = stockData[activeTab];

  return (
    <PageWrapper>
      <MainContainer>
        <Grid>
          {/* ── 왼쪽: 실시간 주식 현황 ── */}
          <LeftSection>
            <SectionHeader>
              <h1>실시간 주식 현황</h1>
              <p>AI가 분석한 주요 종목들을 확인해보세요</p>
            </SectionHeader>

            <TabContainer>
              <TabButton active={activeTab === 'gainers'} onClick={() => setActiveTab('gainers')}>
                📈 상승률 TOP
              </TabButton>
              <TabButton active={activeTab === 'losers'} onClick={() => setActiveTab('losers')}>
                📉 하락률 TOP
              </TabButton>
              <TabButton active={activeTab === 'volume'} onClick={() => setActiveTab('volume')}>
                💰 거래량 TOP
              </TabButton>
            </TabContainer>

            <StockTable>
              <TableHead>
                <tr>
                  <th>순위</th>
                  <th>종목명</th>
                  <th>현재가</th>
                  <th>등락률</th>
                  <th>거래량</th>
                </tr>
              </TableHead>
              <TableBody>
                {currentStock.map((stock) => (
                  <tr key={stock.rank}>
                    <td style={{ color: '#3b82f6', fontWeight: 700 }}>{stock.rank}</td>
                    <td>{stock.name}</td>
                    <td>{stock.price}</td>
                    <td style={{ color: stock.color, fontWeight: 600 }}>{stock.change}</td>
                    <td>{stock.volume}</td>
                  </tr>
                ))}
              </TableBody>
            </StockTable>
          </LeftSection>

          {/* ── 오른쪽: 경제 뉴스 ── */}
          <RightSection>
            <SectionHeader>
              <h1>경제 뉴스</h1>
              <p>AI가 선별한 주요 뉴스</p>
            </SectionHeader>

            {newsData.map((n) => (
              <NewsCard key={n.id}>
                <NewsDot color={n.color} />
                <NewsContent>
                  <div className="title">{n.title}</div>
                  <div className="info">
                    <span>{n.source}</span>
                    <span>∙</span>
                    <span>{n.time}</span>
                  </div>
                </NewsContent>
              </NewsCard>
            ))}
            <MoreNewsButton>더 많은 뉴스 보기</MoreNewsButton>
          </RightSection>
        </Grid>
      </MainContainer>
    </PageWrapper>
  );
};

export default HomePage;