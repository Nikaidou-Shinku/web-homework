import { useCallback, useState } from "react";
import { message } from "antd";
import { Header, Panel, Main } from "./components";
import { Container } from "./styles";

export const Home = () => {
  const onSearch = useCallback((content: string) => {
    message.info(`Search: ${content}`);
  }, []);
  const [tabKey, setTabKey] = useState("Overview");

  return (
    <Container>
      <Header onSearch={onSearch} />
      <Panel onChange={(key) => { setTabKey(key); }} />
      <Main tabKey={tabKey} />
    </Container>
  );
};
