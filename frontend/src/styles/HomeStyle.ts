import styled, { css } from 'styled-components';

// 페이지 전체 래퍼
export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f4f7fc;
  color: #111827;
  padding: 60px 0;
  box-sizing: border-box;
`;

// 중앙 콘텐츠 컨테이너
export const MainContainer = styled.main`
  max-width: 1280px;
  margin: 50px auto;
  padding: 0 24px;
`;

// 좌우 그리드 레이아웃
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// 왼쪽 섹션 (주식 테이블)
export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// 헤더 타이틀
export const SectionHeader = styled.div`
  > h1 {
    font-size: 1.875rem; /* 30px */
    font-weight: 700;
    margin-bottom: 8px;
  }
  > p {
    color: #6b7280;
  }
`;

// 탭 버튼 컨테이너
export const TabContainer = styled.div`
  display: flex;
  gap: 8px;
`;

// 탭 버튼
export const TabButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  ${({ active }) =>
    active
      ? css`
          background: #3b82f6;
          color: #fff;
        `
      : css`
          background: #f8fafc;
          color: #64748b;
          &:hover {
            background: #e2e8f0;
          }
        `}
`;

// 테이블 스타일
export const StockTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border-radius: 16px;
  overflow: hidden;
`;

// 테이블 헤더
export const TableHead = styled.thead`
  background: #f9fafb;

  tr {
    height: 56px;
  }

  th {
    padding: 0 24px;
    text-align: left;
    color: #374151;
    font-weight: 600;
    font-size: 14px;
    border-bottom: 1px solid #e5e7eb;
  }
`;


// 테이블 바디
export const TableBody = styled.tbody`
  tr {
    &:not(:last-child) {
      border-bottom: 1px solid #f3f4f6;
    }
    td {
      padding: 16px 12px;
      color: #374151;
    }
    &:hover {
      background: #f8fafc;
    }
  }
`;

// 오른쪽 섹션 (뉴스 리스트)
export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  top: 80px;

  @media (max-width: 768px) {
    position: static;
  }
`;

// 뉴스 카드
export const NewsCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #fff;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }
`;

// 뉴스 도트
export const NewsDot = styled.span<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 6px;
  background-color: ${({ color }) => color};
  flex-shrink: 0;
`;

// 뉴스 콘텐츠
export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .title {
    font-weight: 600;
    color: #111827;
    line-height: 1.4;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

export const MoreNewsButton = styled.button`
  display: block;
  margin: 48px auto 0;
  padding: 16px 32px;
  background: #ffffff;
  color: #374151;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #f3f4f6;
    color: #111827;
  }
`;