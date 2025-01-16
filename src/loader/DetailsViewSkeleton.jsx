import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Skeleton,
  Tabs,
  Tab,
  Divider,
  Card,
  CardContent,
} from '@mui/material';

const DetailsViewSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch', // Stretch to full width
        
        bgcolor: 'background.default',
        p: 0, // No padding to ensure full width
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: '100%', // Take full width
        
          p: 5,
          borderRadius: 4,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, #1e293b, #374151)'
              : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Skeleton
            variant="text"
            width="40%"
            height={32}
            sx={{ borderRadius: 2 }}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Skeleton
              variant="rectangular"
              width={120}
              height={40}
              sx={{ borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              width={120}
              height={40}
              sx={{ borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              width={100}
              height={40}
              sx={{ borderRadius: 2 }}
            />
          </Box>
        </Box>
        <Divider sx={{ mb: 4 }} />

        {/* Tabs */}
        <Tabs
          value={0}
          sx={{
            mb: 4,
            '& .MuiTab-root': {
              textTransform: 'capitalize',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'color 0.3s ease',
            },
            '& .Mui-selected': {
              color: 'primary.main',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Tab
              key={index}
              label={<Skeleton variant="text" width={80} height={20} />}
              disabled
            />
          ))}
        </Tabs>

        {/* Tab Content */}
        <Card
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            background: 'background.paper',
            width: '100%', // Ensure card spans full width
          }}
        >
          <CardContent>
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              <Box
                key={rowIndex}
                display="flex"
                sx={{
                  mb: 2,
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Skeleton
                  variant="text"
                  width="30%"
                  height={20}
                  sx={{ borderRadius: 2 }}
                />
                <Skeleton
                  variant="text"
                  width="60%"
                  height={20}
                  sx={{ borderRadius: 2 }}
                />
              </Box>
            ))}
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default DetailsViewSkeleton;
