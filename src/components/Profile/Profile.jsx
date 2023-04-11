import PropTypes from 'prop-types';

export const Profile = ({dataUser: {username, tag, location, avatar, stats}}) => {
  return (
    <div 
    style={{
      height: '240px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 24,
      color: '#010101'
    }}
    // className="profile"
    >
  <div className="description">
    <img
      src= {avatar}
      alt="User avatar"
      className="avatar"
      style={{
        width: '100px'
      }}
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
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