import { Divider } from "antd";
import { footerList } from "../../../../data/global";
import { Logo } from "../../../../components";
import { FooterContainer, FooterLeft, FooterRight } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Divider />
      <div className="content">
        <FooterLeft>
          <Logo />
          <span>© 2022 GitHub, Inc.</span>
        </FooterLeft>
        <FooterRight>
          {
            footerList.map((item) => (
              <a
                key={item.name}
                href={item.link}
              >
                {item.name}
              </a>
            ))
          }
        </FooterRight>
      </div>
    </FooterContainer>
  );
};
