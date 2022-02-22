import { Container, Typography, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { users } from "../../data/data";
import { posts } from "../../data/data";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getPostByUserId, getUserById } from "../../utils/fetch";

const Userpage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const theme = useTheme();

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUserById(id).then((user) => {
      setUser(user.user);
    });

    getPostByUserId(id).then((posts) => {
      setPosts(posts.places);
    });
  }, []);

  return (
    <Container maxWidth='md' sx={{ pt: 5, pb: 5 }}>
      <Box
        onClick={() => navigate(-1)}
        sx={{
          display: "flex",
          maxWidth: "fit-content",
          alignItems: "center",
          gap: 0.9,
          mb: 4,
          "&:hover": { backgroundColor: "#EDEFEF" },
          paddingInline: 1,
          paddingRight: 2,
          borderRadius: 2,
          transition: "all 0.3s",
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon />
        <Typography variant='h6' sx={{ fontSize: 25 }}>
          Back
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          mb: 5,
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
        {!user.image && (
          <Box
            sx={{
              bgcolor: red[500],
              textTransform: "uppercase",
              height: 200,
              width: 200,
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              marginInline: { xs: "auto", md: "0" },
            }}
            aria-label='recipe'
          >
            <Typography
              sx={{
                fontSize: 50,
                color: "white",
              }}
            >
              {user.name && user.name.slice(0, 1)}
            </Typography>
          </Box>
        )}
        {user.image && (
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
        )}
      </Box>

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
    </Container>
  );
};

export default Userpage;
