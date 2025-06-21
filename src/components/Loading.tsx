import { Box, CircularProgress, circularProgressClasses, CircularProgressProps } from "@mui/material";

export default function Loading(props: CircularProgressProps) {
    return (
        <Box sx={{ position: 'relative', display:'flex', alignItems:'center' }}>
            <CircularProgress
                variant="determinate"
                sx={(theme) => ({
                    color: theme.palette.grey[200],
                    ...theme.applyStyles('dark', {
                        color: theme.palette.grey[800],
                    }),
                })}
                size={40}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={(theme) => ({
                    color: '#fff',
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                    ...theme.applyStyles('dark', {
                        color: '#fff',
                    }),
                })}
                size={40}
                thickness={4}
                {...props}
            />
        </Box>
    );
}