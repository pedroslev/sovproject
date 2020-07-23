const {Pool,Client}= require('pg')
const connectionString ='postgres://nknskzkksjrswn:3db4897d9bb441379bf69eb55e105e6f200aa316b9d762379c3285abb13d2493@ec2-18-211-48-247.compute-1.amazonaws.com:5432/d5nviljvls6e8v';

const client = new client({
    connectionString:connectionString,
})

client.connect()

client.query('SELECT * from Productos',(err,res)=>{
    console.log(err,res)
})