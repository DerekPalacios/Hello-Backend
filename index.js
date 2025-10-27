const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('servidor funcionando');
	
});
	
app.listen(3000, () => console.log('Servidor activo en http://loalhost:3000'));
