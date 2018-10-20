import { Provider } from "react-redux";
import configureStore from "../store";

import Layout from "../components/Layout";
import OffersListContainer from "../containers/OffersListContainer";

const Index = props => (
  <Provider store={configureStore()}>
    <Layout>
      <OffersListContainer />
    </Layout>
  </Provider>
);

export default Index;
