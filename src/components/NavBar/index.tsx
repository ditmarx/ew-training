import { Link as RouterLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const NavBar = () => {
    // const navigate = useNavigate();

    return (
        <nav>
            <Box>
                <Stack direction="row" justifyContent="center" spacing={4}>
                    <Link component={RouterLink} to="/">Home</Link>
                    <Link component={RouterLink} to="/about">About</Link>
                    <Link component={RouterLink} to={`/${Math.random()}`}>Not Found</Link>
                </Stack>
            </Box>
        </nav>
    );
};

export default NavBar;