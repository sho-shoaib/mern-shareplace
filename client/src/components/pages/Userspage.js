import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { users } from "../../data/data";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Userspage = () => {
  const navigate = useNavigate();

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
      {users.map((user, i) => {
        let newDes = "";
        if (user.description.length > 125) {
          newDes = `${user.description.slice(0, 125)}...`;
        } else {
          newDes = user.description;
        }

        return (
          <Card
            key={i}
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
              onClick={() => navigate(`/users/${user.id}`)}
            >
              <CardMedia
                component='img'
                height='140'
                image={user.image}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {user.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mb: 0.9 }}
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
