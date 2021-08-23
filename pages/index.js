import Layout from "../components/Layout";
import BGimage from "../components/BGimage";
import bgImage from "../public/static/shoal-page-home-banner_desktop.jpg";

import { TextColor } from "../styles/uielements";

const Index = () => (
  <Layout>
    <BGimage url={bgImage} alt="Free Shoal Image">
      <TextColor>
        <h1>Welcome to Free Shoal</h1>
      </TextColor>
      <h6>A place for free thinking and free speech</h6>
    </BGimage>
  </Layout>
);

export default Index;
