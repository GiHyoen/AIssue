import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 40px 20px;
  background-color: #0f172a; // 짙은 남색
  color: #d1d5db; // 연회색 텍스트
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.6;
  border-top: 1px solid #1e293b;
  z-index: 10;
`;

const LinkGroup = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #d1d5db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      © 2025 AIssue. All rights reserved.
      <LinkGroup>
        <a href="/terms">이용약관</a>
        <a href="/privacy">개인정보처리방침</a>
        <a href="/cookies">쿠키 정책</a>
      </LinkGroup>
    </FooterWrapper>
  );
};

export default Footer;