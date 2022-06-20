import { Divider, Skeleton } from "antd";
import { SelfInfos } from "../../../../data/global";
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
        {tabKey === "Overview" && (
          <>
            <h1>Overview</h1>
            <Skeleton />
            <Skeleton />
          </>
        )}
        {tabKey === "Repositories" && (
          <>
            <h1>Repositories</h1>
            <Skeleton />
            <Skeleton />
          </>
        )}
        {tabKey === "Projects" && (
          <>
            <h1>Projects</h1>
            <Skeleton />
            <Skeleton />
          </>
        )}
        {tabKey === "Packages" && (
          <>
            <h1>Packages</h1>
            <Skeleton />
            <Skeleton />
          </>
        )}
        {tabKey === "Stars" && (
          <>
            <h1>Stars</h1>
            <Skeleton />
            <Skeleton />
          </>
        )}
      </ContentContainer>
    </MainContainer>
  );
};
