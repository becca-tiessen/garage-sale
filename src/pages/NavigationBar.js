import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";
import { Nav, Anchor } from 'grommet';

const NavigationBar = () => {
    let history = useHistory();
    return (
        <>
            <Nav justify="end" direction="row" background="accent4" pad="small">
                <Anchor color="accent2" onClick={() => { history.push('/') }} icon={<HomeIcon />} />
                <Anchor color="accent2" onClick={() => { history.push('/garageProfile') }} icon={<AccountCircleIcon />} />
            </Nav>
        </>
    )
}

export default NavigationBar;