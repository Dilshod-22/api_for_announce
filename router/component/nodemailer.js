const nodemailer = require("nodemailer")

const Nodemailer = (email) =>{
    let password = ""
    for(let i=0;i<7;i++){
        let number = Math.floor(Math.random()*6)
        password += number
    }
    try{
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'restart.parol@gmail.com',
            pass: 'uteabzkjapmbiabw'
        }
    });  
    var mailOptions = {
        from: 'restart.parol@gmail.com',
        to: `${email}`,
        subject: 'Restart Password',
        text: `${password}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    return password
    }catch{
        res.json("nodemailer da nosozlik aperatorga murojat qiling")
    }
}

module.exports = Nodemailer


