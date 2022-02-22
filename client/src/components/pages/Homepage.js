import {
  Grid,
  Typography,
  Avatar,
  AvatarGroup,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useGlobalContext } from "../../utils/context";

const postsType = ["Recent posts", "Most Liked posts", "My posts"];

const Homepage = () => {
  const [toShow, setToShow] = useState("Recent posts");
  const { users, posts } = useGlobalContext();

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        p: 5,
        paddingInline: { xs: 1, sm: 5 },
        backgroundColor: { xs: "#EDEFEF", sm: "#fff" },
      }}
    >
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
          <Card
            elevation={0}
            sx={{
              backgroundColor: "#f7f9f9",
              paddingInline: 5,
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#EDEFEF",
              },
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
                    <Box>
                      {!user.image && (
                        <Avatar
                          sx={{ bgcolor: red[500], textTransform: "uppercase" }}
                          aria-label='recipe'
                        >
                          {user.name.slice(0, 1)}
                        </Avatar>
                      )}
                      {user.image && (
                        <Avatar
                          alt={user.name}
                          src={user.image}
                          sx={{ width: 56, height: 56 }}
                        />
                      )}
                    </Box>
                  );
                })}
              </AvatarGroup>
              <Button variant='text' onClick={() => navigate("/users")}>
                View all
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          id='post'
          item
          sx={{
            paddingInline: 4,
          }}
          lg={7}
          md={8}
          xs={12}
        >
          <Box
            sx={{
              backgroundColor: { xs: "#EDEFEF", sm: "#f7f9f9" },
              height: "100%",
              width: "100%",
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: { xs: 0, sm: 5 },
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#EDEFEF",
              },
            }}
          >
            <div>
              <Box
                sx={{
                  paddingInline: 1,
                  borderRadius: 1,
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  cursor: "pointer",
                }}
                aria-controls='menu'
                onClick={(e) => handleOpenMenu(e)}
              >
                <Typography variant='h6'>{toShow}</Typography>
                <KeyboardArrowDownOutlinedIcon
                  sx={{ transform: "translateY(-1px)", ml: 0.2 }}
                />
              </Box>
              <Menu
                id='menu'
                onClose={handleMenuClose}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
              >
                {postsType.map((postType, i) => {
                  if (postType !== toShow) {
                    return (
                      <MenuItem
                        key={i}
                        onClick={() => {
                          handleMenuClose();
                          setToShow(postType);
                        }}
                      >
                        {postType}
                      </MenuItem>
                    );
                  }
                })}
              </Menu>
            </div>
            {posts.map((post) => {
              let newCap = "";
              if (post.caption.length > 300) {
                newCap = `${post.caption.slice(0, 125)}...`;
              } else {
                newCap = post.caption;
              }

              return (
                <Card key={post._id} sx={{ maxWidth: "100%", mb: 4 }}>
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(`/posts/${post._id}`)}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{ bgcolor: red[500], textTransform: "uppercase" }}
                          aria-label='recipe'
                        >
                          {post.creator.slice(0, 1)}
                        </Avatar>
                      }
                      title={post.title}
                      subheader={post.date}
                    />
                    <CardMedia
                      component='img'
                      height='194'
                      image={post.image}
                      alt='Paella dish'
                    />
                    <CardContent>
                      <Typography variant='body2' color='text.secondary'>
                        {newCap}
                      </Typography>
                    </CardContent>
                  </Box>
                  <CardActions disableSpacing>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ml: 1.5,
                        transform: "translateY(-5px)",
                      }}
                    >
                      <Typography variant='body1'>{post.likes}</Typography>
                      <IconButton aria-label='add to favorites'>
                        <FavoriteIcon />
                      </IconButton>
                    </Box>
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        </Grid>
        <Grid
          id='create'
          item
          sx={{
            height: 100,
            borderRadius: 5,
            display: { xs: "none", lg: "inline-block" },
            overflow: "hidden",
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
              backgroundColor: "#f7f9f9",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#EDEFEF",
              },
            }}
          >
            <Button
              onClick={() => navigate("/create")}
              variant='contained'
              color='success'
              endIcon={<AddIcon />}
            >
              create
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
