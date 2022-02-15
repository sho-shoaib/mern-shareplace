import { Grid, Typography, Avatar, AvatarGroup, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { users } from "../../data/data";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 5, paddingInline: { xs: 2, sm: 5 } }}>
      <Grid container sx={{ alignItems: "flex-start" }}>
        <Grid
          id='people'
          item
          sx={{
            borderRadius: 5,
            overflow: "hidden",
            display: { xs: "none", md: "inline-block" },
          }}
          lg={3}
          md={4}
          xs={0}
        >
          <CardActionArea onClick={() => navigate("/users")}>
            <Card
              elevation={0}
              sx={{
                paddingInline: 5,
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                }}
              >
                <Typography variant='h6' component='h5'>
                  People
                </Typography>
                <AvatarGroup max={4} spacing='small' sx={{ ml: 1.5 }}>
                  {users.map((user, i) => {
                    return (
                      <Avatar
                        alt={user.name}
                        src={user.image}
                        sx={{ width: 56, height: 56 }}
                      />
                    );
                  })}
                </AvatarGroup>
                <Button variant='text'>View all</Button>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid
          id='post'
          item
          sx={{
            height: 500,
            paddingInline: 4,
          }}
          lg={7}
          md={8}
          xs={12}
        >
          <Box
            sx={{ backgroundColor: "#f7f9f9", height: "100%", borderRadius: 5 }}
          ></Box>
        </Grid>
        <Grid
          id='create'
          item
          sx={{
            height: 100,
            borderRadius: 5,
            display: { xs: "none", lg: "inline-block" },
          }}
          lg={2}
          xs={0}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant='contained' color='success' endIcon={<AddIcon />}>
              create
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
