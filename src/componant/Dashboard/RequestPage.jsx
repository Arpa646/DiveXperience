import React from "react";
import UserCard from "./UserCard";

const RequestPage = () => {
  const users = [
    { name: "Will Smith", location: "Azores, Portugal", image: "https://themes.stackbros.in/social_r/assets/03-UJBpqOsq.jpg" },
    { name: "Robert De Niro", location: "Azores, Portugal", image: "https://themes.stackbros.in/social_r/assets/03-UJBpqOsq.jpg" },
    { name: "Tom Cruise", location: "Azores, Portugal", image: "https://themes.stackbros.in/social_r/assets/03-UJBpqOsq.jpg" },
    { name: "Dwayne Johnson", location: "Azores, Portugal", image: "https://themes.stackbros.in/social_r/assets/03-UJBpqOsq.jpg" },
  
    { name: "Will Smith", location: "Azores, Portugal", image: "https://themes.stackbros.in/social_r/assets/03-UJBpqOsq.jpg" },
    { name: "Robert De Niro", location: "Azores, Portugal", image: "https://themes.stackbros.in/social_r/assets/03-UJBpqOsq.jpg" },
    { name: "Tom Cruise", location: "Azores, Portugal", image: "https://themes.stackbros.in/social_r/assets/03-UJBpqOsq.jpg" },
    { name: "Dwayne Johnson", location: "Azores, Portugal", image: "https://themes.stackbros.in/social_r/assets/03-UJBpqOsq.jpg" }
  


];

  return (
    <div style={{ padding: "20px" }}>
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} location={user.location} image={user.image} />
      ))}
    </div>
  );
};

export default RequestPage;
