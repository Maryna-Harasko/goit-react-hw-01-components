import { Item, Name, Avatar, StatusOnline, StatusOffline } from "./FriendListItem.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <Item>
      {isOnline ? <StatusOnline /> : <StatusOffline />}
      <Avatar src={avatar} alt="User avatar" width="48"/>
      <Name>{name}</Name>
    </Item>
  )
}