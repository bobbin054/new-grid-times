import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <SubscribeButton>Subscribe</SubscribeButton>
          <SubscribeLink href="/">Already a subscriber?</SubscribeLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};
const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;
const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;
const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;
const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;
const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    align-items: center;
    justify-content: revert;
    grid-template-columns: 1fr auto 1fr;
  }
`;
const SubscribeWrapper = styled.div`
  display: none;
  justify-self: end;

  @media ${QUERIES.laptopAndUp} {
    align-self: end;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: end;
  }
`;
const SubscribeButton = styled(Button)`
  padding: 8px 24px;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-sans-serif);
  text-transform: uppercase;
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: 4px;
`;
const SubscribeLink = styled.a`
  display: block;
font-style: italic;
  font-size: 0.875rem;
  color: var(--color-gray-900);
  text-decoration: underline;
`;
export default Header;
