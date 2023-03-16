import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import NotificationBadge, { Effect } from 'react-notification-badge';

import IconLogo from 'assets/icons/logo.png';
import IconMemo from 'assets/icons/memo.png';
import IconChallenge from 'assets/icons/challenge.png';
import IconInfo from 'assets/icons/info.png';
import IconMenu from 'assets/icons/menu.png';
import IconClose from 'assets/icons/close.png';

import './index.scss';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="app-header">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={IconLogo} alt="logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            key={'home'}
            as={NavLink}
            to={'/'}
            className={(({ isActive }: any) => (isActive ? 'active' : undefined)) as any}
            end
          >
            <div className="menu-item--icon">
              <img src={IconMemo} alt="icon" />
            </div>
            <span className="menu-item--label">{'自分の記録'}</span>
          </Nav.Link>
          <Nav.Link
            key={'record'}
            as={NavLink}
            to={'/record'}
            className={(({ isActive }: any) => (isActive ? 'active' : undefined)) as any}
            end
          >
            <div className="menu-item--icon">
              <img src={IconChallenge} alt="icon" />
            </div>
            <span className="menu-item--label">{'チャレンジ'}</span>
          </Nav.Link>
          <Nav.Link
            key={'notification'}
            as={NavLink}
            to={'#'}
            className={(({ isActive }: any) => (isActive ? 'active' : undefined)) as any}
            end
          >
            <div className="menu-item--icon">
              <img src={IconInfo} alt="icon" />
              <NotificationBadge
                count={1}
                effect={Effect.SCALE}
                className="custom-badge"
                containerStyle={{ position: 'absolute', top: 0 }}
                style={{ top: 0, right: -8, minWidth: 16, minHeight: 16, fontSize: '10px' }}
              />
            </div>
            <span className="menu-item--label">{'お知らせ'}</span>
          </Nav.Link>
        </Nav>
        <Dropdown align="end" className="app-menu-dropdown">
          <Dropdown.Toggle id="dropdown-basic">
            <img className="icon-close" src={IconMenu} alt="icon" />
            <img className="icon-open" src={IconClose} alt="icon" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to={'/'}>
              自分の記録
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">体重グラフ</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">目標</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">選択中のコース</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={NavLink} to={'/column'} end>
              コラム一覧
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">選択中のコース</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
