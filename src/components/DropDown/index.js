import { useState } from "react";
import { FONT_DEFAULT_STYLE } from "../../utils/variables";
import { Container, DropDownContainer, IconContainer } from "./style";

export function DropDown({icon, iconName, iconSize, iconColor, showArrowIcon, value, setValue, items, setItems, placeholder = "Selecione"}) {
  const Icon = icon || null;

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <IconContainer>
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      </IconContainer>
      <DropDownContainer
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        showArrowIcon={showArrowIcon}
        closeOnBackPressed={true}
        placeholderStyle={{
          color: "white",
          opacity: 0.75,
          fontFamily: FONT_DEFAULT_STYLE,
          fontSize: 14,
        }}
        dropDownContainerStyle={{
          color: "white",
          width: '80%',
          borderWidth: 0,
        }}
        theme="DARK"
      />
    </Container>
  )
}