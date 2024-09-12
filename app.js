const server= require('json-server')
const midleware=server.defaults();
const router=server.router('db.json')

app=server.create()
app.use(midleware)
app.use(router)

const port=3000 || process.env.PORT

app.listen(port,()=>{
    console.log('server running at port',port)
})

app.get('/contact',(req,res)=>{
    console.log('connected contact')
})

app.get('/user', (req, res) => {
    res.json({ message: 'This is a custom route!' });
});

app.get('/cat', (req, res) => {
    res.json(console.log('cat updated'));
});
app.get('/his', (req, res) => {
    res.json(console.log('cat updated'));
});

