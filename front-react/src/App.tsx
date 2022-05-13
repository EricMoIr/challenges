import { Layout } from "antd";
import TodosList from "./TodosList";

function App() {
  return (
    <Layout>
      <Layout.Header>Todos challenge with ReactTS</Layout.Header>
      <Layout.Content>
        <TodosList />
      </Layout.Content>
    </Layout>
  );
}

export default App;
