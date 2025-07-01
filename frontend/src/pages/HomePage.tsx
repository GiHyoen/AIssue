<<<<<<< HEAD
import React, { useState } from 'react';

// 타입 정의
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

interface StockData {
  gainers: StockItem[];
  losers: StockItem[];
  volume: StockItem[];
}

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('gainers');

  // 스타일 객체들
  const styles = {
    container: {
      backgroundColor: 'white',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    nav: {
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: 'white',
      position: 'sticky' as const,
      top: 0,
      zIndex: 50,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    navContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      backgroundColor: '#3b82f6',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#111827'
    },
    navMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    },
    navLink: {
      color: '#6b7280',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'color 0.2s'
    },
    startButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '8px 24px',
      borderRadius: '8px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    mainContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '32px 24px'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '32px'
    },
    leftSection: {
      display: 'flex',
      flexDirection: 'column' as const
    },
    header: {
      marginBottom: '24px'
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '8px'
    },
    subtitle: {
      color: '#6b7280'
    },
    tabContainer: {
      display: 'flex',
      gap: '8px',
      marginBottom: '24px'
    },
    tabButton: {
      padding: '12px 24px',
      borderRadius: '12px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    activeTab: {
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    inactiveTab: {
      backgroundColor: '#f8fafc',
      color: '#64748b'
    },
    tableContainer: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
      overflow: 'hidden'
    },
    tableHeader: {
      backgroundColor: '#f9fafb',
      padding: '16px 24px',
      borderBottom: '1px solid #e5e7eb'
    },
    tableHeaderRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1.5fr 1fr 1fr',
      gap: '16px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151'
    },
    stockRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1.5fr 1fr 1fr',
      gap: '16px',
      padding: '16px 24px',
      borderBottom: '1px solid #f3f4f6',
      transition: 'background-color 0.2s',
      cursor: 'pointer'
    },
    rightSection: {
      position: 'sticky' as const,
      top: '96px',
      height: 'fit-content'
    },
    newsContainer: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '16px'
    },
    newsCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
      transition: 'all 0.2s',
      cursor: 'pointer'
    },
    newsCardContent: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    },
    newsDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      marginTop: '8px',
      flexShrink: 0
    },
    newsTitle: {
      fontWeight: '600',
      color: '#111827',
      lineHeight: '1.4',
      marginBottom: '8px'
    },
    newsInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '14px',
      color: '#6b7280'
    },
    moreButton: {
      width: '100%',
      marginTop: '24px',
      padding: '16px',
      backgroundColor: '#f9fafb',
      color: '#374151',
      borderRadius: '16px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  // Stock data for different categories
  const stockData: StockData = {
    gainers: [
      { rank: 1, name: '다날', price: '6,400원', change: '+13.0%', volume: '2.1M', color: '#ef4444' },
      { rank: 2, name: '지에프씨생명과학', price: '34,950원', change: '+7.3%', volume: '1.8M', color: '#ef4444' },
      { rank: 3, name: '카카오페이', price: '81,200원', change: '+5.8%', volume: '1.5M', color: '#ef4444' },
      { rank: 4, name: '카카오', price: '61,900원', change: '+3.1%', volume: '1.2M', color: '#ef4444' },
      { rank: 5, name: '삼성전자', price: '60,800원', change: '+1.6%', volume: '3.2M', color: '#ef4444' },
      { rank: 6, name: 'NAVER', price: '264,500원', change: '+0.9%', volume: '2.8M', color: '#ef4444' },
      { rank: 7, name: 'LG에너지솔루션', price: '412,000원', change: '+0.7%', volume: '1.9M', color: '#ef4444' },
      { rank: 8, name: '현대차', price: '198,500원', change: '+0.5%', volume: '2.3M', color: '#ef4444' },
      { rank: 9, name: 'SK하이닉스', price: '289,000원', change: '+0.3%', volume: '2.5M', color: '#ef4444' },
      { rank: 10, name: 'LG화학', price: '425,000원', change: '+0.1%', volume: '1.7M', color: '#ef4444' }
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

  const handleTabClick = (tab: TabType): void => {
    setActiveTab(tab);
  };

  const getTabButtonStyle = (tab: TabType) => {
    return {
      ...styles.tabButton,
      ...(activeTab === tab ? styles.activeTab : styles.inactiveTab)
    };
  };

  const currentStockData: StockItem[] = stockData[activeTab];

=======
const HomePage = () => {
>>>>>>> main
  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.navContent}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>AI</span>
              </div>
              <span style={styles.logoText}>AIssue</span>
            </div>
            <div style={styles.navMenu}>
              <a href="#" style={styles.navLink}>투자</a>
              <a href="#" style={styles.navLink}>뉴스</a>
              <a href="#" style={styles.navLink}>차트</a>
              <button 
                style={styles.startButton}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
              >
                시작하기
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContainer}>
        <div style={styles.gridContainer}>
          {/* Left Section - Stock Rankings */}
          <div style={styles.leftSection}>
            {/* Header */}
            <div style={styles.header}>
              <h1 style={styles.title}>실시간 주식 현황</h1>
              <p style={styles.subtitle}></p>
            </div>

            {/* Tab Navigation */}
            <div style={styles.tabContainer}>
              <button 
                onClick={() => handleTabClick('gainers')}
                style={getTabButtonStyle('gainers')}
                onMouseOver={(e) => {
                  if (activeTab !== 'gainers') {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== 'gainers') {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }
                }}
              >
                📈 상승률 TOP
              </button>
              <button 
                onClick={() => handleTabClick('losers')}
                style={getTabButtonStyle('losers')}
                onMouseOver={(e) => {
                  if (activeTab !== 'losers') {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== 'losers') {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }
                }}
              >
                📉 하락률 TOP
              </button>
              <button 
                onClick={() => handleTabClick('volume')}
                style={getTabButtonStyle('volume')}
                onMouseOver={(e) => {
                  if (activeTab !== 'volume') {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== 'volume') {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }
                }}
              >
                💰 거래량 TOP
              </button>
            </div>

            {/* Stock Table */}
            <div style={styles.tableContainer}>
              {/* Table Header */}
              <div style={styles.tableHeader}>
                <div style={styles.tableHeaderRow}>
                  <div>순위</div>
                  <div>종목명</div>
                  <div>현재가</div>
                  <div>등락률</div>
                  <div>거래량</div>
                </div>
              </div>

              {/* Table Body */}
              <div>
                {currentStockData.map((stock: StockItem, index: number) => (
                  <div 
                    key={stock.rank}
                    style={{
                      ...styles.stockRow,
                      borderBottom: index < currentStockData.length - 1 ? '1px solid #f3f4f6' : 'none'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <div style={{ fontWeight: 'bold', color: '#3b82f6' }}>{stock.rank}</div>
                    <div style={{ fontWeight: '600', color: '#111827' }}>{stock.name}</div>
                    <div style={{ fontWeight: '600', color: '#111827' }}>{stock.price}</div>
                    <div style={{ fontWeight: 'bold', color: stock.color }}>{stock.change}</div>
                    <div style={{ color: '#6b7280' }}>{stock.volume}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - News Cards */}
          <div style={styles.rightSection}>
            {/* Header */}
            <div style={styles.header}>
              <h2 style={{ ...styles.title, fontSize: '24px' }}>경제 뉴스</h2>
              <p style={styles.subtitle}></p>
            </div>

            {/* News Cards */}
            <div style={styles.newsContainer}>
              {newsData.map((news: NewsItem) => (
                <div 
                  key={news.id}
                  style={styles.newsCard}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                  }}
                >
                  <div style={styles.newsCardContent}>
                    <div style={{ ...styles.newsDot, backgroundColor: news.color }}></div>
                    <div>
                      <h3 style={styles.newsTitle}>
                        {news.title}
                      </h3>
                      <div style={styles.newsInfo}>
                        <span>{news.source}</span>
                        <span>•</span>
                        <span>{news.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More News Button */}
            <button 
              style={styles.moreButton}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
            >
              더 많은 뉴스 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;