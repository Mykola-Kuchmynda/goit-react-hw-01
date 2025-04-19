import css from "./Profile.module.css";

   const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={css.user} >
        <img src={image} alt="User avatar" />
        <p> {name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className="listItem">
          <span>Followers - </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views - </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes - </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </>
  );
};

export default Profile;