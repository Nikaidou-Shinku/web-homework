import { SelfInfos } from "../../../../data/global";
import { ContentContainer, MainAvatar, MainContainer, NameTitle, SidebarContainer } from "./styles";

export interface IMainProps {
  tabKey: string;
}

export const Main = ({
  tabKey
}: IMainProps) => {
  return (
    <MainContainer>
      <SidebarContainer>
        <MainAvatar src="/favicon.png" size={296} />
        <NameTitle level={1}>
          <div>{SelfInfos.name}</div>
          <div>{SelfInfos.id}</div>
        </NameTitle>
      </SidebarContainer>
      <ContentContainer>
        {tabKey}
      </ContentContainer>
    </MainContainer>
  );
};
