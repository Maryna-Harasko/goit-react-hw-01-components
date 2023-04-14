import PropTypes from 'prop-types';
import { Wrap, Image, UserName, List, Quantity } from './Profile.styled';

export const Profile = ({dataUser: {username, tag, location, avatar, stats}}) => {
  return (
    <Wrap>
      <div>
        <Image
          src= {avatar}
          alt="User avatar"
          className="avatar"
        />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <List>
        <li>
          <span className="label">Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <span className="label">Views</span>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <span className="label">Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </List>
    </Wrap>
  )
}

Profile.propTypes = {
  dataUser: PropTypes.shape({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
})
}