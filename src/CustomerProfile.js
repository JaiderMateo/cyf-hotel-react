import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  console.log("entra a customer profile");
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      //fetch(`https://cyf-react.glitch.me/delayed`)
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
        setUserProfile(data);
      })
      .catch(() => {
        alert("error al obtener la información ");
        setUserProfile(null);
      });
  }, []);
  return (
    <>
      {userProfile ? (
        <u>
          {Object.values(userProfile).map(i => (
            <li>{i}</li>
          ))}
        </u>
      ) : (
        <>
          <span>loading...</span>
        </>
      )}
    </>
  );
};

export default CustomerProfile;
