import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { posts } from "../../data/data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PerBlog = () => {
  const theme = useTheme();
  const { id } = useParams();
  const blog = posts[id];
  const navigate = useNavigate();

  return (
    <>
      <Container
        maxWidth='md'
        sx={{
          pt: theme.spacing(0),
          pb: theme.spacing(5),
          mt: theme.spacing(5),
          mb: theme.spacing(10),
          borderRadius: 5,
        }}
      >
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
                {blog.date} //
              </Typography>
              <Typography
                onClick={() => navigate(`/users/${blog.creatorId}`)}
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
                {blog.creator}
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
              {blog.likes} Likes
            </Typography>
          </Box>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 600,
              fontSize: { xs: 35, sm: 45 },
            }}
          >
            {blog.title}
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
          }}
        >
          <img src={blog.image} alt='blogImg' />
        </Box>

        <Box
          sx={{
            maxWidth: "600px",
            marginInline: "auto",
            overflow: "hidden",
          }}
        >
          <Typography variant='h6' sx={{ mb: theme.spacing(3) }}>
            {blog.caption}
          </Typography>

          <Button size='large' variant='text' onClick={() => navigate("/")}>
            more posts
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default PerBlog;
