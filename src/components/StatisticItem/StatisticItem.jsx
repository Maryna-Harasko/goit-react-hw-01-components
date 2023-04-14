import { Item, Label, Percentage } from "./StatisticItem.styled"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(3, 0)}`;
}

export const StatisticItem = ({label, percentage}) => {
  return (
    <Item style={{ backgroundColor: getRandomHexColor() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
  </Item>
  )
}

