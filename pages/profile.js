import { UserProfile } from "@/components/user-profile";
import React from "react";
import { createStyles } from "@mantine/core";

export default function Profile() {
  const useStyles = createStyles(() => ({
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2rem",
    },
  }));
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <UserProfile
        avatar="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
        geo="India"
        pref="Indian"
        diet="Keto"
      />
    </div>
  );
}
