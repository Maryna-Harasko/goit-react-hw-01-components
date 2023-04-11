import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({dataFriends}) =>{
  return (
    <ul className="friend-list">
      {dataFriends.map(item => (<FriendListItem key ={item.id} {...item}/>))}
    </ul>
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

