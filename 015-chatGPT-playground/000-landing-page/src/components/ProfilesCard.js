import React from "react";
import { Grid, Image, Card } from 'semantic-ui-react';

const ProfilesCard = ({ name, jobTitle, image }) => {
return (
<Grid.Column>
<Card>
<Image src={image} alt="avatar" />
<div className="text-box">
<h2>{name}</h2>
<p>{jobTitle}</p>
</div>
</Card>

</Grid.Column>

);
};

export default ProfilesCard;