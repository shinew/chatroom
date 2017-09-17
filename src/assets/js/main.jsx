import React from 'react';
import ReactDOM from 'react-dom';

const profileImage = (
  <div>
    <img src="profile.jpg" />
  </div>
)

const personalBlurb = (
  <div>
    <p>I'm Shine Wang, a third-year Computer Science student at the University of Waterloo. Having worked on distributed systems at Google, machine learning at Quora, and web optimizations at Facebook, I love learning cutting-edge technologies and solving impactful problems.</p>
    <p>In my spare time, I like to run, rock climb, travel, take photos of delicious food, mentor younger students, and read fiction and non-fiction alike.</p>
  </div>
)

const middle = (
  <div>
    {profileImage}
    {personalBlurb}
  </div>
)

ReactDOM.render(
  middle,
  document.getElementById('react')
);
