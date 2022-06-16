import { useCallback } from "react";
import { topBannerLinks } from "../../data/global";
import { Logo } from "../../components";
import { Container, CustomInput, LinksContainer, TopHeaderContainer } from "./styles";

export const Home = () => {
  const onSearch = useCallback(() => {
    alert("Search!");
  }, []);

  return (
    <Container>
      <TopHeaderContainer>
        <Logo link="https://github.com" />
        <CustomInput
          placeholder="Search or jump to..."
          onPressEnter={onSearch}
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
        <span>Right Side</span>
      </TopHeaderContainer>
    </Container>
  );
};
