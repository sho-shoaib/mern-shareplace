import { Box, Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../utils/context";
import { red } from "@mui/material/colors";

const Userspage = () => {
  const navigate = useNavigate();
  const { users } = useGlobalContext();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 345px)",
        justifyContent: "center",
        gridGap: 30,
        p: 8,
      }}
    >
      {users.map((user) => {
        let newDes = "";
        if (user.description) {
          if (user.description.length > 125) {
            newDes = `${user.description.slice(0, 125)}...`;
          } else {
            newDes = user.description;
          }
        }

        return (
          <Card
            key={user._id}
            sx={{ maxWidth: 345 }}
            elevation={3}
            sx={{
              transition: "all 0.4s",
              "&:hover": {
                boxShadow:
                  "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",
                transform: "translateY(-2px)",
              },
              "&:active": {
                boxShadow:
                  "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                transform: "translateY(0px)",
              },
            }}
          >
            <CardActionArea
              disableRipple
              onClick={() => navigate(`/users/${user._id}`)}
            >
              <CardMedia height='140'>
                {!user.image && (
                  <Box
                    sx={{
                      bgcolor: red[500],
                      textTransform: "uppercase",
                      height: "140px",
                      width: "100%",
                      display: "grid",
                      placeItems: "center",
                    }}
                    aria-label='recipe'
                  >
                    <Typography sx={{ fontSize: 50, color: "white" }}>
                      {user.name.slice(0, 1)}
                    </Typography>
                  </Box>
                )}
                {user.image && (
                  <Box
                    component='img'
                    src={user.image}
                    alt={user.name}
                    sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                  />
                )}
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {user.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mb: 0.9, display: `${!user.description && "none"}` }}
                >
                  {newDes}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  {user.placeCount} places on profile
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
};

export default Userspage;
