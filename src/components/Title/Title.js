import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Title.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  InputGroup,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const LanguageList = [
  "English",
  "German",
  "French",
  "Czech",
  "Spanish",
  "Portuguese",
];

function Title({ args, getSearchValue, getLangValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LanguageList[0]);

  const toggle = () => setIsOpen(!isOpen);

  function getLanguageCode(name) {
    switch (name) {
      case "English":
        return "en";
      case "German":
        return "de";
      case "French":
        return "fr";
      case "Czech":
        return "cs";
      case "Spanish":
        return "es";
      case "Portuguese":
        return "pt";
      default:
        return "en";
    }
  }
  useEffect(() => {
    console.log(selectedLang);
  }, [selectedLang]);

  const handleLangClick = (item) => {
    let langValue = getLanguageCode(item);
    getLangValue(langValue);
    setSelectedLang(item);
  };

  return (
    <div>
      <Navbar expand={"md"} {...args} className="bg-dark" dark={true}>
        <NavbarBrand className="mx-auto ms-0 md-0 fs-3 font-style" href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 70,
              width: 70,
            }}
          />{" "}
          Just Joking !!
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <InputGroup
            className="mb-1 mx-auto"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <Input
              placeholder="Type keywords"
              type="text"
              onChange={(e) => {
                getSearchValue(e.target.value);
              }}
            />
          </InputGroup>
          <Nav navbar className="ms-auto">
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="ps-2 dropdown-style" nav caret>
                {selectedLang}
              </DropdownToggle>
              <DropdownMenu end>
                {LanguageList.length > 0 &&
                  LanguageList.map((item) => (
                    <DropdownItem
                      key={item}
                      onClick={() => {
                        handleLangClick(item);
                      }}
                    >
                      {item}
                    </DropdownItem>
                  ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Title;
