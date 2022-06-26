import { Divider, Skeleton } from "antd";
import { SelfInfos } from "../../../../data/global";
import { Overview, Repositories, Projects, Packages, Stars } from "./components";
import { ContentContainer, MainAvatar, MainContainer, NameTitle, SidebarContainer } from "./styles";

import avatarUrl from "../../../../../favicon.png";

export interface IMainProps {
  tabKey: string;
}

export const Main = ({
  tabKey
}: IMainProps) => {
  return (
    <MainContainer>
      <SidebarContainer>
        <MainAvatar src={avatarUrl} size={296} />
        <NameTitle level={1}>
          <div>{SelfInfos.name}</div>
          <div>{SelfInfos.id}</div>
        </NameTitle>
        <Skeleton />
        <Divider />
        <Skeleton />
      </SidebarContainer>
      <ContentContainer>
        {tabKey === "Overview" && <Overview />}
        {tabKey === "Repositories" && <Repositories />}
        {tabKey === "Projects" && <Projects />}
        {tabKey === "Packages" && <Packages />}
        {tabKey === "Stars" && <Stars />}
      </ContentContainer>
    </MainContainer>
  );
};
