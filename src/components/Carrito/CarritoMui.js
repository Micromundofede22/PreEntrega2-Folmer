import "./CarritoMui.scss"
import * as React from 'react';
import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CarritoContexto } from "../../Context/CarritoContexto";
import { Link } from "react-router-dom";



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CarritoMui() {

  const { totalCantidad, carrito } = useContext(CarritoContexto)

  return (
    <Link to="/carrito"
    className={carrito.length > 0 ? "link-carrito-activo" : "link-carrito" }>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={totalCantidad()} color="error">
          <ShoppingCartIcon style={{ fontSize: "40px" }} />
        </StyledBadge>
      </IconButton>
    </Link>
  );

}
