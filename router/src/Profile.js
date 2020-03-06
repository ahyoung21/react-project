import React from 'react';

const profileData = {
  kim: {
    name: '김연아',
    description: '피겨선수'
  },

  yoo: {
    name: '유oo',
    description: '퍼블리셔'
  }
};

const Profile = ({ match }) => {
  // 파라미터일때는 match 사용
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사람입니다.</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
