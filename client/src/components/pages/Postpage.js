import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { posts } from "../../data/data";

const PerBlog = () => {
  const theme = useTheme();
  const { id } = useParams();
  const blog = posts[id];

  return (
    <>
      <Container
        maxWidth='md'
        sx={{
          pt: theme.spacing(5),
          pb: theme.spacing(5),
          mt: theme.spacing(5),
          mb: theme.spacing(10),
          borderRadius: 5,
        }}
      >
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
              {blog.date} // {blog.creator}
            </Typography>
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
          <Typography variant='h6' sx={{ mb: theme.spacing(5) }}>
            {blog.caption}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default PerBlog;
