import { Badge, Tabs } from "antd";
import { panelContents } from "../../../../data/global";
import { PanelContainer, TabPaneBadge, TabPaneContainer } from "./styles";

export interface IPanelProps {
  onChange: (key: string) => void;
}

export const Panel = ({
  onChange
}: IPanelProps) => {
  return (
    <PanelContainer>
      <Tabs
        onChange={onChange}
        centered
      >
        {
          panelContents.map((item) => (
            <Tabs.TabPane
              key={item.name}
              tab={(
                <TabPaneContainer>
                  {item.icon}
                  {item.name}
                  {item.count > 0 && (
                    <TabPaneBadge
                      count={item.count}
                      overflowCount={999}
                    />
                  )}
                </TabPaneContainer>
              )}
            />
          ))
        }
      </Tabs>
    </PanelContainer>
  );
};
