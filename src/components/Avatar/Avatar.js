import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars({img}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={img} sx={{ width: 80, height: 80, boxShadow:"5px 5px 10px black", margin:"10px" }} />
    </Stack>
  );
}