import { Wrapper } from "../layout";
import HomeSixMain from '../components/homes/home-6';
import SEO from "../components/seo";

export default function index() {
  
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <HomeSixMain />
    </Wrapper>
  )
}
