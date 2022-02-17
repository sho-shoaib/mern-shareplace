import {
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { users } from "../../data/data";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

Date.prototype.toShortFormat = function () {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = this.getDate();

  let monthIndex = this.getMonth();
  let monthName = monthNames[monthIndex];

  let year = this.getFullYear();

  return `${day} ${monthName} ${year}`;
};

const Createpage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [preview, setPreview] = useState("card");
  const theme = useTheme();

  const id = 0;
  const user = users[id];

  let cardCap = "";
  if (caption.length > 300) {
    cardCap = `${caption.slice(0, 125)}...`;
  } else {
    cardCap = caption;
  }

  let today = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth='md' sx={{ pt: 5, pb: 5 }}>
      <Box
        onClick={() => navigate(-1)}
        sx={{
          display: "flex",
          maxWidth: "fit-content",
          alignItems: "center",
          gap: 0.9,
          mb: 5,
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

      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          label='Title'
          variant='filled'
          fullWidth
          required
          sx={{ mb: 5 }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Box
          sx={{
            maxWidth: "100%",
            display: "flex",
            gap: 5,
            mb: 5,
            flexDirection: "column",
          }}
        >
          <TextField
            required
            multiline
            fullWidth
            label='Caption'
            variant='outlined'
            rows={6}
            onChange={(e) => setCaption(e.target.value)}
          />
          <TextField fullWidth label='Image' variant='outlined' />

          <Button
            type='submit'
            variant='contained'
            endIcon={<AddIcon />}
            sx={{ alignSelf: "center" }}
            disableRipple
          >
            Add
          </Button>
        </Box>
      </form>

      <Typography variant='h6' sx={{ mb: 2 }}>
        Preview
      </Typography>

      <ButtonGroup sx={{ mb: 4 }}>
        <Button
          onClick={() => setPreview("card")}
          variant={preview === "card" ? "contained" : "outlined"}
          disableElevation
          disableRipple
        >
          card
        </Button>
        <Button
          onClick={() => setPreview("page")}
          variant={preview === "page" ? "contained" : "outlined"}
          disableElevation
          disableRipple
        >
          page
        </Button>
      </ButtonGroup>

      {preview === "card" && (
        <Card elevation={5} sx={{ maxWidth: "90%", marginInline: "auto" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                R
              </Avatar>
            }
            title={title || "Post title here"}
            subheader={today.toShortFormat()}
          />
          <CardMedia
            component='img'
            height='194'
            image='https://images.unsplash.com/photo-1633998860517-29b9ada37476?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            alt='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {cardCap || "Post caption here"}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1.5,
                transform: "translateY(-5px)",
              }}
            >
              <Typography variant='body1'>0</Typography>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      )}

      {preview === "page" && (
        <Box>
          <Box
            sx={{
              maxWidth: "100%",
              mr: "auto",
              mb: theme.spacing(5),
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant='caption'
                  sx={{
                    textTransform: "uppercase",
                    color: "var(--grey)",
                    fontWeight: "700",
                    fontSize: { sm: 12.5, xs: 11.5 },
                    display: "block",
                    mb: theme.spacing(1),
                  }}
                >
                  {today.toShortFormat()} //
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    color: "var(--grey)",
                    fontWeight: "700",
                    fontSize: { sm: 12.5, xs: 11.5 },
                    display: "block",
                    mb: theme.spacing(1),
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {user.name}
                </Typography>
              </Box>
              <Typography
                variant='caption'
                sx={{
                  textTransform: "uppercase",
                  color: "var(--grey)",
                  fontWeight: "700",
                  fontSize: { sm: 12.5, xs: 11.5 },
                  display: "block",
                  mb: theme.spacing(1),
                }}
              >
                0 Likes
              </Typography>
            </Box>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 600,
                fontSize: { xs: 35, sm: 45 },
              }}
            >
              {title || "Post title here"}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              maxHeight: "500px",
              marginInline: "auto",
              borderRadius: 3,
              overflow: "hidden",
              mb: theme.spacing(5),
              objectFit: "cover",
            }}
            component='img'
            src="https://images.unsplash.com/photo-1633998860517-29b9ada37476?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              alt='blogImg"
          ></Box>

          <Box
            sx={{
              maxWidth: "600px",
              marginInline: "auto",
              overflow: "hidden",
            }}
          >
            <Typography variant='h6' sx={{ mb: theme.spacing(3) }}>
              {caption || "Post caption here"}
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Createpage;
