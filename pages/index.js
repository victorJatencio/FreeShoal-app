import Layout from "../components/Layout";
import BGimage from "../components/BGimage";
import bgImage from "../public/static/shoal-page-home-banner_desktop.jpg";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

export const MainHeader = styled.h1`
  color: #fff;
  font-size: 48px;
  margin: 0;
  line-height: 1.5;
`;

export const SubHeader = styled.p`
  color: #fff;
  font-size: 24px;
  margin-top: 0.5em;
  font-weight: normal;
`;

const Index = () => (
  <Layout>
    <BGimage url={bgImage} alt="Free Shoal Image">
      <MainHeader>Welcome to Free Shoal</MainHeader>
      <SubHeader>A place for free thinking and free speech</SubHeader>
      <Button variant="contained" color="primary">
        Go To App
      </Button>
    </BGimage>
  </Layout>
);

export default Index;
