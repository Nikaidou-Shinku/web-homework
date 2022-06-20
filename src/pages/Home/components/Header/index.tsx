import { useMemo, useState } from "react";
import { Avatar, Dropdown, Menu, Tag, Tooltip } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { topBannerLinks, headerMoreList, SelfInfos, headerSelfList } from "../../../../data/global";
import { Logo, MessageIcon, PlusIcon } from "../../../../components";
import { CustomInput, HeaderContainer, LinksContainer, RightSideContainer } from "./styles";

export interface IHeaderProps {
  onSearch: (content: string) => void;
}

export const Header = ({
  onSearch
}: IHeaderProps) => {
  const [content, setContent] = useState("");
  const moreMenu = useMemo(() => (
    <Menu
      items={headerMoreList.map((item) => {
        return {
          key: item.name,
          label: (
            <a href={item.link}>
              {item.name}
            </a>
          )
        };
      })}
    />
  ), []);
  const selfMenu = useMemo(() => {
    const list: ItemType[] = [
      {
        key: "1",
        label: (
          <a href="https://github.com/Nikaidou-Shinku">
            <div>Signed in as</div>
            <div style={{ fontWeight: 600 }}>{SelfInfos.id}</div>
          </a>
        )
      },
      {
        type: "divider"
      },
      {
        key: "2",
        label: (
          <a href="#">
            <Tag
              style={{
                width: "100%",
                padding: "5px",
                borderRadius: "6px"
              }}
            >
              👋 Cheer~
            </Tag>
          </a>
        )
      }
    ];
    headerSelfList.forEach((group) => {
      list.push({ type: "divider" });
      group.forEach((item) => {
        list.push({
          key: item.name,
          label: (
            <a href={item.link}>
              {item.name}
            </a>
          )
        });
      });
    });
    return <Menu items={list} />;
  }, []);

  return (
    <HeaderContainer>
      <Logo link="https://github.com" />
      <CustomInput
        placeholder="Search or jump to..."
        onChange={(e) => { setContent(e.target.value); }}
        onPressEnter={() => { onSearch(content); }}
        style={{ marginLeft: "16px" }}
      />
      <LinksContainer>
        {
          topBannerLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
            >
              {item.name}
            </a>
          ))
        }
      </LinksContainer>
      <RightSideContainer>
        <Tooltip
          placement="bottomRight"
          title="You have no unread notifications"
        >
          <a href="https://github.com/notifications">
            <MessageIcon />
          </a>
        </Tooltip>
        <Dropdown
          overlay={moreMenu}
          trigger={[ "click" ]}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <a className="with-drop" href="#">
            <PlusIcon />
            <span className="down-arrow" />
          </a>
        </Dropdown>
        <Dropdown
          overlay={selfMenu}
          trigger={[ "click" ]}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <a className="with-drop" href="#">
            <Avatar src="/favicon.png" size={20} />
            <span className="down-arrow" />
          </a>
        </Dropdown>
      </RightSideContainer>
    </HeaderContainer>
  );
};
