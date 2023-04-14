import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({dataFriends}) =>{
  return (
    <List>
      {dataFriends.map(item => (<FriendListItem key ={item.id} {...item}/>))}
    </List>
  )
}

FriendList.prototype ={
  dataFriends: PropTypes.arrayOf(
    PropTypes.shape([
      {
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      },
    ]) 
  )
}

