import React, { useEffect, useState } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button, Box } from '@mui/material';
// import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button } from '@mui/material';

const Home = () => {
    // const rows=[{"id":"101","name":"Chinnu","dept":"Sales","loc":"Tvm"},
    //     {"id":"102","name":"Akhila","dept":"HR","loc":"Kollam"},
    //     {"id":"103","name":"Janvi","dept":"It","loc":"Kochi"}]
    const [rows,setRows]=useState([]);
    // connect to external api(useEffect)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setRows(res.data);
        })
    },[])

    {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right"><img src={row.image} alt={row.title} style={{ width: '50px', height: '50px' }} /></TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">({row.rating.rate}{row.rating.count})</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
} */}

return (
  <Box sx={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <Grid container spacing={4}>
          {rows.map((row) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={row.id}>
                  <Card sx={{ maxWidth: 345, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
                      <CardMedia
                          component="img"
                          height="200"
                          image={row.image}
                          alt={row.title}
                          sx={{ objectFit: 'contain', padding: '10px', backgroundColor: '#fafafa' }}
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
                              {row.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                              Price: <strong>${row.price}</strong>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                              Rating: <strong>{row.rating?.rate}</strong> ({row.rating?.count} reviews)
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" sx={{ color: '#007bff' }}>Add to Cart</Button>
                          <Button size="small" sx={{ color: '#007bff' }}>Details</Button>
                      </CardActions>
                  </Card>
              </Grid>
          ))}
      </Grid>
  </Box>
);
};

export default Home;