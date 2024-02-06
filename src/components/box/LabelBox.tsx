import React from 'react';
import { InfoRounded } from '@mui/icons-material';
import { Grid, Stack, IconButton, Tooltip, Typography } from '@mui/material';

interface ListBoxProps {
  label: React.ReactNode;
  tooltip?: React.ReactNode;
  component: React.ReactNode;
}

const LabelBox: React.FC<ListBoxProps> = (props) => {
  const { label, tooltip, component } = props;
  return (
    <Grid container alignItems='start' my={1}>
      <Grid item sx={{ width: '150px' }}>
        <Stack flexDirection='row'>
          <Typography variant='body1' fontWeight={500} mt={1} noWrap>
            {label}
          </Typography>
          {tooltip && (
            <Tooltip title={tooltip} placement='top' arrow>
              <IconButton>
                <InfoRounded />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </Grid>
      <Grid item xs>
        {component}
      </Grid>
    </Grid>
  );
};

LabelBox.displayName = 'LabelBox';

LabelBox.defaultProps = {
  tooltip: null,
};
export default LabelBox;
