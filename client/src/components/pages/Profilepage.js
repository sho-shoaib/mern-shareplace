import {
  Container,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { users } from "../../data/data";
import { posts } from "../../data/data";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Userpage = () => {
  const navigate = useNavigate();
  const id = 0;
  const user = users[id];
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Container maxWidth='md' sx={{ pt: 5, pb: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 600,
                fontSize: { xs: 35, sm: 45 },
              }}
              gutterBottom
            >
              {user.name}
            </Typography>
            <Box maxWidth={450} sx={{ mb: { xs: 1.2, md: 0 } }}>
              <Typography>{user.description}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              mb: theme.spacing(1),
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                color: "var(--grey)",
                fontWeight: "700",
                fontSize: { sm: 14, xs: 12 },
                display: "flex",
                mb: theme.spacing(1),
                alignItems: "center",
                textDecoration: "underline",
              }}
            >
              {user.placeCount}
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                color: "var(--grey)",
                fontWeight: "700",
                fontSize: { sm: 14, xs: 13 },
                display: "flex",
                mb: theme.spacing(1),
                alignItems: "center",
              }}
            >
              places on profile
            </Typography>
          </Box>
        </Box>
        <Box
          component='img'
          src={user.image}
          alt={user.name}
          sx={{
            borderRadius: "50%",
            height: 250,
            width: 250,
            objectFit: "cover",
            marginInline: { xs: "auto", md: "0" },
          }}
        />
      </Box>

      <Button
        onClick={() => navigate("/create")}
        variant='contained'
        color='success'
        endIcon={<AddIcon />}
        sx={{ mb: 4 }}
      >
        create
      </Button>

      <Box
        sx={{
          backgroundColor: { xs: "#EDEFEF", sm: "#f7f9f9" },
          height: "100%",
          width: "100%",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: { xs: 1, sm: 5 },
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: "#EDEFEF",
          },
        }}
      >
        {posts.map((post) => {
          let newCap = "";
          if (post.creatorId === user.id) {
            if (post.caption.length > 300) {
              newCap = `${post.caption.slice(0, 125)}...`;
            } else {
              newCap = post.caption;
            }

            return (
              <Card key={post.id} sx={{ maxWidth: "100%", mb: 4 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                      R
                    </Avatar>
                  }
                  action={
                    <div>
                      <IconButton
                        aria-controls='menu'
                        aria-label='settings'
                        sx={{ zIndex: "1" }}
                        onClick={(e) => handleOpenMenu(e)}
                      >
                        <MoreVertIcon />
                      </IconButton>

                      <Menu
                        id='menu'
                        onClose={handleMenuClose}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                      >
                        <MenuItem
                          onClick={() => {
                            handleMenuClose();
                            handleEdit();
                          }}
                        >
                          Edit
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleMenuClose();
                            handleDelete();
                          }}
                        >
                          Delete
                        </MenuItem>
                      </Menu>
                    </div>
                  }
                  title={post.title}
                  subheader={post.date}
                />
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate(`/posts/${post.id}`)}
                >
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
          }
        })}
      </Box>
    </Container>
  );
};

export default Userpage;
