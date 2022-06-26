import { Skeleton } from "antd";
import { ForkIcon, RepositoriesIcon, StarsIcon } from "../../../../../../components";
import { IPinnedRepo, LanguageColor, PinnedRepos, SelfInfos } from "../../../../../../data/global";
import {
  LangCircle,
  PinnedContainer,
  PinnedContent,
  PinnedItemContainer,
  PinnedMain,
  PinnedTitle,
  PublicBadge
} from "./styles";

interface IPinnedProps extends IPinnedRepo { }

const PinnedItem = ({
  name,
  description,
  language,
  stars,
  forks
}: IPinnedProps) => (
  <PinnedItemContainer>
    <PinnedMain>
      <PinnedTitle>
        <RepositoriesIcon />
        <a href={`https://github.com/${SelfInfos.id}/${name}`}>{name}</a>
        <PublicBadge>Public</PublicBadge>
      </PinnedTitle>
      <PinnedContent>{description}</PinnedContent>
      <PinnedContent>
        <div>
          <LangCircle style={{ backgroundColor: LanguageColor[language] }} />
          <span>{language}</span>
        </div>
        {stars > 0 && (
          <a href={`https://github.com/${SelfInfos.id}/${name}/stargazers`}>
            <StarsIcon />
            <span>{stars}</span>
          </a>
        )}
        {forks > 0 && (
          <a href={`https://github.com/${SelfInfos.id}/${name}/network/members`}>
            <ForkIcon />
            <span>{forks}</span>
          </a>
        )}
      </PinnedContent>
    </PinnedMain>
  </PinnedItemContainer>
);

const Pinned = () => (
  <PinnedContainer>
    <span>Pinned</span>
    <div>{PinnedRepos.map((item) => <PinnedItem {...item} />)}</div>
  </PinnedContainer>
);

export const Overview = () => (
  <>
    <Pinned />
    <Skeleton />
  </>
);
